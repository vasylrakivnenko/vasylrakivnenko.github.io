/* ==========================================================================
   Static site generator. No dependencies — `node build.mjs` and you're done.

     data/site.mjs + data/projects.mjs + data/cv.mjs
        ->  index.html · cv/index.html · 404.html · sitemap.xml

   Every page is fully rendered HTML: no client-side routing, no hydration,
   nothing to wait for. assets/site.css and assets/site.js are hand-authored
   and simply copied through by git — this script never touches them.
   ========================================================================== */

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { site, nav, hero, about, research, contact } from "./data/site.mjs";
import { projects, sectors } from "./data/projects.mjs";
import { cv } from "./data/cv.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));

/* ----------------------------------------------------------- helpers -- */

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Escape for use inside a double-quoted HTML attribute holding JSON. */
const attr = (v) => esc(JSON.stringify(v));

const list = (items, fn) => items.map(fn).join("");

/** Wrap TODO placeholders in a loud marker so a half-finished CV can't ship
 *  quietly. Remove the TODO text in data/ and the marker disappears. */
const todo = (s) =>
  esc(s).replace(
    /TODO:?([^<]*)/g,
    (_, rest) => `<mark class="todo">TODO${esc(rest)}</mark>`,
  );

/* -------------------------------------------------------------- icons -- */
/* Inline so the page needs zero icon-font or JS payload. Paths are the
   24x24 stroke set the previous design used, kept for visual continuity. */

const ICON = {
  arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  arrowLeft: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
  arrowDown: '<path d="M12 5v14M19 12l-7 7-7-7"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  printer:
    '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3h12v6M6 14h12v7H6z"/>',
  github:
    '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
};

const icon = (name, cls = "") =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${cls ? ` class="${cls}"` : ""}>${ICON[name]}</svg>`;

const xLogo = () =>
  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>';

/* -------------------------------------------------------------- shell -- */

function head({ title, description, path, extraCss = "" }) {
  const url = site.origin + path;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${esc(url)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:image" content="${site.origin}/opengraph.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@rakivnenkow">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${site.origin}/opengraph.jpg">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&family=Fraunces:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/site.css">${extraCss}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<div class="progress" aria-hidden="true"></div>`;
}

function navbar() {
  const links = list(
    nav,
    (l) => `<a class="nav__link" href="${l.href}">${esc(l.label)}</a>`,
  );
  return `<header class="nav">
<div class="nav__inner">
  <a class="brand" href="/">
    <span class="brand__name">${esc(site.name)}</span>
    <span class="brand__role">${esc(site.role)}</span>
  </a>
  <nav class="nav__links" aria-label="Primary">${links}</nav>
  <div class="nav__actions">
    <a class="btn btn--blue nav__cta" href="mailto:${site.email}">Get in touch</a>
    <button class="nav__burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">${icon("menu")}</button>
  </div>
</div>
</header>

<div class="drawer" id="drawer">
  <div class="drawer__scrim"></div>
  <div class="drawer__panel" role="dialog" aria-modal="true" aria-label="Menu">
    <div class="drawer__head">
      <span>${esc(site.name)}</span>
      <button class="drawer__close" type="button" aria-label="Close menu">${icon("x")}</button>
    </div>
    <nav class="drawer__nav" aria-label="Mobile">
      ${list(nav, (l) => `<a href="${l.href}">${esc(l.label)}</a>`)}
    </nav>
    <div class="drawer__foot">
      <a class="btn btn--blue" href="mailto:${site.email}">Get in touch</a>
    </div>
  </div>
</div>`;
}

function footer() {
  return `<footer class="footer">
<div class="shell">
  <div class="footer__top">
    <div class="footer__brand">
      <b>${esc(site.name)} — ${esc(site.role)}</b>
    </div>
    <div class="footer__links">
      <a href="mailto:${site.email}">${icon("mail")}${esc(site.email)}</a>
      <a href="${site.github}" target="_blank" rel="noopener noreferrer">${icon("github")}GitHub</a>
      <a href="${site.linkedin}" target="_blank" rel="noopener noreferrer">${icon("linkedin")}LinkedIn</a>
      <a href="/cv/">${icon("printer")}CV</a>
    </div>
  </div>
  <div class="footer__base">© ${new Date().getFullYear()} ${esc(site.name)}</div>
</div>
</footer>
<script src="/assets/site.js" defer></script>
</body>
</html>`;
}

/* ------------------------------------------------------------ sections -- */

