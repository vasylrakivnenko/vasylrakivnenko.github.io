/* ==========================================================================
   Static site generator. No dependencies — `node build.mjs` and you're done.

     data/site.mjs  +  data/cv.mjs   ->   index.html
                                          cv/index.html
                                          sectors/<slug>/index.html
                                          404.html
                                          sitemap.xml

   Every page is fully rendered HTML: no client-side routing, no hydration,
   nothing to wait for. assets/site.css and assets/site.js are hand-authored
   and simply copied through by git — this script never touches them.
   ========================================================================== */

import { writeFile, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  site,
  nav,
  hero,
  stackSection,
  capabilities,
  about,
  research,
  projects,
  now,
  contact,
  sectors,
} from "./data/site.mjs";
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
  // capability icons
  workflow:
    '<rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6l8-3 8 3z"/>',
  layers:
    '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.5-9.17 4.16a2 2 0 0 1-1.66 0L2 12.5"/><path d="m22 17.5-9.17 4.16a2 2 0 0 1-1.66 0L2 17.5"/>',
  expand: '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',
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
  const links = (items) =>
    list(
      items,
      (l) => `<a class="nav__link" href="${l.href}">${esc(l.label)}</a>`,
    );

  const sectorItems = list(
    sectors,
    (s) => `<a class="nav__menu-item" href="/sectors/${s.slug}/">
<span><strong>${esc(s.label)}</strong><span>${esc(s.desc)}</span></span>
${icon("arrowRight")}
</a>`,
  );

  return `<header class="nav">
<div class="nav__inner">
  <a class="brand" href="/">
    <span class="brand__name">${esc(site.name)}</span>
    <span class="brand__role">${esc(site.role)}</span>
  </a>

  <nav class="nav__links" aria-label="Primary">
    ${links(nav.before)}
    <div class="nav__drop">
      <button class="nav__drop-btn" type="button" aria-expanded="false" aria-haspopup="true">Sectors ${icon("chevronDown")}</button>
      <div class="nav__menu">
        <div class="nav__menu-rule"></div>
        <div class="nav__menu-body">
          <p class="nav__menu-label">Portfolio by industry</p>
          ${sectorItems}
          <div class="nav__menu-foot">${esc(site.name)} · ${esc(site.role)}</div>
        </div>
      </div>
    </div>
    ${links(nav.after)}
  </nav>

  <div class="nav__actions">
    <a class="btn btn--blue nav__cta" href="${site.calendly}" target="_blank" rel="noopener noreferrer">Let’s talk</a>
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
      ${list(nav.before, (l) => `<a href="${l.href}">${esc(l.label)}</a>`)}
      <button class="drawer__toggle" type="button" aria-expanded="false" aria-controls="drawer-sectors">
        <span>Sectors</span>${icon("chevronDown")}
      </button>
      <div class="drawer__sub" id="drawer-sectors" hidden>
        <div class="drawer__sub-rule"></div>
        ${list(
          sectors,
          (s) => `<a href="/sectors/${s.slug}/">
<span><strong>${esc(s.label)}</strong><span>${esc(s.desc)}</span></span>${icon("arrowRight")}
</a>`,
        )}
      </div>
      ${list(nav.after, (l) => `<a href="${l.href}">${esc(l.label)}</a>`)}
    </nav>
    <div class="drawer__foot">
      <a class="btn btn--blue" href="${site.calendly}" target="_blank" rel="noopener noreferrer">Let’s talk</a>
      <p>30 minutes. No deck, no obligation.</p>
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
      <p>Enterprise AI systems: agentic workflows, retrieval, evaluation, and the infrastructure that keeps them running.</p>
    </div>
    <div class="footer__links">
      <a href="mailto:${site.email}">${icon("mail")}${esc(site.email)}</a>
      <a href="${site.github}" target="_blank" rel="noopener noreferrer">${icon("github")}GitHub</a>
      <a href="${site.x}" target="_blank" rel="noopener noreferrer">${xLogo()}X / Twitter</a>
      <a href="${site.linkedin}" target="_blank" rel="noopener noreferrer">${icon("linkedin")}LinkedIn</a>
      <a href="/cv/">${icon("printer")}CV</a>
    </div>
  </div>
  <div class="footer__base">© ${new Date().getFullYear()} ${esc(site.name)}. All rights reserved.</div>
</div>
</footer>
<script src="/assets/site.js" defer></script>
</body>
</html>`;
}

