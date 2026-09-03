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

- **Portfolio is a 2-up grid of equal-height cards.** The card clamps the
  description to three lines; "Read more" opens the full text in a dialog.
  Resist adding architecture or implementation detail even there — that
  conversation belongs on a call, where you control how much you give.
- **Each sector has an accent colour** in `sectors` in `data/projects.mjs`
  (`color` for the chip and hairline, `tint` for backgrounds). Adding a sector
  means adding an entry there.
- **Nothing goes live without a defensible outcome.** A project with
  `draft: true` stays in `data/projects.mjs`, fully written, but is not
  rendered. `node build.mjs` lists what's held back. When you have the number:
  replace `outcome`, delete the `draft` line. One edit, per project, when the
  evidence exists.
- **The build fails if the word `TODO` reaches a generated page.** That guard
  is the point — it means the site cannot drift back into placeholders.
- **Never estimate a figure.** It's the first thing a hiring manager or a
  procurement team checks.
- **Research and blog are one dated stream**, sorted newest-first at build
  time from `research.items` (papers, patents) and `research.blog`.
- **The hero treatment is deliberate** — the speaker photo, gradient stack and
  22-second ken-burns drift. See the note above `.hero` in `assets/site.css`.
- **`opengraph.jpg`** (1200x630) is a rendered card, not a screenshot.
  Regenerate it if the headline changes.