function heroSection() {
  return `<section class="hero">
  <div class="hero__bg">
    <img src="${hero.image.src}" alt="${esc(hero.image.alt)}" fetchpriority="high">
  </div>
  <div class="hero__inner">
    <div class="hero__copy">
      <p class="hero__eyebrow">${esc(hero.eyebrow)}</p>
      <h1>${esc(hero.headline)} <br class="hide-sm"><span class="accent">${esc(hero.headlineAccent)}</span></h1>
      <p class="hero__lede">${esc(hero.lede)}</p>
      <div class="hero__actions">
        <a class="btn btn--rust" href="#work">See my work ${icon("arrowDown")}</a>
        <a class="btn btn--ghost-light" href="/cv/">My CV ${icon("arrowRight")}</a>
      </div>
      <p class="hero__stack">${hero.stack.map((s) => esc(s)).join(' <span class="tick">/</span> ')}</p>
    </div>
  </div>
</section>`;
}

function aboutSection() {
  const marquee = list(
    [...about.marquee, ...about.marquee],
    (m) => `<span class="marquee__item">${esc(m)}</span>`,
  );
  const stats = list(about.stats, (s) =>
    typeof s.value === "number"
      ? `<div class="stat"><b data-count="${s.value}" data-suffix="${esc(s.suffix || "")}">0${esc(s.suffix || "")}</b><span>${esc(s.label)}</span></div>`
      : `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`,
  );
  const firstFour = about.photos.slice(0, 4);

  return `<section id="about">
<div class="marquee" aria-hidden="true"><div class="marquee__track">${marquee}</div></div>
<div class="section section--cream" style="border-top:0">
  <div class="shell">
    <div class="about">
      <div data-reveal>
        <h2>${esc(about.title)}</h2>
        ${list(about.paragraphs, (t, i) => `<p class="${i === 0 ? "about__serif" : "about__body"}">${esc(t)}</p>`)}
      </div>
      <div data-reveal data-reveal-delay="120" data-gallery="${attr(about.photos)}">
        <div class="gallery__head">
          <p>Speaking &amp; events</p>
          <div class="gallery__nav">
            <button type="button" data-gallery-prev aria-label="Previous photos">${icon("chevronLeft")}</button>
            <button type="button" data-gallery-next aria-label="Next photos">${icon("chevronRight")}</button>
          </div>
        </div>
        <div class="gallery__grid">
          ${list(
            firstFour,
            (p) => `<button type="button" class="gallery__cell" aria-label="Open photo: ${esc(p.alt)}">
  <img src="${p.src}" alt="${esc(p.alt)}" loading="lazy">
  <figcaption aria-hidden="true">${esc(p.alt)}</figcaption>
</button>`,
          )}
        </div>
        <div class="gallery__dots"></div>
      </div>
    </div>
    <div class="stats" data-reveal>${stats}</div>
  </div>
</div>
<div class="lightbox" hidden>
  <button class="lightbox__close" type="button" aria-label="Close photo">${icon("x")}</button>
  <div><img src="" alt=""><p></p></div>
</div>
</section>`;
}

/* A 2-up grid of equal-height cards. The card shows the short read; the
   full description opens in a dialog, so the section stays scannable. */
function workSection() {
  const live = projects.filter((p) => !p.draft);
  const card = (p, i) => {
    const s = sectors[p.sector] ?? { label: p.sector, color: "#5D6B7A", tint: "#F1F3F6" };
    const hasOutcome = !/^TODO/.test(p.outcome);
    return `<article class="pcard" style="--accent:${s.color};--tint:${s.tint}" data-reveal data-reveal-delay="${Math.min(i, 3) * 60}">
  <span class="pcard__rule" aria-hidden="true"></span>
  <span class="pcard__tag">${esc(s.label)}</span>
  <h3 class="pcard__title">${esc(p.title)}</h3>
  <p class="pcard__meta">${esc(p.meta)}</p>
  <p class="pcard__body">${esc(p.one)}</p>
  ${hasOutcome ? `<p class="pcard__outcome">${esc(p.outcome)}</p>` : ""}
  <button class="pcard__more" type="button"
    data-title="${esc(p.title)}" data-meta="${esc(p.meta)}"
    data-body="${esc(p.one)}" data-outcome="${hasOutcome ? esc(p.outcome) : ""}"
    data-label="${esc(s.label)}" data-color="${s.color}" data-tint="${s.tint}">
    Read more ${icon("arrowRight")}
  </button>
</article>`;
  };

  return `<section class="section section--cool" id="work">
<div class="shell">
  <div class="section__head" data-reveal>
    <h2 class="section__title">Portfolio</h2>
    <p class="section__lede">Systems that went into production. Most of it is under NDA, so the work is described and the clients are not.</p>
  </div>
  <div class="pgrid">${list(live, card)}</div>
</div>

<div class="modal" hidden>
  <div class="modal__scrim" data-modal-close></div>
  <div class="modal__panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <span class="modal__rule" aria-hidden="true"></span>
    <button class="modal__close" type="button" aria-label="Close" data-modal-close>${icon("x")}</button>
    <span class="modal__tag"></span>
    <h3 class="modal__title" id="modal-title"></h3>
    <p class="modal__meta"></p>
    <p class="modal__body"></p>
    <p class="modal__outcome"></p>
  </div>
</div>
</section>`;
}