/* ------------------------------------------------------ home sections -- */

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
        <a class="btn btn--rust" href="#portfolio">See what I’ve built ${icon("arrowDown")}</a>
        <a class="btn btn--ghost-light" href="/cv/">Read my CV ${icon("arrowRight")}</a>
      </div>
      <p class="hero__stack">${hero.stack.map((s) => esc(s)).join(' <span class="tick">/</span> ')}</p>
      <div class="hero__chips">${list(hero.chips, (c) => `<span>${esc(c)}</span>`)}</div>
    </div>
  </div>
</section>`;
}

function stackDiagram() {
  const layers = list(
    stackSection.layers,
    (l) => `<button type="button" class="layer" role="tab" aria-selected="false"
  data-num="${esc(l.num)}" data-name="${esc(l.name)}"
  data-headline="${esc(l.headline)}" data-detail="${esc(l.detail)}"
  data-stack="${esc(l.stack.join("|"))}">
  <span class="layer__num">${esc(l.num)}</span>
  <span>
    <span class="layer__name">${esc(l.name)}</span>
    <span class="layer__hint">${esc(l.hint)}</span>
  </span>
</button>`,
  );

  // The panel is server-rendered with layer 06 so the section is meaningful
  // before (and without) JavaScript.
  const first = stackSection.layers[0];

  return `<section class="section section--cream" id="stack">
<div class="shell">
  <div class="section__head" data-reveal>
    <p class="eyebrow">${esc(stackSection.eyebrow)}</p>
    <h2 class="section__title">${esc(stackSection.title)}</h2>
    <p class="section__lede">${esc(stackSection.lede)}</p>
  </div>
  <div class="stackdiag">
    <div class="layers" role="tablist" aria-label="The AI stack" data-reveal>${layers}</div>
    <div class="layerpanel" role="tabpanel" aria-live="polite" data-reveal data-reveal-delay="120">
      <div class="layerpanel__body">
        <p class="layerpanel__tag">Layer ${esc(first.num)} · ${esc(first.name)}</p>
        <h3>${esc(first.headline)}</h3>
        <p>${esc(first.detail)}</p>
        <div class="layerpanel__chips">${list(first.stack, (s) => `<span class="chip">${esc(s)}</span>`)}</div>
      </div>
    </div>
  </div>
</div>
</section>`;
}

function capabilitiesSection() {
  return `<section class="section section--cool" id="capabilities">
