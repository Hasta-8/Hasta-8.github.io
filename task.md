# Phase 2 — Brand Pages Completion Tasks

**Project:** `ai_ml_portfolio` · **Owner:** Debadri Chatterjee
**Workplan phase:** Phase 2 — Brand pages
**Status:** Mostly complete; Skills content/UX is the only remaining implementation gap. Remaining copy sign-offs are listed below.

## Current status

Implemented and validated:

- Homepage and current-role preview.
- About page, including the compact education summary.
- Experience & Education page with Aimil Ltd. and expanded MiMD Lab.
- Contact page, email/phone links, and resume access.
- Resume download backed by `public/resume.pdf`.
- Routing, responsive layouts, keyboard focus, and route-level overflow checks.
- README addenda for About, Contact, and Experience & Education.

The Skills page exists and is routed, but its content is still visibly provisional.

## Remaining implementation

### 1. Finalize skills data

Current state: 9 verified / 11 pending across five groups.

| Group | Verified / total | Pending items |
| --- | --- | --- |
| Machine Learning | 2 / 4 | Experiment tracking, Model distillation |
| Computer Vision | 4 / 5 | Image segmentation |
| Python & Software Engineering | 1 / 4 | Software engineering, Automated testing, Data pipelines |
| Deployment & MLOps | 2 / 4 | Model packaging, Docker & CI/CD |
| Data Tools | 0 / 3 | Dataset curation, Annotation tooling, Data visualization |

Recommended disposition, pending owner confirmation:

- Promote **Data pipelines** to verified — supported by the Aimil pipeline bullet and the MiMD computer-vision pipeline bullet.
- Remove the other 10 pending entries unless the owner can provide evidence.
- Optionally add confirmed tools such as **PyTorch**, **OpenCV**, and **Flask** in a “Frameworks & tools” group so Skills matches the About toolkit line.
- Do not invent evidence for Docker, CI/CD, model packaging, segmentation, distillation, experiment tracking, annotation tooling, or dataset curation.

### 2. Remove provisional Skills UI

- Update `src/pages/Skills.tsx` so it no longer describes “dashed entries” waiting for confirmation when no pending entries remain.
- Hide or remove the `confirmed / total` counters once everything is verified, or retain them only when pending items genuinely exist.
- Update `src/components/home/Expertise.tsx`; it reads the same `featuredSkillGroups`, so the homepage currently shows the same provisional counters and pending chips.
- Update or simplify `src/components/ui/SkillChip.tsx` if the pending variant is no longer used.

### 3. Align About with Skills

- About currently lists `Python · PyTorch · OpenCV · Linux · Git · edge deployment`.
- Either add these as confirmed Skills entries or trim the About line to the confirmed set.
- Keep both surfaces consistent; do not claim a tool in one place and omit it without reason in the other.

### 4. Accessibility and contrast pass

- Audit `/skills` and the homepage `#expertise` section at all target widths.
- The `text-ink-subtle` on `surface-card` pairing measured 4.49:1 on the Experience page, just below WCAG AA for small text. Skills uses the same pairing for counters/pending chips; switch those to `text-ink-muted` or remove them.
- Recheck keyboard focus for any remaining chips/links and confirm no new focus or contrast regressions.

### 5. Validate and document

- Run `npm run typecheck`, `npm run lint`, and `npm run build`.
- Preview on port 4173 and audit `/skills`, `/`, `/about`, `/experience`, and `/contact` at 1920 / 1440 / 1280 / 1024 / 768 / 390 px.
- Assert one `h1` per page, no horizontal overflow, no visible pending language, no console errors, and no failed requests.
- Append a **Skills** addendum under the current Milestone 3 report in `README.md`.
- Update the README addenda count from five to six and update the `AGENTS.md` work log.
- Confirm the CSS hash remains unchanged after documentation-only edits.

## Pending owner confirmations

These do not block Skills implementation unless a decision changes the visible copy.

1. **Skills:** which pending items are defensible, which should be removed, and whether to add a tools group.
2. **Aimil:** confirm the title, organization, dates, and three bullets are approved for public display.
3. **MiMD:** confirm `February 2026 – Present`, the five bullets, and the public tool/hardware names: Autoscope, Duet, NVIDIA Jetson Orin Nano, RF-DETR, and PyTorch.
4. **MiMD disclosure:** confirm those names may remain public even though the robotic-microscopy case study withholds runtime, accelerator, and motion-control details.
5. **Education:** confirm degree names, institution wording, dates, GPA 8.0/10, B.Sc. 70%, and the decision to omit the B.Sc. location.
6. **Homepage:** confirm whether the Experience preview should show all five MiMD bullets or a shorter snapshot.
7. **Contact:** confirm the phone number should remain publicly visible.
8. **Resume:** confirm `public/resume.pdf` is current and intended for public download.
9. **Navigation:** confirm the desktop navigation should switch to the mobile menu below 1024 px.
10. **About toolkit:** confirm the final public toolkit line.

## Out of scope for Phase 2

- Project imagery, case-study metrics, repository/demo links, and review-state flips belong to Phases 3–4.
- OG image and final SEO metadata belong to Phase 4.
- No resume PDF edit.
- No new route, backend, contact form, or dependency.
- No commit, push, or deploy without explicit approval.

## Likely files to change

- `src/data/skills.ts`
- `src/pages/Skills.tsx`
- `src/components/home/Expertise.tsx`
- `src/components/ui/SkillChip.tsx` (only if the pending variant is removed)
- `src/pages/About.tsx` (toolkit alignment)
- `README.md`
- `AGENTS.md`

## Phase 2 exit criteria

- All brand pages contain only confirmed public content; no visible “pending” or “awaiting confirmation” placeholders.
- Skills and homepage Expertise reflect the same confirmed capability set.
- About, Experience, Contact, and resume access remain intact.
- Typecheck, lint, build, route, responsive, contrast, and keyboard checks pass.
- Skills addendum exists in `README.md`; `AGENTS.md` work log is current.
- Workplan PDF remains unchanged: md5 `253d566663f1bc26d9cc501dd7c71f43`.
- Changes remain in the working tree; no commit has been created.

## Validation commands

```bash
npm run typecheck
npm run lint
npm run build
(setsid npx vite preview --port 4173 --host 127.0.0.1 > /tmp/opencode/preview.log 2>&1 &)
```

Stop the preview with:

```bash
ps aux | grep "[v]ite" | awk '{print $2}' | xargs -r kill
```