function researchSection() {
  const MONTH = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
  const ts = (d) => {
    const [m, y] = String(d).split(" ");
    return Number(y) * 12 + MONTH.indexOf(m);
  };
  const rows = [
    ...research.items,
    ...research.blog.map((b) => ({ ...b, kind: "Blog" })),
  ].sort((a, b) => ts(b.date) - ts(a.date));
  return `<section class="section section--ink" id="research">
<div class="shell">
  <div class="section__head" data-reveal>
    <h2 class="section__title">${esc(research.title)}</h2>
    <p class="section__lede">${esc(research.lede)}</p>
  </div>
  <div class="stream__rows" data-reveal>
    ${list(
      rows,
      (r) => `<a class="row row--link" href="${r.href}" target="_blank" rel="noopener noreferrer">
  <span class="row__meta"><b>${esc(r.kind)}</b>${esc(r.date)}</span>
  <span><span class="row__title">${esc(r.title)}</span><span class="row__where">${esc(r.where)}</span></span>
  ${icon("arrowRight", "row__go")}
</a>`,
    )}
  </div>
</div>
</section>`;
}

function contactSection() {
  return `<section class="contact" id="contact">
<div class="contact__glow contact__glow--a" aria-hidden="true"></div>
<div class="contact__glow contact__glow--b" aria-hidden="true"></div>
<div class="contact__inner" data-reveal>
  <h2>${esc(contact.title)}</h2>
  <p>${esc(contact.body)}</p>
  <a class="btn btn--blue" href="mailto:${site.email}">${esc(site.email)} ${icon("arrowRight")}</a>
  <div class="contact__links">
    <a href="${site.calendly}" target="_blank" rel="noopener noreferrer">Book a call</a>
    <span aria-hidden="true">·</span>
    <a href="${site.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <span aria-hidden="true">·</span>
    <a href="${site.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
    <span aria-hidden="true">·</span>
    <a href="/cv/">CV</a>
  </div>
</div>
</section>`;
}

/* --------------------------------------------------------------- pages -- */

function homePage() {
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.origin + "/",
    email: "mailto:" + site.email,
    sameAs: [site.linkedin, site.x, site.github, site.scholar],
    description: site.description,
  };
  return (
    head({
      title: `${site.name} — AI Engineer`,
      description: site.description,
      path: "/",
    }) +
    `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` +
    navbar() +
    `<main id="main">` +
    heroSection() +
    aboutSection() +
    workSection() +
    researchSection() +
    contactSection() +
    `</main>` +
    footer()
  );
}