<div class="shell">
  <div class="section__head" data-reveal>
    <p class="eyebrow">${esc(capabilities.eyebrow)}</p>
    <h2 class="section__title">${esc(capabilities.title)}</h2>
    <p class="section__lede">${esc(capabilities.lede)}</p>
  </div>
  <div class="grid grid--3">
    ${list(
      capabilities.items,
      (c, i) => `<article class="card" data-reveal data-reveal-delay="${i * 70}">
  <div class="card__icon">${icon(c.icon)}</div>
  <h3>${esc(c.title)}</h3>
  <p>${esc(c.body)}</p>
  <div class="card__chips">${list(c.chips, (t) => `<span class="chip">${esc(t)}</span>`)}</div>
</article>`,
    )}
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

  // Server-rendered first four photos: the carousel is an enhancement.
  const firstFour = about.photos.slice(0, 4);

  return `<section id="about">
<div class="marquee" aria-hidden="true"><div class="marquee__track">${marquee}</div></div>
<div class="section section--cream" style="border-top:0">
  <div class="shell">
    <div class="about">
      <div data-reveal>
        <h2>${esc(about.title)}</h2>
        <p class="about__serif">${esc(about.paragraphs[0])}</p>
        <p class="about__body">${esc(about.paragraphs[1])}</p>
        <p class="about__body">${esc(about.paragraphs[2])}</p>
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

function researchSection() {
  const card = (c, i) => {
    const inner = `<p class="rcard__kind">${esc(c.kind)}</p>
  <h3>${esc(c.title)}</h3>
  <p>${esc(c.body)}</p>
  <p class="rcard__meta">${esc(c.meta)}</p>`;
    return c.href
      ? `<a class="rcard rcard--link" href="${c.href}" target="_blank" rel="noopener noreferrer" data-reveal data-reveal-delay="${i * 80}">${inner}<span class="rcard__go">${icon("arrowRight")}</span></a>`
      : `<article class="rcard" data-reveal data-reveal-delay="${i * 80}">${inner}</article>`;
  };

  const row = (cls, left, title, where, href) => {
    const body = `<span class="${cls}__meta">${esc(left)}</span>
  <span><span class="${cls}__title">${esc(title)}</span><span class="${cls}__where">${esc(where)}</span></span>`;
    return href
      ? `<a class="${cls} ${cls}--link" href="${href}" target="_blank" rel="noopener noreferrer">${body}${icon("arrowRight", "row__go")}</a>`
      : `<div class="${cls}">${body}</div>`;
  };

  return `<section class="section section--ink" id="research">
<div class="shell">
  <div class="section__head" data-reveal>
    <p class="eyebrow">${esc(research.eyebrow)}</p>
    <h2 class="section__title">${esc(research.title)}</h2>
    <p class="section__lede">${esc(research.lede)}</p>
  </div>
  <div class="research">${list(research.cards, card)}</div>

  <div class="stream" data-reveal>
    <div class="stream__head">
      <h3>${esc(research.writingTitle)} <span>${research.writing.length}</span></h3>
      <p>${esc(research.writingNote)}</p>
    </div>
    <div class="stream__rows">
      ${list(research.writing, (w) => row("row", w.date, w.title, w.where, w.href))}
    </div>
  </div>

  <div class="stream" data-reveal>
    <div class="stream__head">
      <h3>${esc(research.talksTitle)} <span>${research.talks.length}</span></h3>
    </div>
    <div class="stream__rows">
      ${list(research.talks, (t) => row("row", t.venue, t.title, t.where, t.href))}
    </div>
  </div>
</div>
</section>`;
}

function projectCard(p, i) {
  const label = sectors.find((s) => s.slug === p.sector)?.label ?? p.sector;
  const links = (p.links || [])
    .map(
      (l) =>
        `<a class="project__link" href="${l.href}" target="_blank" rel="noopener noreferrer">${esc(l.label)} ${icon("arrowRight")}</a>`,
    )
    .join("");

  return `<article class="project" data-sector="${esc(p.sector)}" data-reveal data-reveal-delay="${(i % 2) * 80}">
  <span class="project__index" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
  <div class="project__top">
    <span class="project__sector">${esc(label)}</span>
    ${p.years ? `<span class="project__years">${esc(p.years)}</span>` : ""}
  </div>
  <h3>${esc(p.title)}</h3>
  <p class="project__org"><b>${esc(p.role)}</b> · ${esc(p.org)}</p>
  <p class="project__one">${esc(p.one)}</p>
  ${p.metric ? `<p class="project__metric">${esc(p.metric)}</p>` : ""}
  ${links ? `<div class="project__links">${links}</div>` : ""}
  <div class="project__stack">${list(p.stack, (s) => `<span class="chip">${esc(s)}</span>`)}</div>
</article>`;
}

function portfolioSection() {
  const counts = {};
  projects.forEach((p) => (counts[p.sector] = (counts[p.sector] || 0) + 1));
  const used = sectors.filter((s) => counts[s.slug]);

  const filters = [
    `<button type="button" class="filter" data-sector="all" aria-pressed="true">All work<span class="filter__count">${projects.length}</span></button>`,
    ...used.map(
      (s) =>
        `<button type="button" class="filter" data-sector="${s.slug}" aria-pressed="false">${esc(s.label)}<span class="filter__count">${counts[s.slug]}</span></button>`,
    ),
  ].join("");

  return `<section class="section section--cream" id="portfolio" data-portfolio>
