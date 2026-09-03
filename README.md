# vasylrakivnenko.github.io

Personal site — Vasyl Rakivnenko, AI Engineer.

Static HTML, hand-written CSS, ~11 KB of vanilla JS. No framework, no
dependencies, no `node_modules`. Deploys straight from `main` to GitHub Pages.

## Editing

**All content lives in `data/`. You should almost never edit HTML directly.**

| File | What's in it |
| --- | --- |
| `data/site.mjs` | Nav, hero, the stack diagram, capabilities, About, research, writing, talks, Now, portfolio, sector pages |
| `data/cv.mjs` | Everything on `/cv/` |

Change the data, then regenerate:

```sh
node build.mjs
```

That writes `index.html`, `cv/index.html`, `sectors/<slug>/index.html`,
`404.html`, `sitemap.xml` and `robots.txt`. Commit the generated files — GitHub
Pages serves them as-is.

To preview locally:

```sh
python3 -m http.server 8899   # then open http://localhost:8899
```

## Layout

```
build.mjs           generator — templates + inline SVG icons
data/               all content
assets/site.css     design system (tokens at the top of the file)
assets/cv.css       /cv/ layout + the @media print rules
assets/site.js      progressive enhancement only; the site works without it
```

## Things worth knowing

- **`TODO:` markers render on the page.** Anything still unfilled in
  `data/cv.mjs` shows as a yellow dashed chip on `/cv/`. Fill in the copy and
  the marker disappears on the next build. Don't ship with them visible.
- **The CV needs no PDF.** `/cv/` prints to a clean A4 through the print
  stylesheet — the "Save as PDF" button just calls `window.print()`. The web
  page can never drift out of sync with the file people download.
- **Adding portfolio work:** append to `projects` in `data/site.mjs`. The
  `sector` field must match a `slug` in `sectors`. Sector filter chips, per-
  sector page listings and the counts all derive from that automatically; a
  sector with no projects renders an honest "nothing published here yet" card
  instead of filler.
- **Keep `now.updated` current.** A stale `Now` block is worse than none.
- **The hero background treatment is deliberate** — the speaker photo, the
  gradient stack and the 22-second ken-burns drift are carried over from the
  previous design on purpose. See the note above `.hero` in `site.css`.
- **The Open Graph card** (`opengraph.jpg`, 1200×630) is a rendered image, not
  a screenshot. Regenerate it if the headline changes.