function cvPage() {
  const section = (s) => `<section class="cv__section" data-reveal>
  <h2 class="cv__h2">${esc(s.title)}</h2>
  ${
    s.note
      ? `<p class="cv__note">${todo(s.note)}</p>`
      : ""
  }
  <div class="cv__entries">
  ${list(
    s.entries,
    (e) => `<article class="cv__entry">
    <div class="cv__when">${todo(e.when || "")}</div>
    <div class="cv__what">
      <h3>${esc(e.title)}</h3>
      ${e.org ? `<p class="cv__org">${esc(e.org)}</p>` : ""}
      ${e.body ? `<p class="cv__body">${todo(e.body)}</p>` : ""}
      ${
        e.bullets?.length
          ? `<ul class="cv__bullets">${list(e.bullets, (b) => `<li>${todo(b)}</li>`)}</ul>`
          : ""
      }
      ${
        e.chips?.length
          ? `<div class="cv__chips">${list(e.chips, (c) => `<span class="chip">${esc(c)}</span>`)}</div>`
          : ""
      }
    </div>
  </article>`,
  )}
  </div>
</section>`;

  return (
    head({
      title: `CV — ${site.name}, AI Engineer`,
      description: `Curriculum vitae of ${site.name}: AI engineering at Stanford Law School, AI economics research at Stanford GSB, teaching at Stanford Continuing Studies, and a bootstrapped 170-person company.`,
      path: "/cv/",
      extraCss: '\n<link rel="stylesheet" href="/assets/cv.css">',
    }) +
    navbar() +
    `<main id="main" class="cv">

<header class="cv__masthead">
  <div class="shell">
    <a class="backlink" href="/">${icon("arrowLeft")}Back to home</a>
    <div class="cv__id">
      <div>
        <h1>${esc(site.name)}</h1>
        <p class="cv__title">${esc(cv.headline)}</p>
        <p class="cv__summary">${esc(cv.summary)}</p>
        <p class="cv__updated">Updated ${esc(cv.updated)}</p>
      </div>
      <div class="cv__meta">
        ${list(
          cv.contact,
          (c) =>
            `<a href="${c.href}"${c.href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}><span>${esc(c.label)}</span>${esc(c.value)}</a>`,
        )}
        <button class="btn btn--ghost btn--sm cv__print" type="button" onclick="window.print()">${icon("printer")}Save as PDF</button>
      </div>
    </div>
  </div>
</header>

<div class="shell cv__body-grid">
  <div class="cv__main">
    ${list(cv.sections, section)}
  </div>
  <aside class="cv__aside">
    ${list(
      cv.aside,
      (a) => `<div class="cv__panel">
      <h2 class="cv__h3">${esc(a.title)}</h2>
      ${
        a.chips
          ? `<div class="cv__chips">${list(a.chips, (c) => `<span class="chip">${esc(c)}</span>`)}</div>`
          : `<ul class="cv__plain">${list(a.items, (i) => `<li>${esc(i)}</li>`)}</ul>`
      }
    </div>`,
    )}
  </aside>
</div>

</main>` +
    footer()
  );
}

function notFoundPage() {
  return (
    head({
      title: `Page not found — ${site.name}`,
      description: "That page doesn’t exist.",
      path: "/404.html",
    }) +
    navbar() +
    `<main id="main">
<section class="subhero" style="min-height:70vh;display:flex;align-items:center">
  <div class="subhero__inner">
    <p class="eyebrow">404</p>
    <h1>That page doesn’t exist.</h1>
    <p class="subhero__lede">The link is broken or the page has moved.</p>
    <div class="subhero__actions">
      <a class="btn btn--rust" href="/">Home ${icon("arrowRight")}</a>
      <a class="btn btn--ghost-light" href="/#work">Portfolio ${icon("arrowRight")}</a>
    </div>
  </div>
</section>
</main>` +
    footer()
  );
}

function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${["/", "/cv/"]
  .map((u) => `  <url><loc>${site.origin}${u}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n")}
</urlset>
`;
}

/* ---------------------------------------------------------------- run -- */

async function emit(relPath, contents) {
  const full = join(ROOT, relPath);
  await mkdir(dirname(full), { recursive: true });
  await writeFile(full, contents, "utf8");
  console.log("  ✓", relPath);
}

const held = projects.filter((p) => p.draft);

console.log("Building site…");
await emit("index.html", homePage());
await emit("cv/index.html", cvPage());
await emit("404.html", notFoundPage());
await emit("sitemap.xml", sitemap());
await emit(
  "robots.txt",
  `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`,
);
console.log("Done.");

// Nothing ships with a placeholder in it.
const pages = { "index.html": homePage(), "cv/index.html": cvPage() };
const dirty = Object.entries(pages).filter(([, html]) => /TODO/.test(html));
if (dirty.length) {
  console.error("\n✗ TODO placeholder found in generated output:");
  dirty.forEach(([f]) => console.error(`   ${f}`));
  console.error("  Fix it in data/ — nothing ships with a placeholder.\n");
  process.exit(1);
}

if (held.length) {
  console.log(
    `\n${projects.length - held.length} of ${projects.length} projects live. ${held.length} held back:`,
  );
  held.forEach((p) => {
    const why = (p.draft === true ? "" : String(p.draft)) || "";
    console.log(`   · ${p.title}`);
  });
  console.log(
    "\n   Each needs one line from you. Replace `outcome`, delete `draft: true`.\n",
  );
}
