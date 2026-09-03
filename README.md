# vasylrakivnenko.github.io

Personal site — Vasyl Rakivnenko, AI Engineer.

Two pages. Static HTML, hand-written CSS, a little vanilla JS. No framework,
no dependencies, no build toolchain beyond Node. Deploys from `main` to
GitHub Pages.

```
/        hero · About me · Portfolio · Research & Blog · contact
/cv/     printable CV (Cmd-P gives a clean A4)
```

## Editing

All content is in `data/`. Don't edit the HTML — it's generated.

| File | What's in it |
| --- | --- |
| `data/site.mjs` | Nav, hero, About me, Research & Blog, contact |
| `data/projects.mjs` | The portfolio list |
| `data/cv.mjs` | Everything on `/cv/` |

Then:

```sh
node build.mjs                 # regenerate index.html, cv/, 404, sitemap
python3 -m http.server 8899    # preview at localhost:8899
```

Commit the generated files; Pages serves them as-is.

## Notes

- **Portfolio entries are two lines and an outcome.** One line of what it is,
  one of what it changed. Resist adding architecture or implementation detail
  — that conversation belongs on a call, where you control how much you give.
- **An entry whose `outcome` starts with `TODO` renders without an outcome
  line**, and `node build.mjs` prints a list of which ones. Filling those in is
  the highest-value edit available on this site. Never estimate a figure: it's
  the first thing a hiring manager or procurement team checks.
- **Research and blog are one dated stream**, sorted newest-first at build
  time from `research.items` (papers, patents) and `research.blog`.
- **The hero treatment is deliberate** — the speaker photo, gradient stack and
  22-second ken-burns drift. See the note above `.hero` in `assets/site.css`.
- **`opengraph.jpg`** (1200x630) is a rendered card, not a screenshot.
  Regenerate it if the headline changes.
