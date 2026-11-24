# AI/ML Engineer Portfolio — Project Instructions

Owner: Debadri Chatterjee
Repo: `ai_ml_portfolio` locally, published as `Hasta-8/Hasta-8.github.io` (app at the repo root; branch `main`)
Source of truth: `AI_ML_Portfolio_Cloudflare_Workplan.pdf` — 7 pages, 44,330 bytes, md5 `253d566663f1bc26d9cc501dd7c71f43`. This file must never be modified.
Deploy target: **GitHub Pages user site, https://hasta-8.github.io/** (owner's decision 2026-11-24, instead of the workplan's Cloudflare Pages). `.github/workflows/deploy.yml` builds on every push to `main` and copies `index.html` to `404.html` as the SPA fallback (`public/_redirects` is Cloudflare's equivalent, kept harmless).

## Stack

| Layer | Choice |
| --- | --- |
| UI | React 19.3.1, react-router-dom 7.18.4, lucide-react 1.61.0 |
| Build | Vite 8.3.5, TypeScript 6.0.3 (`tsc -b`), @vitejs/plugin-react 6 |
| Styling | Tailwind CSS 4.3.3 (CSS-first `@theme` in `src/index.css`), @tailwindcss/vite |
| Lint | oxlint 1.89.0 |

Structure: `src/components/{home,projects,layout,ui}`, `src/data/{projects.ts,profile.ts,experience.ts,skills.ts,case-studies/}`, `src/pages/`, `src/types/index.ts`, `public/` (favicon, `resume.pdf`, `_redirects`, `images/`).

## Commands

```bash
npm run dev        # Vite dev server, port 5173
npm run typecheck  # tsc -b --noEmit
npm run lint       # oxlint
npm run build      # tsc -b && vite build -> dist/
npm run preview    # serve dist/ (use port 4173 for verification)
```

Verification order for any milestone: `typecheck` → `lint` → `build` → preview on 4173 → headless route/layout audit → write the report.

## Milestone report rule (mandatory)

A milestone is **not** complete until its report exists in `docs/build-reports.md` (moved from `README.md` on 2026-11-24; `README.md` is now the public repository page). Required sequence:

1. Implement.
2. Validate with the commands above and record the actual output.
3. Append a new `# Milestone N Report — <Title>` section to the **end** of `docs/build-reports.md`.
4. Update the work-log row below and the README index row; refresh `Last updated`.
5. State in the final chat message that `docs/build-reports.md` was updated, and give the line range to copy.

Rules for the report:

- **Every number must come from a command run in the same session.** Never copy figures from an earlier milestone, from memory, or from a previous report; re-measure them. (Stale build sizes and a miscounted element once shipped because this was skipped.)
- The report must be **self-contained and paste-ready for ChatGPT**: project, owner, milestone title, workplan phase, scope, files changed, decisions, a validation table with the command for each result, what was **not** done, and the inputs still needed from the owner.
- Never assert a result that was not verified in that session.
- Non-milestone work (bug fix, refactor, polish) gets a `### Addendum — <YYYY-MM-DD> — <Title>` subsection appended inside the current milestone's report. Do not create a new numbered milestone for it.
- Reports append in order (M1 → M2 → M3 → M4). Do not renumber or reorder existing reports.

## Report template

```markdown
# Milestone N Report — <Title>

Scope: <one sentence>. Workplan phase: <phase>.

## 1. What was built
## 2. Files changed  (Modified · Created · Unchanged)
## 3. Content-integrity decisions
## 4. Validation evidence  (table: check · command · result)
## 5. Where to make changes  (goal → file)
## 6. Content and assets still needed  (owner inputs)
```

## Work log

