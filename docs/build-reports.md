# AI/ML Engineer Portfolio — Build Reports

Project: `ai_ml_portfolio` · Owner: Debadri Chatterjee
Source of truth: `AI_ML_Portfolio_Cloudflare_Workplan.pdf` (7 pages, 44,330 bytes, md5 `253d566663f1bc26d9cc501dd7c71f43`)
Last updated: 2026-11-24

## Milestone reports

| # | Report | Workplan phase | Status |
| --- | --- | --- | --- |
| 1 | [AI/ML Engineer Portfolio Foundation](#m1) | Phase 1 — Foundation | Complete |
| 2 | [Homepage](#m2) | Phase 2 — Brand pages | Complete |
| 3 | [Project case-study pages](#m3) | Phase 3 — Case studies | Complete |
| 4 | [Personal projects, QA and deploy](#m4) | Phases 3–5 | Complete |

Report 3 also carries six addenda: hero social link legibility, homepage section width / card borders, About page refinement, the Contact page / resume access / email-link fix, Experience & Education, and the Skills taxonomy / homepage preview / contrast pass.

**How this file works:** reports append in chronological order, so the newest is at the bottom. Each `# Milestone N Report` section is self-contained — copy the whole section into ChatGPT for a status review. This index and the work log in `AGENTS.md` are updated in the same session as the report.

---

<a id="m1"></a>

# Milestone 1 Report — AI/ML Engineer Portfolio Foundation

Project: `ai_ml_portfolio`
Owner: Debadri Chatterjee
Scope: Foundation only (Phase 1 of `AI_ML_Portfolio_Cloudflare_Workplan.pdf`). No homepage or project case-study design work was performed.

---

Milestone 1 (foundation) is complete. The PDF was extracted with `pdftotext` (my model can't read PDFs directly) and is untouched: 7 pages, 44,330 bytes, mtime unchanged, md5 `253d566663f1bc26d9cc501dd7c71f43`.

## 1. Files and folders created

Root files: `package.json`, `package-lock.json`, `index.html`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `.gitignore`, `.oxlintrc.json`, `README.md`

```
public/ favicon.svg (DC monogram), _redirects (CF Pages SPA fallback), images/.gitkeep
src/components/layout/   Navbar.tsx, Footer.tsx, ScrollToTop.tsx
src/components/ui/       Container.tsx, PageHeader.tsx
src/pages/         Home, Projects, ProjectDetail, About, Experience, Skills, Contact, NotFound (light placeholders only)
src/data/          projects.ts, experience.ts, skills.ts (typed, workplan facts only, `status: 'draft'`)
src/types/         index.ts (Project, ExperienceEntry, SkillGroup, ProjectMetric, ExternalLink)
src/               App.tsx (router + shell), main.tsx, index.css (Tailwind v4 @theme tokens), assets/.gitkeep
```

No nested project directory; app lives directly in `ai_ml_portfolio`. Git repo initialized on branch `main` (renamed from `master`, per workplan).

## 2. Dependencies installed (49 packages, 0 vulnerabilities)

| Package | Version |
| --- | --- |
| react / react-dom | 19.3.1 |
| react-router-dom | 7.18.4 |
| lucide-react | 1.61.0 |
| vite | 8.3.5 |
| @vitejs/plugin-react | 6.1.2 |
| typescript | 6.0.3 |
| tailwindcss + @tailwindcss/vite | 4.3.3 |
| oxlint | 1.89.0 |
| @types/react / react-dom / node | 19.3.0 / 19.3.0 / 24.19.2 |

Tailwind is v4 CSS-first (no `tailwind.config.js`); tokens live in `@theme` in `src/index.css`.

## 3. Start the dev server

```bash
cd "/media/debadri/sda5/Git Repos/ai_ml_portfolio"
npm run dev      # http://localhost:5173
```

## 4. Production build result

`npm run build` → **passed**: `tsc -b` clean, 1956 modules, `dist/index.html` 1.40 kB, CSS 15.62 kB (3.88 kB gzip), JS 270.91 kB (86.10 kB gzip), built in 259 ms. `npm run lint` clean (0 warnings after fixing a purity + setState-in-effect warning), `npm run typecheck` clean. Dev server and `vite preview` both verified serving `/`, `/projects`, `/projects/cervicalai`, and the 404 route.

## 5. Manual steps for you

1. Add `public/resume.pdf` (downloadable resume) — placeholder directory only, no fake file created.
2. Fill real content in `src/data/*.ts` (skills/experience bullets are intentionally empty; projects carry only workplan-stated facts, nothing invented).
3. Commit when satisfied — I did not create any commit:
   ```bash
   git add -A && git commit -m "chore: initialize React + Vite + TypeScript portfolio foundation"
   ```
4. For Cloudflare Pages later: set `NODE_VERSION=22.x` in the project env vars, build `npm run build`, output `dist`, production branch `main`.
5. Optional: replace the Google Fonts `<link>` with self-hosted fonts if you want zero third-party requests.

---

## Appendix A — Supporting verification evidence

Commands run in `/media/debadri/sda5/Git Repos/ai_ml_portfolio` and their results:

| Check | Command | Result |
| --- | --- | --- |
| Workplan text extraction | `pdftotext -layout AI_ML_Portfolio_Cloudflare_Workplan.pdf /tmp/opencode/workplan.txt` | 358 lines extracted; 7-page A4 PDF |
| PDF integrity | `ls -l`, `md5sum`, `pdfinfo` | 44,330 bytes, mtime `Oct 22 16:03` (unchanged), 7 pages |
| Dependency install | `npm install` | 49 packages added, 0 vulnerabilities |
| Dependency tree | `npm ls --depth=0` | All 13 direct deps resolved to the versions listed above |
| Type check | `npm run typecheck` (`tsc -b --noEmit`) | No errors |
| Lint | `npm run lint` (`oxlint`) | No errors, no warnings |
| Production build | `npm run build` (`tsc -b && vite build`) | Built in 259 ms, no errors |
| Tailwind token compilation | grep of built CSS | `--color-canvas`, `--color-ink`, `--color-ink-muted`, `--color-accent*` present; `.bg-canvas`, `.border-line`, `.text-ink-muted`, `.surface-card`, `.eyebrow`, `.skip-link` utilities generated |
| Dev server | `npm run dev -- --port 5173` | VITE v8.3.5 ready in 329 ms; `/` → 200, `/projects` → 200, `/src/main.tsx` → 200 |
| Production preview | `npm run preview -- --port 4173` | `/` → 200, `/projects` → 200, `/projects/cervicalai` → 200, `/nope` → 200 (SPA fallback) |
| Build output | `find dist -type f` | `dist/index.html`, `dist/favicon.svg`, `dist/_redirects`, `dist/images/.gitkeep`, `dist/assets/index-*.css`, `dist/assets/index-*.js` |

### Appendix B — Files verified to exist after the milestone

```
./AI_ML_Portfolio_Cloudflare_Workplan.pdf
./.gitignore
./.oxlintrc.json
./index.html
./package-lock.json
./package.json
./public/favicon.svg
./public/images/.gitkeep
./public/_redirects
./README.md
./src/App.tsx
./src/assets/.gitkeep
./src/components/layout/Footer.tsx
./src/components/layout/Navbar.tsx
./src/components/layout/ScrollToTop.tsx
./src/components/ui/Container.tsx
./src/components/ui/PageHeader.tsx
./src/data/experience.ts
./src/data/projects.ts
./src/data/skills.ts
./src/index.css
./src/main.tsx
./src/pages/About.tsx
./src/pages/Contact.tsx
./src/pages/Experience.tsx
./src/pages/Home.tsx
./src/pages/NotFound.tsx
./src/pages/ProjectDetail.tsx
./src/pages/Projects.tsx
./src/pages/Skills.tsx
./src/types/index.ts
./tsconfig.app.json
./tsconfig.json
./tsconfig.node.json
./vite.config.ts
```

### Appendix C — Key implementation decisions (for review)

1. **Scaffolding method.** The project was scaffolded in a temporary directory (`/tmp/opencode/scaffold`) with `create-vite@9.3.1` (`--template react-ts`) and the template files were copied into the project root. This avoided any risk of `create-vite` overwriting or deleting the workplan PDF in a non-empty target directory. The PDF was never opened for writing, moved, renamed, or overwritten.
2. **Version pinning.** Versions come from the current official `create-vite` React+TS template plus latest stable releases: React 19.3.1, Vite 8.3.5, `@vitejs/plugin-react` 6.1.2 (peer `vite: ^8.0.0`), TypeScript 6.0.3 (`~6.0.3`), Tailwind 4.3.3. `@tailwindcss/vite@4.3.3` declares peer `vite: ^5.2.0 || ^6 || ^7 || ^8`, and `react-router-dom@7.18.4` declares `react: >=18`, so the dependency graph is internally consistent.
3. **Tailwind v4 CSS-first setup.** No `tailwind.config.js` or PostCSS config is used. `@tailwindcss/vite` is registered in `vite.config.ts` alongside `@vitejs/plugin-react`, and `src/index.css` starts with `@import 'tailwindcss';` followed by an `@theme` block that defines the design tokens (fonts, neutral surface palette, text colors, one restrained accent, motion easing). Components are defined in `@layer components` (`.skip-link`, `.eyebrow`, `.surface-card`).
4. **Accessibility groundwork.** Skip-to-content link targeting `#main-content`; `<main>`, `<header>`, `<footer>`, and `<nav aria-label>` landmarks; the mobile nav toggle uses `aria-expanded`, `aria-controls`, and a dynamic `aria-label`; the mobile panel uses `hidden` rather than CSS-only hiding; `Escape` closes the panel via a keydown listener; global `:focus-visible` outline in the accent color; `prefers-reduced-motion` globally neutralizes animation and transition durations.
5. **Routing.** `BrowserRouter` in `src/main.tsx`; routes declared in `src/App.tsx` for `/`, `/projects`, `/projects/:slug`, `/about`, `/experience`, `/skills`, `/contact`, and a `*` 404 route. `ScrollToTop` resets scroll on pathname change. `public/_redirects` (`/* /index.html 200`) provides the SPA fallback required by Cloudflare Pages for direct navigation and refreshes.
6. **Content discipline.** `src/data/projects.ts` contains only the three projects named in the workplan (CervicalAI, Robotic Microscopy, ShelfScan), each with `status: 'draft'`, empty `metrics` and `links` arrays, and one-line summaries that paraphrase the workplan. No metric values, client names, or results were invented. `src/data/experience.ts` contains a single MiMD Lab entry with empty bullets. `src/data/skills.ts` defines the five skill groups named in the workplan with empty skill lists.
7. **Lint fixes applied.** Two oxlint warnings were resolved before the final build: `new Date().getFullYear()` called during render in `Footer.tsx` (moved to a module-level constant) and `setIsOpen(false)` called synchronously inside an effect in `Navbar.tsx` (replaced with an event-driven `closeMenu` handler bound to the links).
8. **Git state.** A repository was initialized and the branch renamed to `main` to match the Cloudflare Pages production branch in the workplan. No commit was created — all files remain untracked/staged for the owner's review, per the instruction not to commit without explicit approval.

### Appendix D — Outstanding items carried into Milestone 2

- `public/resume.pdf` must be supplied by the owner (a real resume file was not fabricated).
- `public/images/` subdirectories per the workplan (`cervicalai/`, `microscopy/`, `shelfscan/`) and the social preview image `public/og-image.png` are not yet created.
- Homepage design, page content, and case-study sections are intentionally not implemented.
- Git commit, GitHub remote, and Cloudflare Pages project connection remain manual steps.

---

<a id="m2"></a>

# Milestone 2 Report — Homepage

Scope: a polished, editorial-style homepage. Routing, configuration, and the Milestone 1 foundation were preserved; no project scaffolding was recreated, no dependency was added, and no commit was made.

## 1. Files changed

**Modified**
- `vite.config.ts` — added a build-time `define` for `__HAS_RESUME__` (resolved with `node:fs` against `public/resume.pdf`). No new dependency.
- `src/index.css` — added `.hero-surface` (masked grid + single soft accent glow) and `.visual-grid` (faint placeholder grid). Existing tokens untouched.
- `src/types/index.ts` — added `ProfileLink`, `FocusArea`, `SkillItem`, `SkillStatus`; `SkillGroup` now carries `description`, `featured`, and `skills: SkillItem[]`.
- `src/data/projects.ts` — richer summaries, technology tags, and the documented CervicalAI metric (qualified).
- `src/data/experience.ts` — MiMD Lab entry completed: AI/ML Engineer, MiMD Lab (IIT Delhi), February 2026 – Present, two evidence-based bullets.
- `src/data/skills.ts` — five groups with per-item `verified` / `pending` status.
- `src/pages/Home.tsx` — now composes the five homepage sections.
- `src/pages/Projects.tsx`, `src/pages/Skills.tsx`, `src/pages/Experience.tsx` — aligned with the new data shapes and shared components.
- `src/components/ui/Container.tsx` — optional `size` prop (`sm` / `md` / `lg`).
- `src/components/layout/Footer.tsx` — two-column footer with page links and available profile links.

**Created**
- `src/data/profile.ts` — name, role, headline, intro, focus areas, social/contact link placeholders, resume config.
- `src/components/home/Hero.tsx`
- `src/components/home/FeaturedProjects.tsx`
- `src/components/home/Expertise.tsx`
- `src/components/home/ExperiencePreview.tsx`
- `src/components/home/ContactCta.tsx`
- `src/components/projects/ProjectCard.tsx`
- `src/components/projects/ProjectVisual.tsx`
- `src/components/ui/Section.tsx`
- `src/components/ui/Chip.tsx`
- `src/components/ui/SkillChip.tsx`
- `src/vite-env.d.ts` — declares `__HAS_RESUME__`.

## 2. Homepage sections

1. **Hero** — name, headline, intro, `View Projects` (→ `/projects`), `Download Resume` (→ `/resume.pdf`), GitHub/LinkedIn placeholders, and a right-hand profile rail (focus, current role, methods, deployment).
2. **Featured projects** — three cards from `src/data/projects.ts` (CervicalAI, Robotic Microscopy, ShelfScan) with a decorative placeholder visual, category label, "In progress" badge, tags, and a link to each detail page.
3. **Technical expertise** — four groups (ML, Computer Vision, Python & Software Engineering, Deployment) with confirmed vs. pending chips and a per-group confirmed count.
4. **Experience preview** — AI/ML Engineer, MiMD Lab (IIT Delhi), February 2026 – Present, two bullets, link to `/experience`.
5. **Contact / footer** — invitation block with contact placeholders, resume state, link to `/contact`; the footer carries page links and any available profile links.

## 3. Content-integrity decisions

- **No fabricated URLs.** `src/data/profile.ts` holds GitHub, LinkedIn, and Email as `{ href: '', available: false }` placeholders. Unavailable entries render as muted "link pending" text, never as a link.
- **Resume handling.** No fake PDF was created. `vite.config.ts` checks for `public/resume.pdf` at build time. When absent, the hero renders a non-interactive `aria-disabled` "Download Resume" element plus a note; when present, it renders `<a href="/resume.pdf" download>` and the note disappears. Both paths were verified by building the project twice, once with and once without the file, in an isolated copy.
- **Metrics.** The only figure shown is the workplan-documented RF-DETR result (87.33% mAP@50 on cs-cervical-7a), displayed with the note "Internal verification was ongoing at the time of writing." No performance figure, screenshot, repository, demo, or client name was invented. No clinical or production-readiness claim is made anywhere.
- **Skills.** Only items supported by the documented project work or the supplied brief are marked `verified` (deep learning, object detection, image classification, image stitching, coordinate calibration, model evaluation, Python, edge AI deployment, inference benchmarking). Everything else is `pending` and is rendered with a dashed border plus a screen-reader "pending confirmation" suffix.
- **Project imagery.** `ProjectVisual` renders a decorative placeholder (category icon, monogram label, faint grid). It is `aria-hidden` and contains no fabricated screenshot.

## 4. Validation

| Check | Result |
| --- | --- |
| `npm run typecheck` (`tsc -b --noEmit`) | Clean |
| `npm run lint` (`oxlint`) | Clean, 0 warnings |
| `npm run build` (`tsc -b && vite build`) | Passed in 619 ms — `dist/index.html` 1.40 kB, CSS 24.31 kB (5.30 kB gzip), JS 290.65 kB (90.61 kB gzip) |
| Headless Chrome layout audit at 1440 / 1180 / 768 / 390 px | Horizontal overflow 0 px at every width; exactly one `h1`; `main#main-content` and `nav[aria-label="Primary"]` present; no console errors |
| Heading order | h1 (hero) → h2 (sections) → h3 (cards) |
| Mobile menu | `aria-expanded` false → true on click, panel becomes visible with 6 links, `Escape` closes it, first tab stop is the skip link |
| Typography / tokens | `h1` 60 px at 1440 px, 600 weight, body font Inter, background `#ffffff`; accent chips `#eef3ff` on `#1d4ed8`; pending chips dashed |
| Workplan PDF | Unchanged — md5 `253d566663f1bc26d9cc501dd7c71f43`, 44,330 bytes |
| Git | No commit created; all changes remain in the working tree |

## 5. Content that still needs your input

1. **Real URLs** for GitHub, LinkedIn, and email — set `href` and flip `available` to `true` in `src/data/profile.ts`.
2. **`public/resume.pdf`** — dropping the file in is enough to activate the download button.
3. **Approved project imagery** for `public/images/cervicalai/`, `public/images/microscopy/`, `public/images/shelfscan/`, plus a per-project `image` field in `src/data/projects.ts`.
4. **Skill confirmation** — approve, rename, or remove the `pending` entries in `src/data/skills.ts`.
5. **Experience bullets** — confirm the wording of the two MiMD Lab bullets, and add earlier roles if they exist.
6. **CervicalAI metric wording** — confirm the displayed note and whether the 87.33% mAP@50 figure may stay on the public homepage.
7. **Social preview image** — `public/og-image.png` is still missing, and `index.html` currently omits `og:image`.
8. **Contact details** — a `mailto:` address for the contact page.

---

<a id="m3"></a>

# Milestone 3 Report — Project case-study pages

Scope: reusable, data-driven case-study pages for CervicalAI, Robotic Microscopy, and ShelfScan. The homepage, routing, framework, and design system were preserved; no dependency was added, nothing was deployed, and no commit was made.

Status: complete and verified. This report was refreshed after the final build so every figure below matches the code as it now stands.

---

## 1. What was built

A single reusable template (`src/pages/ProjectDetail.tsx`) that renders any project from typed data. Adding a fourth case study means adding one data file and one array entry — no layout code changes.

Each page is composed of eight numbered sections plus a related-projects block:

| # | Section | What it contains |
| --- | --- | --- |
| — | Header | Breadcrumb (`Projects / <title>`), engagement eyebrow, h1, lede, technology tags, visual placeholder, and a four-cell meta strip: engagement, case-study review state, public code/demo, visual evidence |
| 01 | Overview | Confidentiality-framed context, problem statement, objectives, and numbered personal contributions |
| 02 | Approach | Numbered technical approach steps, then a six-stage architecture grid with a verification status per stage |
| 03 | Stack | Models, algorithms, and tools, each carrying an explicit status (`Verified` / `Pending` / `Not disclosed`) |
| 04 | Data and evaluation | Dataset card with status and description, plus the evaluation methodology |
| 05 | Results | Metric table with the qualification attached to every value, never separated from it |
| 06 | Engineering decisions | Challenge → decision pairs, showing the judgement rather than the task |
| 07 | Limitations | What the case study explicitly does not claim, plus a disclosure block |
| 08 | Evidence | Visual evidence grid (approved images render; missing ones show a labelled placeholder with the exact file path) and the code/demo/data link section |
| — | Related | The other two case studies plus a "Back to all projects" link |

Reused from the existing design system rather than reinvented: `Container`, `Section` (the same editorial section header used on the homepage), `Chip`, `StatusBadge` (new), `ProjectVisual`, and `ProjectCard`.

## 2. Files changed

**Modified (6)**

- `src/types/index.ts` — added `ProjectCaseStudy`, `ArchitectureStage`, `ToolItem`, `DatasetInfo`, `ChallengeItem`, `EvidenceItem`, `VerificationStatus`, `ProjectReviewStatus`; `ProjectMetric` gained an optional `status` (`reported` / `pending`); `Project` gained an optional `caseStudy`.
- `src/data/projects.ts` — metric rows now carry an explicit status, case studies are attached to each project, and `getRelatedProjects()` was added.
- `src/pages/ProjectDetail.tsx` — rewritten as the case-study template.
- `src/pages/Projects.tsx` — engagement-type filter with counts, a visible `h2` ("Case studies"), and an `aria-live` result count.
- `src/components/projects/ProjectCard.tsx` — the badge now describes the **case-study review state** (`Case study draft` / `Reviewed`) instead of asserting whether the project itself is finished; only reported metrics appear on the card.
- `src/index.css` — one functional change: Tailwind's automatic source detection was disabled (`@import 'tailwindcss' source(none)`) and the sources declared explicitly (`@source '../index.html'`, `@source './**/*.{ts,tsx}'`). Previously the scanner read every text file in the project, including `README.md`, so editing documentation silently changed the shipped CSS. No design token, colour, or typography value was altered.

**Created (11)**

- `src/data/case-studies/cervicalai.ts`, `src/data/case-studies/robotic-microscopy.ts`, `src/data/case-studies/shelfscan.ts`, `src/data/case-studies/index.ts`
- `src/components/projects/CaseStudyHeader.tsx`, `src/components/projects/MetricTable.tsx`, `src/components/projects/StageFlow.tsx`, `src/components/projects/ToolList.tsx`, `src/components/projects/EvidenceGrid.tsx`
- `src/components/ui/StatusBadge.tsx`
- `public/images/cervicalai/`, `public/images/microscopy/`, `public/images/shelfscan/` (empty folders for approved visuals)

**Unchanged:** `package.json`, `package-lock.json`, `vite.config.ts`, all `tsconfig*.json`, `src/main.tsx`, `src/App.tsx` (routes), the whole `src/components/home/` set, `src/components/layout/`, and every other data file — of the existing data files, only `src/data/projects.ts` was touched in this milestone.

## 3. Content-integrity decisions

1. **One figure only.** The only number on the entire site is the workplan-documented 87.33% mAP@50 for RF-DETR on `cs-cervical-7a`, shown in the results table with the qualification "Internal verification was ongoing when this was documented; it is not a clinical validation." A grep of the source for numeric percentages returns only that value.
2. **No invented specifics.** No framework, model family, library, hardware, optimiser, epoch count, latency, or dataset detail is asserted. Each of those slots is named explicitly and marked `Pending` or `Not disclosed`, so the gap is visible instead of being filled with a plausible guess.
3. **Professional versus personal work is stated, not implied.** It appears in the eyebrow, the meta strip, the section 01 context line, the limitations text, and the disclosure block. CervicalAI and Robotic Microscopy additionally carry a disclosure stating that internal code, slides, data, hardware identifiers, and unreleased results are excluded; ShelfScan states that it contains no employer material.
4. **No clinical or production claim.** The limitations text states plainly that the result is an engineering result on a detection benchmark, not a clinical validation, diagnostic claim, or screening-programme statement, and that no production or clinical deployment is claimed.
5. **Project state is not asserted.** The card badge describes the review state of the written case study, not the completion state of the project.
6. **Placeholders are labelled and actionable.** Every evidence slot renders as `Placeholder` and prints the exact file to drop in, so nothing is loaded from those paths until an approved image exists.

## 4. Validation evidence

| Check | Command | Result |
| --- | --- | --- |
| Type check | `npm run typecheck` (`tsc -b --noEmit`) | Clean, no output |
| Lint | `npm run lint` (`oxlint`) | Clean, 0 warnings |
| Production build | `npm run build` (`tsc -b && vite build`) | Passed in 698 ms — `dist/index.html` 1.40 kB, CSS 25.62 kB (5.57 kB gzip), JS 331.80 kB (101.26 kB gzip), 1977 modules |
| Direct route loads | `vite preview` + HTTP requests | `/projects/cervicalai`, `/projects/robotic-microscopy`, `/projects/shelfscan` → 200; `/projects/does-not-exist` → 200 with a dedicated "Case study not found" view |
| Layout audit (headless Chrome, 1440 / 768 / 390 px) | overflow measurement on every route | 0 px horizontal overflow on all routes and widths |
| CSS completeness | class-token extraction from 42 source files vs. the built stylesheet | 228 tokens used in `src/**` and `index.html`, 0 unresolved in the emitted CSS — the explicit `@source` configuration drops no utility |
| CSS determinism | two consecutive production builds | Identical asset hash (`index-BcyS3CIq.css`) — documentation edits can no longer change the shipped stylesheet |
| Design-token integrity | computed-style probe on the homepage | `.hero-surface` gradient, `.visual-grid` gradient, `.surface-card` border/background, Inter stack, and the `--canvas` background all still resolve after the `@source` change |
| Heading order | heading-level scan per route | Detail pages: h1 → 9 × h2 → h3 (20/22/20 h3), no skipped levels. Listing page: h1 → h2 → h3. Homepage: h1 → 4 × h2 → h3. One h1→h3 skip was found on the listing page and fixed by adding the visible "Case studies" heading |
| Metric table semantics | DOM inspection | Caption present, 3 `scope="col"` headers, 3–4 `scope="row"` row headers per table, wrapped in a focusable `role="region"` with an accessible label so the table can be scrolled by keyboard |
| Content assertions | text scan of rendered pages | CervicalAI shows 87.33%, "internal verification", the `cs-cervical-7a` dataset, and RF-DETR; ShelfScan is marked as personal work with 3 pending metric rows and 0 published values; 4 "Not published" cells on CervicalAI |
| Related projects | DOM inspection | 2 related cards render on every detail page; breadcrumb `nav[aria-label="Breadcrumb"]` present |
| Filter interaction | click "Professional work" | 3 → 2 cards, `aria-pressed="true"` moves, live region reports "Showing 2 of 3" |
| Homepage regression | DOM inspection | Sections unchanged (`hero-heading`, `projects`, `expertise`, `experience`, `contact`); GitHub link and Download Resume present; 3 project cards on the homepage and 8 `<article>` elements in total (3 project cards, 4 expertise groups, 1 experience entry) |
| Resume | HTTP + DOM | The owner added `public/resume.pdf`; the build-time flag now emits `<a href="/resume.pdf" download>` and the file serves as `application/pdf` (HTTP 200) |
| Workplan PDF | `md5sum` | Unchanged — `253d566663f1bc26d9cc501dd7c71f43`, 44,330 bytes, 7 pages |
| Git | `git status` | No commit created; every change remains in the working tree on branch `main` |

## 5. Where to make changes

| Goal | File |
| --- | --- |
| Edit any case-study text | `src/data/case-studies/<project>.ts` |
| Add a metric or change its status | `src/data/projects.ts` → `metrics[]` |
| Attach a repository, demo, or dataset link | `src/data/projects.ts` → `links[]` |
| Mark a case study as reviewed | `src/data/projects.ts` → `status: 'reviewed'` |
| Publish an approved image | Drop the file in `public/images/...` and set `status: 'approved'` on the matching evidence entry |
| Adjust section order or copy | `src/pages/ProjectDetail.tsx` |

## 6. Content and assets still needed

1. **Approved visuals (7 slots).** Placeholders are in place; each prints its expected path:

   | Project | Expected file |
   | --- | --- |
   | CervicalAI | `/images/cervicalai/detection-overlay.png` |
   | CervicalAI | `/images/cervicalai/stage-metrics.png` |
   | Robotic Microscopy | `/images/microscopy/stitching-overlay.png` |
   | Robotic Microscopy | `/images/microscopy/calibration-diagram.png` |
   | Robotic Microscopy | `/images/microscopy/edge-pipeline.png` |
   | ShelfScan | `/images/shelfscan/detection-samples.png` |
   | ShelfScan | `/images/shelfscan/comparison-chart.png` |

2. **CervicalAI metrics** — confirm whether per-class mAP, precision/recall, and classification-stage values may be published, and confirm the qualification wording shown next to 87.33% mAP@50.
3. **Robotic Microscopy figures** — localisation, stitching, calibration, and edge-latency values, if publishable.
4. **ShelfScan specifics** — candidate model names, dataset composition, measured accuracy and latency, and whether the repository may be published.
5. **Stack entries** — confirm or complete the `Pending` and `Not disclosed` items in each case study's tool list.
6. **Case-study review state** — flip `status` from `draft` to `reviewed` in `src/data/projects.ts` once each page has been checked; this also changes the badge on the project cards.
7. **Links** — repository, demo, or dataset URLs go in `project.links`; each renders as an external link card in section 08.

### Addendum — 2026-10-23 — Hero social link legibility

**Symptom:** the GitHub and LinkedIn links under the hero buttons rendered faded and low-contrast.

**Root cause:** `src/index.css` applied `mask-image: linear-gradient(black 0%, black 55%, transparent 92%)` to the `.hero-surface` **section itself**, not to its background. A CSS mask affects the element *and all descendants*, so every hero child in the lower 45% of the section was composited toward transparent. The links sat at 81.4% of the section height — inside the fade — despite having `color: rgb(11,15,22)` and `opacity: 1`. Measured text contrast was **2.06:1** (WCAG AA needs 4.5:1). No opacity utility, gradient overlay, or muted colour was involved.

**Fix:** the gradients, background sizing, and mask were moved from `.hero-surface` onto a decorative `.hero-surface::before` pseudo-element (`position: absolute; inset: 0; z-index: -1; pointer-events: none`), and the section got `position: relative; isolation: isolate` so the layer sits above the section background but behind all content. The background grid and its fade are unchanged; only the content masking is gone.

**Verification:** link text contrast **2.06:1 → 19.22:1** (identical in dev and production builds); headline region and fade band are **pixel-identical to before** (0 changed pixels), so the background grid is untouched; section height and link positions unchanged (no layout shift); hover still transitions to accent `rgb(47,111,235)`; keyboard focus still shows the 2px accent outline at 2px offset; all routes still 0 px overflow with unchanged heading/table structure; `typecheck` and `lint` clean; build passes (CSS 25.76 kB / 5.61 kB gzip, JS 331.80 kB / 101.26 kB gzip).

### Addendum — 2026-10-23 — Homepage section width and card borders

**Symptom:** the Featured projects and Technical expertise sections ran edge-to-edge; the outermost card borders sat on the viewport edge and the layout had no side margins, unlike `/projects`.

**Root cause:** `src/components/ui/Section.tsx` — the shared homepage section wrapper — had no container and no horizontal padding. Measured at 1440 px: both sections spanned `left=0 → right=1440`, and the cards ran `0–464`, `488–952`, `976–1440`. `/projects` was unaffected because `src/pages/Projects.tsx` wraps its content in `Container size="lg"` (`mx-auto w-full max-w-6xl px-5 sm:px-8`). This was a missing container, not overflow (`scrollWidth === clientWidth` at every width).

**Fix:** added an `xl` size to `src/components/ui/Container.tsx` (`max-w-7xl`, 1280 px) and wrapped the `Section` header and children in `<Container size="xl">`. The grids, cards, typography, colours, background grid, and spacing were untouched. Tailwind's `grid-cols-*` utilities already emit `repeat(n, minmax(0, 1fr))`, so no grid sizing change was needed.

Because `Section` is shared, the Experience preview and Contact CTA sections now use the same centred width — they carried the identical defect (their cards also touched both viewport edges). Their internal layouts are unchanged.

**Verification (1440 px):** section container 1280 px, margins 80 px each side, content and header aligned at 112–1328; Featured cards 112–501 / 525–915 / 939–1328 (3 columns, 1 px borders, 12 px radius), Expertise cards 112–708 / 732–1328 (2 columns); `/projects` still 144–1296. Margins at 1920 = 352 px, at 1280 = 32 px, at 1024 = 32 px (3 and 2 columns kept), at 768 = 32 px (2 columns), at 390 = 20 px (1 column). `scrollWidth === clientWidth` at every width; hero and all other routes unchanged; no console errors; `typecheck` and `lint` clean; build passes (CSS 25.83 kB / 5.63 kB gzip, JS 331.85 kB / 101.27 kB gzip).

### Addendum — 2026-10-29 — About page refinement

**Project:** `ai_ml_portfolio` · **Owner:** Debadri Chatterjee
**Workplan phase:** Phase 2 — Brand pages (About page) · **Report placement:** appended to the current Milestone 3 report per the addendum rule; no new numbered milestone was created.
**Scope:** replace the placeholder About page with the owner-supplied professional narrative, using the existing design system and project routes.

## 1. What was built

The About page now tells the story in five ordered parts: who Debadri is, what he works on, how he approaches engineering problems, selected work, and what he wants to do next.

- **Introduction** — owner-supplied eyebrow, headline, and two-paragraph positioning statement. A desktop-only sticky section index and a compact “Currently / Education” block sit alongside the intro.
- **What I work on** — four text-led areas (computer vision and image processing, applied ML, medical imaging, edge AI and system integration) in a 2 × 2 grid, separated by hairline rules rather than cards. A single inline “Working toolkit” line sits below.
- **Engineering approach** — “Beyond getting a model to work.” presented as a typographic pull quote with a restrained 2 px accent rule, followed by the philosophy paragraph.
- **Selected work** — three clickable rows for Robotic Microscopy, CervicalAI, and ShelfScan, each linking to its existing case-study route and showing its existing professional/personal category label.
- **What’s next** — the owner-supplied forward-looking copy and two calls to action (contact and projects), leading naturally into the existing footer.

No profile photograph, project image, illustration, or decorative asset was added. No existing route, navigation item, footer link, project page, or global style was changed.

## 2. Files changed

**Modified**
- `src/pages/About.tsx` — replaced the placeholder header with the full page; added local `focusAreas`, `selectedWork`, and `sectionLinks` content arrays.
- `README.md` — this addendum, the index addenda count, and `Last updated`.
- `AGENTS.md` — work-log row for this addendum.

**Unchanged**
- `src/App.tsx`, `src/components/layout/*`, `src/components/ui/*`, `src/index.css`, `src/data/*`, the homepage and all other pages, project routes, dependencies, `public/` assets, and the workplan PDF.

## 3. Content-integrity decisions

- The owner-supplied copy is used as the source of truth; only punctuation, heading casing, and section labels were editorially adjusted. No facts, metrics, employers, dates, or project outcomes were added.
- **No performance metric appears on the About page.** The documented 87.33% mAP@50 result remains only in the project data and case study, with its existing qualification.
- **Toolkit limited to supported technologies:** Python, PyTorch, OpenCV, Linux, Git, and edge deployment. Python/edge deployment are already marked verified in `src/data/skills.ts`; PyTorch, OpenCV, Linux, and Git are supported by the public resume. **SQL was deliberately omitted** because it is not established in the existing portfolio or resume.
- **Education limited to “M.Sc. Computer Science.”** No institution, date, GPA, or additional qualification was added to the About page; those details remain for the separate Experience/education work.
- **No employment claims beyond the supplied copy.** Aimil Ltd was not added to the About page, and no “production-ready,” clinical-validation, or deployment-at-scale claim was introduced.
- **No fabricated imagery or links.** No profile photograph was available, so none was generated. All three project links use routes that already exist in `src/data/projects.ts`.
- The mobile layout hides the desktop-only “On this page” index; “Currently” and “Education” remain visible as a compact two-column block, so the page does not spend a full screen on navigation before its content.

## 4. Validation evidence

| Check | Command / method | Result |
| --- | --- | --- |
| TypeScript | `npm run typecheck` (`tsc -b --noEmit`) | Clean |
| Lint | `npm run lint` (`oxlint`) | Clean, 0 warnings |
| Production build | `npm run build` (`tsc -b && vite build`) | Passed in 574 ms; `dist/index.html` 1.40 kB (0.62 kB gzip), CSS 27.54 kB (5.83 kB gzip), JS 341.70 kB (103.27 kB gzip); hashes `index-BIvIuBpf.css` / `index-DwTP_6aY.js` unchanged across the documentation-only rebuild |
| About overflow and structure | Headless Chrome at 1920 / 1440 / 1280 / 1024 / 768 / 390 px | `scrollWidth === clientWidth` at every width; exactly one `h1`; four `h2` sections; every section stayed inside the viewport |
| Additional narrow widths | Headless Chrome at 320 / 360 / 414 / 600 / 834 px | `scrollWidth === clientWidth` at every width; no off-screen text, links, or list items |
| Cross-route regression | Headless Chrome at 1440 and 390 px for `/`, `/projects`, all three project routes, `/about`, `/experience`, `/skills`, `/contact`, and a missing route | All 10 routes returned 200 (or 304 from cache); one `h1` each; `main#main-content` and `nav[aria-label="Primary"]` present; 0 px overflow |
| About anchors | Headless Chrome: resolve every `nav[aria-label="On this page"]` target | `#focus`, `#approach`, `#work`, `#next` all exist; clicking `#work` updates the URL hash and scrolls the section into view |
| Project links | Headless Chrome: visit each About project link | `/projects/robotic-microscopy`, `/projects/cervicalai`, and `/projects/shelfscan` all load; `h1` matches the project title |
| Keyboard focus | Headless Chrome: Tab sequence from the top of the page | Skip link → primary nav → section index → three project rows → “All case studies” → CTAs → footer links; every stop reports a 2 px outline at 2 px offset and `:focus-visible` is true |
| Hover treatment | Headless Chrome: hover the first project row, wait 400 ms | Title `rgb(11, 15, 22)` → `rgb(29, 78, 216)`; arrow translate `2px -2px`; 150 ms transition |
| Reduced motion | Headless Chrome with `prefers-reduced-motion: reduce` | Transition and animation durations resolve to `1e-05s` |
| Contrast | Computed colour sampling on `/about` | Body-muted text 7.68:1; subtle labels 4.62:1; `h1` 19.19:1; all meet WCAG AA for their sizes |
| Console and network | Headless Chrome across the route set | No console errors; no failed requests |
| Mobile navigation | Headless Chrome at 390 px | Menu opens (`aria-expanded=true`, panel visible, six links), closes on `Escape`, closes on button click, and reopens correctly |
| Workplan integrity | `md5sum AI_ML_Portfolio_Cloudflare_Workplan.pdf` | `253d566663f1bc26d9cc501dd7c71f43` — unchanged |
| Git state | `git status --short` | No commit created; changes remain in the working tree (the repository still has no commits) |

## 5. Where to make changes

| Goal | File / location |
| --- | --- |
| Edit the introduction or headline | `src/pages/About.tsx` — intro section |
| Edit the four focus areas | `src/pages/About.tsx` — `focusAreas` array |
| Edit the engineering philosophy | `src/pages/About.tsx` — `#approach` section |
| Edit selected-work descriptions or order | `src/pages/About.tsx` — `selectedWork` array |
| Change project routes or category labels | `src/pages/About.tsx` — `selectedWork`; source data in `src/data/projects.ts` |
| Change the toolkit line | `src/pages/About.tsx` — “Working toolkit” block |
| Change “Currently” or education | `src/pages/About.tsx` — intro aside; experience source in `src/data/experience.ts` |
| Change the section index labels | `src/pages/About.tsx` — `sectionLinks` array |

## 6. What was not done

- No profile photograph or About-page imagery was added, because no approved asset exists.
- No Aimil Ltd role, additional education details, or Experience-page restructuring was added; those remain Phase 2 items outside this focused page refinement.
- No case-study imagery, metrics, links, or review states were changed.
- No new dependencies, animations, gradients, cards, or design tokens were introduced.
- No manual visual review of a screenshot was possible in this environment; layout was verified through DOM geometry, overflow, contrast, and keyboard measurements instead.
- No screen-reader session was run; semantics were checked through headings, landmarks, link names, and focus order in the DOM.
- No commit, push, or deploy was performed.

## 7. Inputs still needed from the owner

1. Confirm the toolkit line is the desired public list (Python, PyTorch, OpenCV, Linux, Git, edge deployment), or add/remove technologies with evidence.
2. Confirm that “M.Sc. Computer Science” is the right level of education detail for About, or supply the institution/date wording to show.
3. Review the owner-supplied copy as rendered and confirm the “Professional work” / “Personal project” labels for the three selected projects.
4. Confirm whether the About page should also link to the resume; the current calls to action point to contact and projects only.

---

### Addendum — 2026-10-29 — Contact page, resume access, and email link behavior

**Project:** `ai_ml_portfolio` · **Owner:** Debadri Chatterjee
**Workplan phase:** Phase 2 — Brand pages (Contact page) · **Report placement:** appended to the current Milestone 3 report per the addendum rule; no new numbered milestone was created.
**Scope:** replace the placeholder Contact page with the owner-approved copy and contact details, add consistent resume access to the navigation/About/Contact pages, and stop `mailto:`/`tel:` links from opening in a new tab.

## 1. What was built

- **Contact page** — `CONTACT` eyebrow, `Let's build something useful.` headline, two intro paragraphs, a five-row contact-details block (email, phone, location, work arrangements, response expectation), GitHub/LinkedIn links, a secondary resume download, and a project-inquiry guide with four prompts.
- **Contact configuration** — added a `contactDetails` export to `src/data/profile.ts` for the phone, location, work arrangements, and response expectation. Phone is intentionally not added to `profileLinks`, so it does not appear in the footer or homepage CTA.
- **Resume access** — the existing `resume` config and `/resume.pdf` are now reachable from the desktop navigation, the mobile navigation, the About page, and the Contact page. No duplicate PDF or duplicate resume configuration was added.
- **Navigation breakpoint** — the full desktop navigation now appears at `lg` (1024 px) instead of `md` (768 px). This keeps the six nav items, the new resume button, and the logo from crowding the header at 768–1023 px; those widths use the existing mobile menu, which includes the resume link.
- **Link behavior** — `ContactCta` and `Footer` no longer apply `target="_blank"` to `mailto:` links. GitHub/LinkedIn keep `target="_blank"` and `rel="noopener noreferrer"`; the CTA’s `ExternalLink` icon now appears only for HTTP(S) links.
- **Accessibility and contrast** — every contact link keeps the existing 2 px focus outline; the card eyebrow was changed from `text-ink-subtle` to `text-ink-muted` after the raised-surface contrast measured 4.49:1, just under the WCAG AA 4.5:1 threshold.

## 2. Files changed

**Modified**
- `src/pages/Contact.tsx` — replaced the placeholder with the full page and local inquiry-item content.
- `src/data/profile.ts` — added `contactDetails`.
- `src/components/layout/Navbar.tsx` — added desktop/mobile resume links; moved the desktop breakpoint from `md` to `lg`.
- `src/pages/About.tsx` — added a prominent `Download Resume` action using the shared `resume` config.
- `src/components/home/ContactCta.tsx` — conditional `target`/`rel`; external icon only for HTTP(S).
- `src/components/layout/Footer.tsx` — conditional `target`/`rel` for email vs external links.
- `README.md` — this addendum, the index addenda count, and `Last updated`.
- `AGENTS.md` — work-log row and owner-input reference.

**Unchanged**
- `src/App.tsx`, routes, project data, case studies, experiences, skills, design tokens, `public/resume.pdf`, dependencies, and the workplan PDF.

## 3. Content-integrity decisions

- The owner-supplied Contact copy and values are used as provided: `debadrichatterjee1997@gmail.com`, `+91 9038914297`, `New Delhi, India`, “Open to remote, hybrid, onsite, and relocation opportunities.”, and “I aim to respond as soon as possible.”
- The phone number is shown only on the Contact page. It is not inserted into the footer/CTA or any other public surface.
- No contact form, backend, third-party form service, embedded map, or new dependency was added.
- The resume action reuses the existing `public/resume.pdf` (128,957 bytes) and the existing `resume.href`/`resume.available` configuration. No new resume file or alternate URL was created.
- No new project, employer, metric, social link, or contact claim was introduced. GitHub and LinkedIn continue to use the existing configured URLs.
- Email and phone links intentionally have no `target`; external links retain `target="_blank"` and `rel="noopener noreferrer"`.
- The card eyebrow colour change was a contrast fix, not a new design token: `text-ink-muted` overrides the shared `.eyebrow` colour only on the Contact inquiry card.

## 4. Validation evidence

| Check | Command / method | Result |
| --- | --- | --- |
| TypeScript | `npm run typecheck` (`tsc -b --noEmit`) | Clean |
| Lint | `npm run lint` (`oxlint`) | Clean, no diagnostics |
| Production build | `npm run build` (`tsc -b && vite build`) | Passed in 289 ms; `dist/index.html` 1.40 kB (0.62 kB gzip), CSS 28.67 kB (5.95 kB gzip), JS 349.69 kB (104.88 kB gzip); hashes `index-DMrkK46R.css` / `index-DnBxTRkH.js`, unchanged after the documentation-only rebuild |
| Contact layout and content | Headless Chrome at 1920 / 1440 / 1280 / 1024 / 768 / 390 / 360 / 320 px | `scrollWidth === clientWidth` at every width; one `h1`; no `<form>`; five contact rows; four inquiry items; closing sentence present |
| Responsive columns | Headless Chrome: contact grid geometry | Two columns from 1024 px up (e.g. 1088 px content: 672 px + 352 px at 1440); one stacked column at 768 px and below |
| Email link | Headless Chrome: inspect Contact email anchor | Text `debadrichatterjee1997@gmail.com`; `href="mailto:debadrichatterjee1997@gmail.com"`; no `target`; no `rel` |
| Phone link | Headless Chrome: inspect Contact phone anchor | Text `+91 9038914297`; `href="tel:+919038914297"`; no `target`; no `rel` |
| External links | Headless Chrome: inspect GitHub/LinkedIn anchors | `target="_blank"` and `rel="noopener noreferrer"` on both |
| Resume links | Headless Chrome + HTTP fetch | Nav, About, Contact, and footer all point to `/resume.pdf` with the `download` attribute; PDF returns 200, `application/pdf`, 128,957 bytes |
| Navigation breakpoint | Headless Chrome at 767 / 768 / 1023 / 1024 / 1280 px | Mobile menu button visible at 767–1023; desktop nav + resume visible at 1024+; no overflow; mobile resume visible after opening the menu |
| Home CTA and footer | Headless Chrome: inspect `/` links | Email has no `target`/`rel`; GitHub/LinkedIn have `target="_blank"` + `rel="noopener noreferrer"`; Email has 0 external icons; external links have 1 |
| Keyboard focus | Headless Chrome: Tab through `/contact` | 16 relevant link stops; each reported a 2 px solid outline at 2 px offset and `:focus-visible` true |
| Contrast | Computed text sampling at all contact widths | No failures; lowest measured ratio 4.62:1 (small eyebrow/label text); primary text 7.47–19.19:1; card eyebrow 7.47:1 |
| Route regression | Headless Chrome at 1440 and 390 px for `/`, `/projects`, all three project routes, `/about`, `/experience`, `/skills`, `/contact`, and a missing route | All 10 routes rendered with one `h1` and zero overflow at both widths; statuses were 200 or 304 (cached preview) |
| Console and network | Headless Chrome across the route set | 0 console errors; 0 failed requests |
| Workplan integrity | `md5sum AI_ML_Portfolio_Cloudflare_Workplan.pdf` | `253d566663f1bc26d9cc501dd7c71f43` — unchanged |
| Git state | `git status --short` | No commit created; changes remain in the working tree |

## 5. Where to make changes

| Goal | File / location |
| --- | --- |
| Edit Contact headline, intro, or inquiry prompts | `src/pages/Contact.tsx` — `inquiryItems` and the page body |
| Change phone, location, work arrangements, or response wording | `src/data/profile.ts` — `contactDetails` |
| Change email/GitHub/LinkedIn URLs | `src/data/profile.ts` — `profileLinks` |
| Change resume path or availability | `src/data/profile.ts` — `resume`; file in `public/resume.pdf` |
| Change the nav resume label or breakpoint | `src/components/layout/Navbar.tsx` |
| Change the About resume button | `src/pages/About.tsx` — intro section |
| Change CTA/footer link behavior | `src/components/home/ContactCta.tsx`, `src/components/layout/Footer.tsx` |

## 6. What was not done

- No contact form, backend, spam protection, scheduling embed, or third-party integration was added.
- No new resume PDF or alternate resume URL was created.
- No profile photograph, map, illustration, or new imagery was added.
- No project metrics, case-study copy, social URLs, or review states were changed.
- No new dependencies or design tokens were introduced.
- No manual visual review of a screenshot was possible in this environment; layout was verified through DOM geometry, overflow, contrast, link attributes, and keyboard focus instead.
- No screen-reader session was run.
- No commit, push, or deploy was performed.

## 7. Inputs still needed from the owner

1. Review the rendered Contact page and confirm the phone number should remain publicly visible.
2. Confirm `public/resume.pdf` is the current resume and intended for public download from the nav, About, and Contact pages.
3. Confirm the desktop navigation should switch to the mobile menu below 1024 px, as implemented.
4. Confirm whether a contact form is desired later; the current page intentionally uses direct email/phone links only.
5. Review the contact copy and inquiry prompts as rendered; no further factual content was added.

---

### Addendum — 2026-10-29 — Experience and Education

**Project:** `ai_ml_portfolio` · **Owner:** Debadri Chatterjee
**Workplan phase:** Phase 2 — Brand pages · **Report placement:** appended to the current Milestone 3 report per the addendum rule; no new numbered milestone was created.
**Scope:** add the Aimil Ltd. role, expand the MiMD Lab role, surface the approved case-study links, add structured education data, and update the Experience and About pages.

## 1. What was built

- **Aimil Ltd. role** — added `AI Systems Analyst` at `Aimil Ltd.`, `December 2024 – October 2025`, with three owner-approved, high-level bullets. No location, links, metrics, client names, or dataset size were added.
- **MiMD Lab expansion** — kept the role and organization (`AI/ML Engineer`, `MiMD Lab, IIT Delhi`), retained it as the first experience entry, and expanded it to five bullets covering robotic microscopy, image acquisition/stitching, tissue localization, system integration, and edge inference.
- **Case-study links** — added two secondary links to the existing routes: `View Robotic Microscopy Case Study` (`/projects/robotic-microscopy`) and `View CervicalAI Case Study` (`/projects/cervicalai`). Both were clicked in headless Chrome and reached the expected pages.
- **Structured education** — added `EducationEntry` and `src/data/education.ts` with the M.Sc. and B.Sc. records. Optional fields cover short institution name, location, period, GPA, and percentage.
- **Experience page** — title is now `Experience & Education`; description is `A look at my professional experience, technical work, and academic background.` The page renders periods, locations when present, and role links conditionally. A compact `Academic background` section now appears beneath the roles.
- **About page** — replaced the hardcoded `M.Sc. Computer Science` with a compact summary using the structured record: `M.Sc. Computer Science`, `RKMVERI · 2019–2021`. The current-role summary remains `AI/ML Engineer`, `MiMD Lab, IIT Delhi`.
- **Location handling** — Aimil has no location. MiMD's location is already inside its organization string, so the page suppresses a duplicate location line while retaining the renderer for future entries.
- **Accessibility** — role dates use `text-ink-muted` on the raised card surface, correcting a measured 4.49:1 contrast ratio. Both new project links keep the global 2 px focus outline.

## 2. Files changed

**Modified**
- `src/types/index.ts` — added `EducationEntry`.
- `src/data/experience.ts` — added Aimil; expanded MiMD; added two internal links.
- `src/pages/Experience.tsx` — new page title/description, conditional period/location/links, and education section.
- `src/pages/About.tsx` — education summary now reads from `src/data/education.ts`.
- `README.md` — this addendum, the index addenda count, and `Last updated`.
- `AGENTS.md` — work-log row and owner-input note.

**Created**
- `src/data/education.ts` — two structured education entries.

**Unchanged**
- `src/App.tsx`, routes, project data, case-study copy and disclosure states, skills data, design tokens, homepage components, `public/resume.pdf`, dependencies, and the workplan PDF.
- `ExperiencePreview` still reads `experiences[0]`; the homepage therefore continues to show MiMD and never shows Aimil.

## 3. Content-integrity decisions

- Aimil uses only the approved title, organization, period, and three high-level bullets.
- No `347`-person dataset, hospital/client name, accuracy claim, production deployment claim, clinical outcome, or unsupported `80%` reduction claim was added.
- MiMD uses high-level descriptions from the approved content and the approved tool/hardware names: Flask, Autoscope, Duet, NVIDIA Jetson Orin Nano, RF-DETR, and PyTorch. No configuration details, model counts, memory/power settings, private data, or implementation specifics were added.
- The robotic-microscopy case study's `not_disclosed` fields and the CervicalAI disclosure wording were not modified. The Experience page names only the owner-approved high-level tools/hardware; it does not expose the restricted implementation details.
- The published `87.33% mAP@50` figure was not repeated on Experience. The CervicalAI case-study link is used instead.
- Education records are exactly: M.Sc. Computer Science, RKMVERI, Belur, West Bengal, 2019–2021, GPA 8.0/10; B.Sc. Computer Science, Scottish Church College, Calcutta University, 2016–2019, 70%. No B.Sc. location, Class X/XII record, or UPSC preparation was added.
- Education is presented after the roles as borderless rows; the section heading and role headings both measure 20 px, while degree rows are 18 px.
- No commit, push, deploy, or resume edit was performed.

## 4. Validation evidence

| Check | Command / method | Result |
| --- | --- | --- |
| TypeScript | `npm run typecheck` (`tsc -b --noEmit`) | Clean |
| Lint | `npm run lint` (`oxlint`) | Clean, no diagnostics |
| Production build | `npm run build` (`tsc -b && vite build`) | Passed in 743 ms; 1,978 modules; `dist/index.html` 1.40 kB (0.62 kB gzip), CSS 28.84 kB (5.99 kB gzip), JS 352.98 kB (105.79 kB gzip); hashes `index-DDbDGmF3.css` / `index-Cr_p63C6.js` |
| Experience layout | Headless Chrome at 1920 / 1440 / 1280 / 1024 / 768 / 390 px | `scrollWidth === clientWidth` at every width; one `h1`; two role cards; every card edge inside the viewport |
| Role content | Headless Chrome: `/experience` | Order is `AI/ML Engineer` then `AI Systems Analyst`; MiMD has 5 bullets and 2 links; Aimil has 3 bullets and no links; Aimil has no location |
| Link labels and targets | Headless Chrome: inspect anchors | `View Robotic Microscopy Case Study` → `/projects/robotic-microscopy`; `View CervicalAI Case Study` → `/projects/cervicalai`; both visible |
| Link navigation | Headless Chrome: click each link | `/projects/robotic-microscopy` rendered `Robotic Microscopy`; `/projects/cervicalai` rendered `CervicalAI` |
| Education content | Headless Chrome: `/experience` | M.Sc. degree, full RKMVERI institution, Belur, West Bengal, 2019–2021, GPA 8.0/10; B.Sc. degree, Scottish Church College, Calcutta University, 2016–2019, Percentage 70%; no Class X/XII |
| Education placement | Headless Chrome: geometry | Education section begins below the final role; role and education `h2` both 20 px; degree rows 18 px |
| About summary | Headless Chrome at 1440 and 390 px | One `h1`; one `M.Sc. Computer Science`; `RKMVERI · 2019–2021`; no B.Sc., GPA, or full-institution duplication; zero overflow |
| Homepage preview | Headless Chrome at 1440 and 390 px | One card; role `AI/ML Engineer`; MiMD present; Aimil absent; 5 current-role bullets |
| Route regression | Headless Chrome at 1440 and 390 px for `/`, `/projects`, all three project routes, `/about`, `/experience`, `/skills`, `/contact`, and a missing route | All 10 routes rendered with one `h1`, a main landmark, and zero overflow at both widths; statuses were 200 or 304 (cached preview) |
| Keyboard focus | Headless Chrome: Tab through `/experience` | Both project links reported `:focus-visible` true and a 2 px solid outline at 2 px offset |
| Contrast | Computed text sampling at six widths | 0 failures; role dates changed from the measured 4.49:1 subtle tone to the muted tone |
| Console and network | Headless Chrome across the route set | 0 console errors; 0 failed requests |
| Resume unchanged | HTTP fetch | `/resume.pdf` → 200, `application/pdf`, 128,957 bytes |
| Workplan integrity | `md5sum AI_ML_Portfolio_Cloudflare_Workplan.pdf` | `253d566663f1bc26d9cc501dd7c71f43` — unchanged |
| Git state | `git status --short` | No commit created; changes remain in the working tree |

## 5. Where to make changes

| Goal | File / location |
| --- | --- |
| Edit Aimil role, dates, or bullets | `src/data/experience.ts` — second entry |
| Edit MiMD bullets, dates, or links | `src/data/experience.ts` — first entry |
| Edit education records | `src/data/education.ts` |
| Change the education summary on About | `src/pages/About.tsx` — `highestEducation` block |
| Change Experience page structure or labels | `src/pages/Experience.tsx` |
| Change the education data shape | `src/types/index.ts` — `EducationEntry` |
| Change the homepage current-role preview | `src/components/home/ExperiencePreview.tsx` |

## 6. What was not done

- No resume PDF edit; the existing `public/resume.pdf` was left untouched.
- No Class X/XII education records and no UPSC preparation entry were added.
- No project, case-study copy, metric, disclosure state, or route was changed.
- No new dependency, design token, page, or navigation item was added.
- No contact, skills, or homepage component was edited.
- No screenshot was visually reviewed; layout was verified through DOM geometry, overflow, contrast, link, and keyboard measurements.
- No screen-reader session was run.
- No commit, push, or deploy was performed.

## 7. Inputs still needed from the owner

1. Confirm the Aimil title, organization, dates, and three bullets are correct for public display.
2. Confirm the MiMD dates (`February 2026 – Present`) and the five bullets, especially the approved tool/hardware names: Autoscope, Duet, NVIDIA Jetson Orin Nano, RF-DETR, and PyTorch.
3. Confirm the case-study link labels and destinations.
4. Confirm the M.Sc. and B.Sc. degree names, institution wording, dates, GPA/percentage, and the decision to omit the B.Sc. location.
5. Confirm the homepage preview should show all five current-role bullets, or whether it should be trimmed to a shorter snapshot.
6. Confirm that the approved hardware/tool names may remain public on Experience even though the robotic-microscopy case study withholds runtime, accelerator, and motion-control details.

---

### Addendum — 2026-10-29 — Skills taxonomy, homepage preview, and contrast pass

**Project:** `ai_ml_portfolio` · **Owner:** Debadri Chatterjee
**Workplan phase:** Phase 2 — Brand pages · **Report placement:** appended to the current Milestone 3 report per the addendum rule; no new numbered milestone was created.
**Scope:** finalize the verified Skills content, remove provisional Skills UI, compact the homepage current-role preview, close measured contrast failures on the primary routes, and update the report index.

## 1. What was built

- **Verified Skills taxonomy** — replaced the mixed verified/pending list with five groups: `Machine Learning`, `Computer Vision`, `Python & Data Processing`, `Deployment & Edge AI`, and `Frameworks & Tools`.
- **Promoted `Data pipelines`** — removed the provisional label and kept it under `Python & Data Processing`.
- **Removed ten unverified entries** — `Experiment tracking`, `Model distillation`, `Image segmentation`, `Software engineering`, `Automated testing`, `Model packaging`, `Docker & CI/CD`, `Dataset curation`, `Annotation tooling`, and `Data visualization` no longer appear on the public site.
- **Added `Frameworks & Tools`** — PyTorch, OpenCV, Flask, RF-DETR, Linux, and Git. Python remains under `Python & Data Processing` rather than being duplicated. The empty `Data Tools` group was removed.
- **Removed pending UI** — `SkillItem.status`, the `SkillStatus` type, pending chip styling, and the pending `Chip` variant were deleted. Skills and Featured Expertise no longer render counters, pending labels, or status legends.
- **Skills page** — now shows all five groups and 16 verified chips, with the description `Every listed capability is supported by documented project or professional work.`
- **Featured Expertise** — shows the four featured groups and 10 chips; `Frameworks & Tools` is not featured on the homepage.
- **Homepage Experience preview** — reduced from five bullets to the first three MiMD bullets, kept the `View full experience` link to `/experience`, and changed the role period to `text-ink-muted`. Aimil remains absent from the homepage snapshot.
- **Contrast corrections** — changed the Hero aside role and `dt` labels, ProjectCard category/draft/metric labels, project filter counts, and Contact inquiry numbering from the failing subtle tone to the muted tone. The active filter count now uses full `text-canvas`. Measured contrast moved from `4.49:1` / `4.34:1` to `7.47:1` on the raised surface, `7.22:1` on the filter surface, and `19.19:1` on the active filter.
- **Decorative labels** — `ProjectVisual` labels remain unchanged because they are inside an `aria-hidden` region; they do not carry text-contrast requirements.
- **Navigation** — the existing 1024 px `lg` breakpoint already produced the correct desktop/mobile behavior, so `Navbar.tsx` was not changed.
- **About toolkit** — already matched the approved `Python · PyTorch · OpenCV · Linux · Git · edge deployment` summary; no About copy change was needed.

## 2. Files changed

**Modified**
- `src/data/skills.ts` — five verified groups and featured-group export.
- `src/pages/Skills.tsx` — verified-only page copy and group rendering; counters/legend removed.
- `src/components/home/Expertise.tsx` — four featured groups; counters/legend removed.
- `src/components/home/ExperiencePreview.tsx` — three-bullet snapshot, muted period, full-experience link.
- `src/components/ui/SkillChip.tsx` — pending styling removed.
- `src/components/ui/Chip.tsx` — pending variant removed.
- `src/types/index.ts` — `SkillStatus` and `SkillItem.status` removed.
- `src/components/home/Hero.tsx` — aside role and `dt` labels changed to `text-ink-muted`.
- `src/components/projects/ProjectCard.tsx` — category, draft badge, metric label, and metric note changed to `text-ink-muted`.
- `src/pages/Projects.tsx` — filter counts changed to muted or full-canvas text.
- `src/pages/Contact.tsx` — inquiry numbering changed to `text-ink-muted`.
- `README.md` — this addendum, the index addenda count, and `Last updated`.
- `AGENTS.md` — work-log row and owner-input note.

**Created**
- None in the repository. The headless audit scripts and JSON output live under `/tmp/opencode/`.

**Unchanged**
- `src/App.tsx`, routes, navigation, `Navbar.tsx`, `Section.tsx`, `Container.tsx`, `PageHeader.tsx`, and design tokens.
- `src/data/experience.ts`, `src/data/education.ts`, `src/data/profile.ts`, `src/data/projects.ts`, case-study data, project imagery, metrics, and review states.
- `src/pages/About.tsx`, `src/pages/Experience.tsx`, `src/components/layout/Footer.tsx`, and `src/components/home/ContactCta.tsx`.
- `public/resume.pdf`, dependencies, and the workplan PDF. No new dependency, route, page, or token was added.

## 3. Content-integrity decisions

- Every public skill is supported by documented project or professional work; no unverified capability was promoted.
- The ten removed entries stay off the public site, including `Docker & CI/CD` and `Data visualization`.
- `Frameworks & Tools` uses only tools already named in approved project/professional material: PyTorch, OpenCV, Flask, RF-DETR, Linux, and Git. No new framework, hardware, metric, or link was invented.
- `Data pipelines` was promoted because it is documented by the data-processing work; no separate toolchain or metric was attached to it.
- The Skills and Featured Expertise descriptions make no quantified performance claim and do not repeat the published `87.33% mAP@50` figure.
- The homepage preview shows three of the five approved MiMD bullets. It does not show Aimil, and it does not add a new role or metric.
- All contrast edits are color-only; no copy, metric, disclosure state, or case-study content was changed.
- No `pending`, `confirmed`, or `awaiting confirmation` language remains on Skills or Featured Expertise.
- No commit, push, deploy, or resume edit was performed.

## 4. Validation evidence

| Check | Command / method | Result |
| --- | --- | --- |
| TypeScript | `npm run typecheck` (`tsc -b --noEmit`) | Clean |
| Lint | `npm run lint` (`oxlint`) | Clean, no diagnostics |
| Production build | `npm run build` (`tsc -b && vite build`) | Passed in 712 ms; 1,978 modules; `dist/index.html` 1.40 kB (0.62 kB gzip), CSS 28.64 kB (5.96 kB gzip), JS 351.45 kB (105.58 kB gzip); hashes `index-C4jb0QmW.css` / `index-ClAO-_gj.js` |
| Primary-route layout | Headless Chrome: 5 routes × 6 widths (1920 / 1440 / 1280 / 1024 / 768 / 390 px), 30 page states | `scrollWidth === clientWidth` everywhere; exactly one `h1`; `main#main-content` present; desktop nav at 1024 px; menu button at 768 and 390 px; zero overflow |
| Projects layout | Headless Chrome: `/projects` × 6 widths, 6 page states | Zero overflow; one `h1`; main landmark present; no console or network errors |
| Contrast | Computed text sampling across all 36 page states | 0 failures; corrected samples measure `7.47:1` on `surface-card`, `7.22:1` on the filter surface, and `19.19:1` on the active filter |
| Skills content | Headless Chrome: `/skills` | Five groups — Machine Learning, Computer Vision, Python & Data Processing, Deployment & Edge AI, Frameworks & Tools; 16 chips; zero removed-term matches; zero pending-term matches |
| Homepage expertise | Headless Chrome: `/` | Four featured groups; 10 chips; zero removed-term matches; zero pending-term matches |
| Homepage preview | Headless Chrome: `/` at six widths | Role `AI/ML Engineer`; exactly 3 bullets; link text `View full experience` → `/experience`; Aimil and `AI Systems Analyst` absent |
| Mobile navigation | Headless Chrome: menu opened at 390 px | `aria-expanded="true"`; all 7 links visible — Home, Projects, Experience, Skills, About, Contact, Resume |
| Contact and resume | Headless Chrome plus HTTP fetch | Resume links download `/resume.pdf`; `mailto:debadrichatterjee1997@gmail.com` has no `target`; external GitHub/LinkedIn links use `noopener noreferrer`; PDF returns 200, `application/pdf`, 128,957 bytes |
| Keyboard focus | Headless Chrome: 38 sequential checks on the five-route audit | Every checked control reported a 2 px solid outline at 2 px offset; zero focus failures |
| Console and network | Headless Chrome across all audited states | 0 console errors; 0 failed requests |
| Workplan integrity | `md5sum AI_ML_Portfolio_Cloudflare_Workplan.pdf` | `253d566663f1bc26d9cc501dd7c71f43` — unchanged |
| Git state | `git status --short` | No commit created; all project files remain in the working tree |

## 5. Where to make changes

| Goal | File / location |
| --- | --- |
| Edit skill groups, chips, or featured status | `src/data/skills.ts` |
| Change Skills page copy or layout | `src/pages/Skills.tsx` |
| Change the homepage Featured Expertise set | `src/data/skills.ts` — `featuredSkillGroups`; `src/components/home/Expertise.tsx` |
| Change the homepage current-role preview | `src/components/home/ExperiencePreview.tsx` |
| Change skill chip styling or remove the component | `src/components/ui/SkillChip.tsx` |
| Change the generic chip variants | `src/components/ui/Chip.tsx` |
| Change the skill data shape | `src/types/index.ts` — `SkillGroup`, `SkillItem` |
| Change Hero aside text tones | `src/components/home/Hero.tsx` |
| Change project-card label tones | `src/components/projects/ProjectCard.tsx` |
| Change project filter count tones | `src/pages/Projects.tsx` |
| Change Contact inquiry numbering tones | `src/pages/Contact.tsx` |
| Change the report or work log | `README.md`, `AGENTS.md` |

## 6. What was not done

- No new skill, tool, framework, hardware, metric, project link, or case-study fact was added.
- No project imagery, project metrics, case-study copy, disclosure state, or review state was changed.
- No About toolkit or Experience/Education content was changed in this addendum.
- No mobile-navigation breakpoint change was needed; the existing 1024 px behavior passed.
- No new design token, dependency, route, page, contact form, backend, or integration was added.
- No resume PDF edit; `public/resume.pdf` remains 128,957 bytes.
- No screenshot was visually reviewed; validation used DOM geometry, computed contrast, link attributes, and keyboard focus. No screen-reader session was run.
- The Phase 2 audit covered the six primary routes; case-study routes were not re-audited, and no case-study content was changed.
- No commit, push, or deploy was performed.

## 7. Inputs still needed from the owner

1. Confirm the exact public `Frameworks & Tools` membership: PyTorch, OpenCV, Flask, RF-DETR, Linux, and Git.
2. Confirm Python should stay under `Python & Data Processing` rather than also appearing in `Frameworks & Tools`.
3. Confirm the final Skills group descriptions and the three-bullet homepage preview are the desired public wording.
4. Confirm the ten removed skills should remain off the public site, including `Docker & CI/CD` and `Data visualization`.
5. Confirm the contact/resume publication details are still approved for public display.
6. Review the rendered color changes when a visual pass is possible; this environment could verify computed contrast but not inspect a screenshot.

---

<a id="m4"></a>

# Milestone 4 Report — Personal projects, QA and deploy

Scope: add the finished personal projects, correct the ShelfScan case study, polish metadata, and publish the site. Workplan phases: 3 (case studies), 4 (QA and polish), 5 (deploy). Date: 2026-11-24.

## 1. What was built

- **Four new case studies** (Production RAG, Image Similarity Search, Garment Attributes, Glove Detection) with measured results and links to code, live demos and videos. Every figure matches the project's public README.
- **ShelfScan rewritten.** The old text described training detectors and a model comparison that never happened; it now describes the real system (pretrained DETR + DINOv2 grouping) and its measured evaluation.
- **Professional entries unchanged** (CervicalAI, Robotic Microscopy), as the owner decided.
- Cards show approved screenshots; featured grid of four (Production RAG, ShelfScan, CervicalAI, Robotic Microscopy).
- Skills extended with items backed by the public repos; About toolkit line aligned.
- Social preview image (`public/og-image.png`, 1200×630), canonical URL, `og:image`, per-page browser titles.
- **Deployed to GitHub Pages** at https://hasta-8.github.io/ (owner's choice over Cloudflare Pages): `.github/workflows/deploy.yml` runs typecheck, lint and build on every push to `main`; `scripts/route-pages.mjs` writes an `index.html` per route so every page answers 200.
- `README.md` is now a short public page; these reports moved to `docs/build-reports.md`.

## 2. Files changed

- **Created:** `src/data/case-studies/{production-rag,imgsimisearch,garment,glove}.ts`, `public/images/{production-rag,shelfscan,garment,glove}/*.jpg` (6 images), `public/og-image.png`, `.github/workflows/deploy.yml`, `scripts/route-pages.mjs`, new `README.md`.
- **Modified:** `src/data/projects.ts`, `src/data/case-studies/{index,shelfscan}.ts`, `src/data/skills.ts`, `src/pages/{About,Projects}.tsx`, `src/components/home/FeaturedProjects.tsx`, `src/components/projects/{ProjectVisual,StageFlow}.tsx`, `src/components/layout/ScrollToTop.tsx`, `index.html`, `AGENTS.md`.
- **Moved:** `README.md` → `docs/build-reports.md`, `task.md` → `docs/phase-2-tasks.md`.
- **Unchanged:** professional case studies, experience, education, profile, contact, resume, design system, workplan PDF (md5 `253d566663f1bc26d9cc501dd7c71f43`).

## 3. Content-integrity decisions

- Personal-project numbers are copied from each project's README; weaknesses are stated next to them (ShelfScan grouping F1 0.32, Glove bare-hand recall 0.51 on unseen scenes).
- Screenshots that contain Wikimedia Commons photos credit the photographer and licence in the evidence caption.
- Image Similarity Search has no public demo or video, so it links to the repository only.
- The professional cards still show "Case study draft"; flipping them to "reviewed" is the owner's call (`status` in `src/data/projects.ts`).

## 4. Validation evidence

| Check | Command | Result |
|---|---|---|
| Types | `npm run typecheck` | clean |
| Lint | `npm run lint` | 0 warnings, 0 errors |
| Build | `npm run build` | JS 376.92 kB (114.46 kB gzip), CSS 28.81 kB (6.01 kB gzip) |
| Layout, local preview | Playwright: 14 routes × 6 widths (1920–390) | 0 problems: no horizontal overflow, one `h1` per page, no console errors, no broken images |
| Deploy | GitHub Actions `deploy.yml` | success |
| Live status codes | `curl` | `/`, `/projects/`, `/projects/shelfscan`, `/about` → 200; `/nope` → 404 |
| Layout, live site | same Playwright audit on https://hasta-8.github.io | 0 problems |
| Project demos under the same domain | `curl` | `/ShelfScan/`, `/Garment_Detection_Project/`, `/glove-detection-yolov8/` → 200 |
| Workplan PDF | `md5sum` | `253d566663f1bc26d9cc501dd7c71f43` (unchanged) |

## 5. Where to make changes

| Goal | File |
|---|---|
| Add or edit a project, its metrics or links | `src/data/projects.ts` |
| Case-study text | `src/data/case-studies/<slug>.ts` |
| Featured projects on the home page | `featuredSlugs` in `src/data/projects.ts` |
| Project screenshot | `public/images/<slug>/`, then `image` in `projects.ts` |
| Page titles | `src/components/layout/ScrollToTop.tsx` |
| Deployment | `.github/workflows/deploy.yml`, `scripts/route-pages.mjs` |

## 6. Content and assets still needed (owner inputs)

- Whether to mark CervicalAI and Robotic Microscopy as reviewed (removes the "Case study draft" label).
- YouTube links for the Garment and Glove walkthroughs (currently on GitHub releases).
- Optional: a custom domain.

---

# Update: Image Similarity Search cover image (2026-11-24)

The Image Similarity Search card had no screenshot. Added `public/images/imgsimisearch/search.jpg`:
a real search in the app (CLIP ViT-B/32 + FAISS) against a 14-photo demo index built from openly
licensed Wikimedia Commons photos, with the query photo shown in the empty sixth grid cell.
The project's own dataset (private photos, no publishing licence) and the INRIA Holidays benchmark are
not shown. Credits are in `public/images/imgsimisearch/CREDITS.md`, and they are summarised in the case
study's new evidence entry.

| Check | Result |
|---|---|
| Typecheck, lint, build | pass |
| Layout audit, local preview (14 routes × 6 widths) | 0 problems |

## Follow-up: demo dataset replaced (2026-11-24)

The app's dataset was swapped for 100 openly licensed photos: Open Images V7 validation, 10 classes of birds
and animals, 10 each, no photos labelled with people, all CC BY 2.0 (fetched by the ImgSimiSearch repo's
`scripts/fetch_demo_dataset.py`). The index was rebuilt and promoted. The cover is now a zebra query (not in the
index): four zebras (0.91–0.86), then a giraffe (0.85). The "(MVP)" heading was removed from the app. Credits are in
`public/images/imgsimisearch/CREDITS.md`.