<div class="shell">
  <div class="section__head" data-reveal>
    <p class="eyebrow">Portfolio</p>
    <h2 class="section__title">Selected work</h2>
    <p class="section__lede">Filter by industry, or open a sector from the Sectors menu for the full picture. Role is stated on every entry — I would rather tell you exactly what I owned than let a logo imply it.</p>
  </div>
  <div class="filters" role="group" aria-label="Filter portfolio by sector" data-reveal>${filters}</div>
  <div class="projects">
    ${list(projects, projectCard)}
    <p class="projects__empty" hidden>Nothing published in this sector yet — but the engineering is the same. <a href="${site.calendly}" target="_blank" rel="noopener noreferrer">Let’s talk about your case.</a></p>
  </div>
  <div class="portfolio__foot" data-reveal>
    <p>Some engagements are under NDA and can’t be described here. Happy to walk through the architecture of any of them on a call.</p>
    <a class="btn btn--ghost" href="/cv/">Full CV ${icon("arrowRight")}</a>
  </div>
</div>
</section>`;
}

function nowSection() {
  return `<section class="now" id="now">
<div class="shell">
  <div class="now__inner" data-reveal>
    <div class="now__head">
      <p class="eyebrow">Now</p>
      <p class="now__updated">Updated ${esc(now.updated)}</p>
    </div>
    <ul class="now__list">
      ${list(now.items, (i) => `<li>${esc(i)}</li>`)}
    </ul>
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
  <a class="btn btn--blue" href="${site.calendly}" target="_blank" rel="noopener noreferrer">${esc(contact.cta)} ${icon("arrowRight")}</a>
  <div class="contact__links">
    <a href="mailto:${site.email}">${esc(site.email)}</a>
    <span aria-hidden="true">·</span>
    <a href="${site.linkedin}" target="_blank" rel="noopener noreferrer">linkedin.com/in/rakivnenkov</a>
    <span aria-hidden="true">·</span>
    <a href="${site.github}" target="_blank" rel="noopener noreferrer">github.com/vasylrakivnenko</a>
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
    knowsAbout: [
      "Artificial Intelligence",
      "AI Engineering",
      "Retrieval-Augmented Generation",
      "AI Agents",
      "Machine Learning Evaluation",
    ],
  };

  return (
    head({
      title: `${site.name} — AI Engineer | Enterprise AI Systems, Agents & Automation`,
      description: site.description,
      path: "/",
    }) +
    `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` +
    navbar() +
    `<main id="main">` +
    heroSection() +
    stackDiagram() +
    capabilitiesSection() +
    aboutSection() +
    researchSection() +
    nowSection() +
    portfolioSection() +
    contactSection() +
    `</main>` +
    footer()
  );
}