| Item | Workplan phase | Status | Report |
| --- | --- | --- | --- |
| Milestone 1 — Foundation | Phase 1 — Foundation | Complete | [README.md#m1](README.md#m1) |
| Milestone 2 — Homepage | Phase 2 — Brand pages | Complete | [README.md#m2](README.md#m2) |
| Milestone 3 — Case-study pages | Phase 3 — Case studies | Complete | [README.md#m3](README.md#m3) |
| Addendum — hero social link legibility (`src/index.css`) | — | Complete | `#m3` addenda |
| Addendum — homepage section width and card borders (`Section.tsx`, `Container.tsx`) | — | Complete | `#m3` addenda |
| Addendum — About page refinement (`src/pages/About.tsx`) | Phase 2 — Brand pages | Complete | `#m3` addenda |
| Addendum — Contact page, resume access, and email-link behavior (`Contact.tsx`, `Navbar.tsx`, `About.tsx`, `ContactCta.tsx`, `Footer.tsx`, `src/data/profile.ts`) | Phase 2 — Brand pages | Complete | `#m3` addenda |
| Addendum — Experience and Education (`Experience.tsx`, `About.tsx`, `experience.ts`, `education.ts`) | Phase 2 — Brand pages | Complete | `#m3` addenda |
| Addendum — Skills taxonomy, homepage preview, and contrast pass (`skills.ts`, `Skills.tsx`, `Expertise.tsx`, `ExperiencePreview.tsx`, `SkillChip.tsx`, `Chip.tsx`, `types/index.ts`, `Hero.tsx`, `ProjectCard.tsx`, `Projects.tsx`, `Contact.tsx`) | Phase 2 — Brand pages | Complete | `#m3` addenda |
| Milestone 4 — Personal projects, QA and deploy (phases 3–5) | Phases 3–5 | Complete | [docs/build-reports.md#m4](docs/build-reports.md#m4) |
| Milestone 6 — Iterate | Phase 6 — Iterate | Ongoing | — |

Known open owner inputs: approved case-study images (7 placeholder slots), CervicalAI robotics/ShelfScan metrics, stack confirmations, repository/demo links, review-state flips (`draft` → `reviewed`), contact/resume publication confirmation, Experience/Education copy confirmation (Aimil, MiMD tool naming, education fields), and final Skills wording/tool-membership confirmation. The homepage preview length is resolved at three bullets. Full list in the Milestone 3 report, sections 6–7 (including the contact/resume, Experience/Education, and Skills addenda).

## Non-negotiables

- Do not modify `AI_ML_Portfolio_Cloudflare_Workplan.pdf`; check its md5 at the end of a session.
- Commit, push and deploy only when the owner asks (the owner asked on 2026-11-24 to publish the site). No Claude/AI attribution lines in commits.
- Do not add a dependency without explicit approval.
- Content integrity: for **professional** work the only published figure is 87.33% mAP@50 (RF-DETR, `cs-cervical-7a`), always shown with "internal verification was ongoing… not a clinical validation"; the professional entries stay exactly as the owner approved them. **Personal** project figures must match the numbers in each project's public README. Never invent frameworks, hardware, metrics, or links.
- No proprietary code, slides, private data, or hardware identifiers beyond the owner-approved Experience names. State professional vs personal work explicitly.
- Preserve the design system (`--color-*` tokens, `Container`, `Section`, `surface-card`, `.eyebrow`, `.hero-surface`) and existing routing.

## Known gotchas

- **Preview server:** start detached — `(setsid npx vite preview --port 4173 --host 127.0.0.1 > /tmp/opencode/preview.log 2>&1 &)` — and stop with `ps aux | grep "[v]ite" | awk '{print $2}' | xargs -r kill`. Never chain `pkill` into a command that must keep running; it can kill the tool shell.
- **Headless browser:** Chrome at `/usr/bin/google-chrome`; `puppeteer-core` is installed in `/tmp/opencode` (outside this repo). `(hover: hover)` is false in headless by default; launch with `--blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4` when testing hover styles.
- **Transitions:** `transition-colors` is 150 ms. Wait ~400 ms after hover/focus before reading computed colour, or you will measure an intermediate value.
- **Tailwind sources are pinned** in `src/index.css` (`@import 'tailwindcss' source(none)` + explicit `@source` for `index.html` and `src/**/*.{ts,tsx}`), so editing markdown cannot change the CSS bundle. Confirm the CSS hash is unchanged after documentation-only edits.
- **Layout audit:** check 1920 / 1440 / 1280 / 1024 / 768 / 390 px; assert `documentElement.scrollWidth === clientWidth`; assert card edges are inside the viewport (`left > 0`, `right < viewportWidth`).
- **CSS masks fade descendants.** A `mask-image` on a section also masks its content; apply decorative masks to a `::before` layer instead.
- **Model limitation:** images/PDFs cannot be viewed directly. Use `pdftotext` for the workplan and pixel measurements (decode the PNG screenshot) for visual claims; say so rather than claiming to have looked.

## Where to change what

| Goal | File |
| --- | --- |
| Case-study text | `src/data/case-studies/<project>.ts` |
| Metrics and their status | `src/data/projects.ts` |
| Project links / review state | `src/data/projects.ts` |
| Homepage section width | `src/components/ui/Section.tsx` (`Container size="xl"`) |
| Container widths | `src/components/ui/Container.tsx` (`sm` / `md` / `lg` / `xl`) |
| Design tokens, hero background | `src/index.css` (`@theme`, `.hero-surface`) |
| Hero content | `src/components/home/Hero.tsx` |
| Case-study page structure | `src/pages/ProjectDetail.tsx` |
| Route/layout shell | `src/App.tsx` |