function sectorPage(s) {
  const mine = projects.filter((p) => p.sector === s.slug);
  const others = sectors.filter((o) => o.slug !== s.slug);

  const work = mine.length
    ? `<div class="projects">${list(mine, projectCard)}</div>`
    : `<div class="card" style="max-width:44rem">
  <h3>No published project in this sector yet</h3>
  <p>Which is worth saying plainly rather than padding the page. The engineering below is the same stack I build everywhere else — and the opportunities are the ones I'd start from if we worked together. <a href="/#portfolio" style="color:var(--blue);font-weight:500">See work in other sectors →</a></p>
</div>`;

  return (
    head({
      title: `AI Engineering for ${s.name} — ${site.name}`,
      description: s.tagline,
      path: `/sectors/${s.slug}/`,
    }) +
    navbar() +
    `<main id="main">

<section class="subhero">
  <div class="subhero__inner">
    <a class="backlink" href="/">${icon("arrowLeft")}Back to home</a>
    <p class="eyebrow">Portfolio · ${esc(s.name)}</p>
    <h1>${esc(s.tagline)}</h1>
    <p class="subhero__lede">${esc(s.intro)}</p>
    <div class="subhero__stat">
      <b>${esc(s.stat.value)}</b><span>${esc(s.stat.label)}</span>
    </div>
    <div class="subhero__actions">
      <a class="btn btn--rust" href="${site.calendly}" target="_blank" rel="noopener noreferrer">Let’s talk ${icon("arrowRight")}</a>
      <a class="btn btn--ghost-light" href="/#portfolio">All work ${icon("arrowRight")}</a>
    </div>
  </div>
</section>

<section class="section section--cream">
  <div class="shell">
    <div class="section__head" data-reveal>
      <p class="eyebrow">Work in this sector</p>
      <h2 class="section__title">${
        mine.length
          ? `What I’ve built in ${esc(s.name.toLowerCase())}`
          : `Work in ${esc(s.name.toLowerCase())}`
      }</h2>
    </div>
    ${work}
  </div>
</section>

<section class="section section--ink">
  <div class="shell">
    <div class="section__head" data-reveal>
      <p class="eyebrow">Highest-value opportunities</p>
      <h2 class="section__title">Where AI creates the most value</h2>
    </div>
    <div class="grid grid--2">
      ${list(
        s.opportunities,
        (o, i) => `<article class="opp" data-reveal data-reveal-delay="${i * 70}">
  <span class="opp__index" aria-hidden="true">0${i + 1}</span>
  <h3>${esc(o.title)}</h3>
  <p>${esc(o.body)}</p>
</article>`,
      )}
    </div>
  </div>
</section>

<section class="section section--cool">
  <div class="shell">
    <div class="section__head" data-reveal>
      <p class="eyebrow">Common pain points</p>
      <h2 class="section__title">Challenges in ${esc(s.name)}</h2>
    </div>
    <div class="grid grid--3">
      ${list(
        s.challenges,
        (c, i) =>
          `<div class="challenge" data-reveal data-reveal-delay="${i * 60}"><p>${esc(c)}</p></div>`,
      )}
    </div>
  </div>
</section>

<section class="section section--cream">
  <div class="shell">
    <p class="eyebrow">Explore other sectors</p>
    <div class="sectorpills">
      ${list(others, (o) => `<a href="/sectors/${o.slug}/">${esc(o.label)} ${icon("arrowRight")}</a>`)}
    </div>
  </div>
</section>

<section class="closer">
  <div class="closer__inner" data-reveal>
    <p class="eyebrow">Let’s talk</p>
    <h2>Ready to see what AI can actually do<br class="hide-sm"> for your ${esc(s.name.toLowerCase())} operation?</h2>
    <p>30 minutes on your systems and your bottlenecks. No deck, no pitch, no obligation.</p>
    <a class="btn btn--rust" href="${site.calendly}" target="_blank" rel="noopener noreferrer">Book a call ${icon("arrowRight")}</a>
  </div>
</section>

</main>` +
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
    <p class="subhero__lede">The link is broken or the page has moved. Everything lives on the home page — or jump straight to the work.</p>
    <div class="subhero__actions">
      <a class="btn btn--rust" href="/">Home ${icon("arrowRight")}</a>
      <a class="btn btn--ghost-light" href="/#portfolio">Portfolio ${icon("arrowRight")}</a>
    </div>
  </div>
</section>
</main>` +
    footer()
  );
}

function sitemap() {
  const urls = [
    "/",
    "/cv/",
    ...sectors.map((s) => `/sectors/${s.slug}/`),
  ];
  const today = new Date().toISOString().slice(0, 10);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${site.origin}${u}</loc><lastmod>${today}</lastmod></url>`,
  )
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

console.log("Building site…");

// Clear out stale sector directories so a renamed slug can't linger.
await rm(join(ROOT, "sectors"), { recursive: true, force: true });

await emit("index.html", homePage());
await emit("cv/index.html", cvPage());
for (const s of sectors) await emit(`sectors/${s.slug}/index.html`, sectorPage(s));
await emit("404.html", notFoundPage());
await emit("sitemap.xml", sitemap());
await emit(
  "robots.txt",
  `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`,
);

console.log("Done.");
