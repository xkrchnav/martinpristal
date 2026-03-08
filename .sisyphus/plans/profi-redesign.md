# Professional Page Redesign — Move to Index + BKT Structure

## TL;DR

> **Quick Summary**: Prebudovať profesionálnu stránku Martina Přistala podľa štruktúry BKT Elektro, presunúť ju na index (`/`), pridať foto pás pod hero, rozdeliť služby na Silnoproud a Slaboproud, použiť novú hero fotku z Facebooku a odstrániť About sekciu.
> 
> **Deliverables**:
> - Nový `index.astro` s kompletnou profesionálnou stránkou
> - Nový komponent `PhotoStrip.astro`
> - Rozšírené štýly v `professional.css` pre foto pás
> - Zmazaný `professional.astro`
> - Hero s novou FB fotkou (martin_fb.jpg)
> 
> **Estimated Effort**: Medium
> **Parallel Execution**: YES - 3 waves
> **Critical Path**: Task 1 → Task 3 → Task 4 → Task 5 → Final Wave

---

## Context

### Original Request
Martin sa rozhodol pre profesionálnu šablónu. Chce ju mať ako hlavnú stránku (index). Kreatívna ostáva skrytá na `/creative`. Štruktúru chce obohatiť podľa BKT Elektro (bktelektro.cz/elektroinstalace-brno/) — detailnejšie služby rozdelené na silnoproud a slaboproud, foto pás referenčných prác pod hero. Logo len malé v headeri. About sekcia preč. Nová hero fotka z Facebooku (Martin na kopci).

### Interview Summary
**Key Discussions**:
- Index.astro: Bude priamo profesionálna stránka (nie landing s kartami)
- professional.astro: Zmazať kompletne
- creative.astro: Nechať as-is, bez odkazu z indexu
- Hero fotka: martin_fb.jpg (FB foto — Martin na kopci, flanelka, eye contact)
- Služby: 2 kategórie (Silnoproud + Slaboproud/Automatizácia), agent navrhne obsah
- Foto pás: Nový komponent POD hero sekciou, 4 referenčné fotky
- About sekcia: ODSTRÁNIŤ úplne
- Galéria: Nechať 8 aktuálnych fotiek
- Štýly: Oddelené (professional.css + creative.css)

**Research Findings**:
- BKT Elektro štruktúra: Hero → Foto grid → Intro text → Silnoproud tiles → Slaboproud tiles → CTA → Footer
- Aktuálna profesionálna: Hero → About → 3 Service Cards → Gallery → Contact → Footer
- 64 obrázkov v src/assets/, martin_fb.jpg stiahnutý z FB
- Komponenty používajú variant prop ('creative' | 'professional')
- CSS je variant-scoped cez .variant-professional / .variant-creative na body

### Metis Review
**Identified Gaps** (addressed):
- **Foto pás umiestnenie**: Potvrdené — nový komponent POD hero (bezpečné, nesahá na shared HeroSection)
- **Obsah služieb**: Agent navrhne podľa aktuálneho obsahu + BKT štruktúry, Martin skontroluje
- **About sekcia**: Odstrániť úplne (BKT-like flow)
- **BaseLayout variant**: MUSÍ sa nastaviť variant="professional" na index.astro (inak sa nenačíta CSS)
- **Header logo href**: Ostáva "/" čo je teraz správne (professional page JE /)
- **Zdieľaný HeroSection**: Nemodifikovať — foto pás je samostatný komponent
- **ServicesSection**: Použiť 2× inštanciu (silnoproud + slaboproud) bez modifikácie komponentu
- **Landing page styles**: Odstrániť všetky .landing* styles z index.astro
- **creative.astro regression**: Overiť že kreatívna stránka stále funguje po zmenách

---

## Work Objectives

### Core Objective
Presunúť profesionálnu stránku na index (/), obohatiť ju o BKT-style štruktúru (foto pás, dual služby kategórie) a nový hero portrét.

### Concrete Deliverables
- `src/pages/index.astro` — kompletná profesionálna stránka
- `src/components/PhotoStrip.astro` — nový komponent pre foto pás
- `src/styles/professional.css` — doplnené štýly pre foto pás
- Zmazaný `src/pages/professional.astro`

### Definition of Done
- [ ] `npx astro build` — exit code 0, žiadne errory
- [ ] `dist/index.html` existuje a obsahuje `variant-professional` body class
- [ ] `dist/index.html` obsahuje `martin_fb` v img src
- [ ] `dist/index.html` NEobsahuje `profil_profi` (starý hero)
- [ ] `dist/index.html` obsahuje 2 services sekcie (Silnoproud + Slaboproud)
- [ ] `dist/index.html` obsahuje foto pás obrázky
- [ ] `dist/creative/index.html` existuje a obsahuje `variant-creative`
- [ ] `dist/professional/` NEEXISTUJE
- [ ] `dist/index.html` NEobsahuje `.landing` class references

### Must Have
- Hero s martin_fb.jpg ako portrét
- Foto pás pod hero (4 referenčné fotky)
- Služby rozdelené na Silnoproud + Slaboproud (2 sekcie)
- Logo len v header (48px), nie v About
- Kreatívna stránka funkčná bez zmien
- Žiadny odkaz na /creative z indexu

### Must NOT Have (Guardrails)
- Žiadne modifikácie komponentov (HeroSection, AboutSection, ServicesSection, GallerySection, ContactSection, Header, Footer) — zmeny sú LEN na page-level v index.astro
- Žiadne zmeny creative.astro alebo creative.css
- Žiadne nové npm závislosti
- Žiadne AI-vymyslené kontaktné údaje (použiť existujúce: info@mpelectro.cz, +420 123 456 789)
- Žiadne About sekcie (úplne odstránená)
- Logo nesmie byť nikde veľké (len 48px v header)

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: NO
- **Automated tests**: NONE
- **Framework**: none
- **QA approach**: Build verification + Playwright screenshots

### QA Policy
Every task MUST include agent-executed QA scenarios.
Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

- **Frontend/UI**: Use Playwright (playwright skill) — Navigate, interact, assert DOM, screenshot
- **Build**: Use Bash — `npx astro build`, verify exit code and output files

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately — new component + CSS prep):
├── Task 1: Create PhotoStrip.astro component [quick]
├── Task 2: Add photo strip styles to professional.css [quick]

Wave 2 (After Wave 1 — main page rebuild):
├── Task 3: Rewrite index.astro as professional page (depends: 1, 2) [visual-engineering]

Wave 3 (After Wave 2 — cleanup + verification):
├── Task 4: Delete professional.astro (depends: 3) [quick]
├── Task 5: Full build verification + Playwright QA (depends: 3, 4) [unspecified-high]

Wave FINAL (After ALL tasks — independent review):
├── Task F1: Plan compliance audit (oracle)
├── Task F2: Code quality review (unspecified-high)
├── Task F3: Real manual QA (unspecified-high)
├── Task F4: Scope fidelity check (deep)

Critical Path: Task 1 → Task 3 → Task 4 → Task 5 → F1-F4
Parallel Speedup: ~40% faster than sequential (Wave 1 parallel, Wave 3 parallel)
Max Concurrent: 2 (Wave 1), 2 (Wave 3)
```

### Dependency Matrix

| Task | Depends On | Blocks |
|------|-----------|--------|
| 1    | —         | 3      |
| 2    | —         | 3      |
| 3    | 1, 2      | 4, 5   |
| 4    | 3         | 5      |
| 5    | 3, 4      | F1-F4  |

### Agent Dispatch Summary

- **Wave 1**: **2** — T1 → `quick`, T2 → `quick`
- **Wave 2**: **1** — T3 → `visual-engineering`
- **Wave 3**: **2** — T4 → `quick`, T5 → `unspecified-high`
- **FINAL**: **4** — F1 → `oracle`, F2 → `unspecified-high`, F3 → `unspecified-high`, F4 → `deep`

---

## TODOs

- [x] 1. Create PhotoStrip.astro Component

  **What to do**:
  - Create new file `src/components/PhotoStrip.astro`
  - Component accepts props: `images: Array<{src: ImageMetadata, alt: string}>`
  - Renders a horizontal strip/row of 4 images with consistent aspect ratio
  - Images should be responsive — 4 columns on desktop, 2 columns on mobile
  - Use `<Image>` from `astro:assets` for optimization (same pattern as GallerySection)
  - Each image should have `border-radius: 8px`, subtle shadow, and aspect-ratio ~16:10 or 3:2
  - Full-width section with reduced vertical padding (this is a visual accent, not a content section)
  - Component should use class names with `.photo-strip` prefix for styling in professional.css

  **Must NOT do**:
  - Do NOT add styles inside the component — all styles go in professional.css (Task 2)
  - Do NOT modify any existing components
  - Do NOT add `id` attribute (this is not a navigation target)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single file creation, follows existing component pattern exactly
  - **Skills**: []
    - No skills needed — straightforward Astro component
  - **Skills Evaluated but Omitted**:
    - `playwright`: Not needed — no visual verification in this task
    - `frontend-ui-ux`: Overkill for a single component file

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Task 2)
  - **Blocks**: Task 3
  - **Blocked By**: None (can start immediately)

  **References** (CRITICAL):

  **Pattern References**:
  - `src/components/GallerySection.astro:1-24` — Follow this exact pattern: import Image, accept typed props, render Image components in a grid. PhotoStrip is essentially a simplified GallerySection with 4 images in a row.

  **API/Type References**:
  - `src/components/GallerySection.astro:4-8` — Props interface pattern with ImageMetadata type

  **WHY Each Reference Matters**:
  - GallerySection shows the canonical Astro Image component usage pattern in this project — import path, width/height props, loading attribute. Follow this exactly.

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: PhotoStrip component file exists and is valid Astro
    Tool: Bash
    Preconditions: Task completed
    Steps:
      1. Run: cat src/components/PhotoStrip.astro
      2. Verify file contains: `import { Image } from 'astro:assets'`
      3. Verify file contains: `interface Props`
      4. Verify file contains: `images` in Props interface
      5. Verify file contains: `class="photo-strip"` or `class="photo-strip__` in HTML
      6. Verify file does NOT contain `<style>` tag (styles are in professional.css)
    Expected Result: File exists, has correct imports, props interface, class names, no inline styles
    Failure Indicators: File missing, wrong import path, missing props, inline styles present
    Evidence: .sisyphus/evidence/task-1-component-file.txt

  Scenario: Component follows project patterns
    Tool: Bash
    Preconditions: Task completed
    Steps:
      1. Compare structure against GallerySection.astro — same frontmatter pattern
      2. Verify Image component usage: `<Image src={...} alt={...} width={...} height={...} />`
      3. Verify .map() iteration over images array
    Expected Result: Consistent with existing component patterns
    Failure Indicators: Different import style, missing Image optimization, hardcoded values
    Evidence: .sisyphus/evidence/task-1-pattern-check.txt
  ```

  **Commit**: YES (groups with Task 2)
  - Message: `feat(components): add PhotoStrip component and styles`
  - Files: `src/components/PhotoStrip.astro`

- [x] 2. Add Photo Strip Styles to professional.css

  **What to do**:
  - Append new styles to `src/styles/professional.css` for the PhotoStrip component
  - All selectors MUST be prefixed with `.variant-professional` (follow existing CSS architecture)
  - Style `.variant-professional .photo-strip` — full-width section, minimal vertical padding (e.g., `var(--space-lg)` top/bottom)
  - Style `.variant-professional .photo-strip__grid` — CSS Grid, 4 columns on desktop (1024px+), 2 columns on tablet (640px+), 1 column on mobile
  - Style `.variant-professional .photo-strip__item` — overflow hidden, border-radius 8px, aspect-ratio 3/2, subtle shadow
  - Style `.variant-professional .photo-strip__item img` — width 100%, height 100%, object-fit cover
  - Optional hover effect: subtle scale(1.03) on image hover (matches gallery pattern)
  - Background should be `var(--color-bg)` (neutral, to separate from hero surface and services)

  **Must NOT do**:
  - Do NOT modify existing styles in professional.css — only APPEND new rules at the end
  - Do NOT use class names without `.variant-professional` prefix
  - Do NOT change any existing CSS variable values

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Append-only CSS addition, follows existing patterns exactly
  - **Skills**: []
    - No skills needed — CSS follows established project conventions
  - **Skills Evaluated but Omitted**:
    - `frontend-ui-ux`: Overkill — styling pattern is already established in the file

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Task 1)
  - **Blocks**: Task 3
  - **Blocked By**: None (can start immediately)

  **References** (CRITICAL):

  **Pattern References**:
  - `src/styles/professional.css:254-290` — Gallery section styles. Follow the EXACT same pattern: `.variant-professional .gallery__grid` → `.variant-professional .photo-strip__grid`. Same responsive breakpoints (640px, 1024px), same item styling pattern.
  - `src/styles/professional.css:1-10` — CSS variable usage pattern. Use the same `var(--color-*)` and `var(--space-*)` variables.
  - `src/styles/professional.css:216-252` — Service card pattern for reference on border-radius, shadow, hover transitions.

  **WHY Each Reference Matters**:
  - Gallery styles (254-290) are the closest existing pattern — same grid layout, same responsive approach, same image handling. Copy and adapt.
  - Variable usage (1-10) ensures consistency with theme system.
  - Service card styles show the project's hover/transition conventions.

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Photo strip styles appended correctly
    Tool: Bash
    Preconditions: Task completed
    Steps:
      1. Run: grep -c "photo-strip" src/styles/professional.css
      2. Verify at least 5 selectors containing "photo-strip" exist
      3. Verify ALL photo-strip selectors start with ".variant-professional"
      4. Run: grep "photo-strip" src/styles/professional.css | grep -v ".variant-professional" — should return 0 lines (all prefixed)
      5. Verify responsive breakpoints exist: grep "@media.*640px" and "@media.*1024px" within photo-strip section
    Expected Result: 5+ photo-strip selectors, all prefixed, responsive breakpoints present
    Failure Indicators: Missing prefix, no responsive styles, fewer than 5 selectors
    Evidence: .sisyphus/evidence/task-2-css-check.txt

  Scenario: No existing styles modified
    Tool: Bash
    Preconditions: Task completed
    Steps:
      1. Run: git diff src/styles/professional.css | head -50
      2. Verify only additions (lines starting with +), no deletions (lines starting with -)
      3. Verify additions are at the END of the file (after line 331)
    Expected Result: Only appended lines, no modifications to existing 331 lines
    Failure Indicators: Any deleted lines, modifications to existing styles
    Evidence: .sisyphus/evidence/task-2-css-diff.txt
  ```

  **Commit**: YES (groups with Task 1)
  - Message: `feat(components): add PhotoStrip component and styles`
  - Files: `src/styles/professional.css`

- [x] 3. Rewrite index.astro as Complete Professional Page

  **What to do**:
  - COMPLETELY REPLACE content of `src/pages/index.astro`
  - Follow the structure from professional.astro but with modifications:

  **Imports**:
  - Import BaseLayout, Header, Footer, HeroSection, ServicesSection, GallerySection, ContactSection, PhotoStrip
  - Import `martin_fb.jpg` from assets (NOT profil_profi.jpg) as hero image
  - Import 4 gallery images for PhotoStrip (select 4 most visually diverse from existing gallery set)
  - Import all 8 gallery images for gallery section (same as professional.astro)
  - Do NOT import AboutSection (removed)
  - Do NOT import logo for About section

  **Page Data (const arrays)**:
  - Define `silnoproudServices` array — Silnoproud category services. Agent proposes based on current content + BKT reference. Suggested items:
    - Kompletní elektroinstalace (rodinné domy, byty, novostavby)
    - Rekonstrukce a modernizace rozvodů
    - Montáže rozvaděčů, jističů a ochranných prvků
    - Připojení spotřebičů, revize a úpravy dle norem
    - Elektrické přípojky a rozvodné skříně
  - Define `slaboproudServices` array — Slaboproud / Automatizace category. Suggested items:
    - Průmyslová automatizace a PLC systémy
    - Datové rozvody a síťová infrastruktura
    - Chytré domácnosti a IoT řešení
    - Programování a servis výrobních linek
    - Příprava kabeláže pro kamerové a zabezpečovací systémy
  - Define `photoStripImages` array — 4 images for PhotoStrip component
  - Define `galleryImages` array — same 8 images as current professional.astro

  **Page Structure** (order of components):
  ```
  <BaseLayout title="Martin Přistal — MP Electro & Services" variant="professional">
    <Header variant="professional" />
    <HeroSection variant="professional" ... image={martinFb} ... />
    <PhotoStrip images={photoStripImages} />
    <ServicesSection variant="professional" title="Silnoproudé instalace" services={silnoproudServices} />
    <ServicesSection variant="professional" title="Slaboproud a automatizace" services={slaboproudServices} />
    <GallerySection variant="professional" title="Reference a realizace" images={galleryImages} />
    <ContactSection variant="professional" ... />
    <Footer variant="professional" />
  </BaseLayout>
  ```

  **Hero Content**:
  - Keep existing headline: "Profesionální elektroinstalace a průmyslová automatizace"
  - Keep existing subheadline (Ing. Martin Přistal & tým...)
  - Keep existing body text
  - Keep CTA: "Poptat nezávaznou konzultaci" → #contact
  - CHANGE image to martin_fb.jpg
  - CHANGE imageAlt to "Ing. Martin Přistal"

  **Services Content**:
  - First ServicesSection: title="Silnoproudé instalace", body="Kompletní elektroinstalace na klíč — od základních rozvodů až po komplexní instalace v novostavbách a rekonstrukcích."
  - Second ServicesSection: title="Slaboproud a automatizace", body="Moderní technologie a průmyslová řešení pro inteligentní budovy a výrobní provozy.", id attribute should be omitted (first section keeps id="services" from the component)
  - NOTE: The second ServicesSection will ALSO render with id="services" because ServicesSection.astro hardcodes `id="services"`. This needs to be addressed — either by:
    (a) Accepting duplicate IDs (not ideal but functional), OR
    (b) Making the first ServicesSection keep the id and the second one needs a workaround — wrap second in a div, or modify component to accept optional id prop.
    **Decision**: Accept duplicate IDs for now. The #services nav link will scroll to the FIRST services section (silnoproud), which is correct. This is a minor HTML validation issue, not a functional problem.

  **Contact Content**: Same as current professional.astro

  **REMOVE completely**:
  - All `.landing*` style block from current index.astro
  - All landing page HTML
  - AboutSection component usage
  - Logo import for About section
  - profil_profi.jpg import
  - Any reference to creative page link

  **Must NOT do**:
  - Do NOT modify any component files
  - Do NOT change the component props interfaces
  - Do NOT add inline `<style>` block (all styles are in professional.css + global.css)
  - Do NOT change contact details (use existing email/phone)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: This is the main visual/structural task — creating the full page layout, selecting images, composing the content structure. Needs design sensibility for photo selection and service content crafting.
  - **Skills**: [`playwright`]
    - `playwright`: Needed for visual verification of the final page at multiple viewports
  - **Skills Evaluated but Omitted**:
    - `frontend-ui-ux`: Category already covers visual engineering
    - `dev-browser`: playwright skill is sufficient

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 2 (sequential)
  - **Blocks**: Task 4, Task 5
  - **Blocked By**: Task 1, Task 2

  **References** (CRITICAL):

  **Pattern References**:
  - `src/pages/professional.astro:1-116` — THIS IS THE PRIMARY REFERENCE. The new index.astro is professional.astro with these changes: (1) martin_fb.jpg instead of profil_profi.jpg, (2) no AboutSection, (3) 2× ServicesSection instead of 1×, (4) add PhotoStrip between hero and services. Copy the import pattern, data structure pattern, and component usage pattern EXACTLY.
  - `src/pages/professional.astro:23-39` — Services data array format. Each service needs `{title, description, icon}`. Follow this format for both silnoproud and slaboproud arrays.
  - `src/pages/professional.astro:59-68` — Gallery images array format. Copy exactly.

  **API/Type References**:
  - `src/components/HeroSection.astro:4-13` — Props interface for HeroSection. Must provide: variant, headline, subheadline, body, ctaText, ctaHref, image, imageAlt.
  - `src/components/ServicesSection.astro:2-6` — Props interface for ServicesSection. Must provide: variant, title, body (optional), services array.
  - `src/components/PhotoStrip.astro` — Props interface (created in Task 1). Must provide: images array.

  **External References**:
  - BKT Elektro service structure: Silnoproud (5 items: kompletní elektroinstalace, rekonstrukce, montáže zásuvek/osvětlení/jističů, připojení spotřebičů, zajištění revize) + Slaboproud (5 items: datové racky, datové rozvody, internet/WiFi, videotelefony, příprava kabeláže). Use as structural inspiration, NOT copy content.

  **WHY Each Reference Matters**:
  - professional.astro is the SOURCE — we're essentially moving its content to index.astro with modifications. Following its pattern ensures consistency.
  - Component Props interfaces define the contract — wrong props = build error.
  - BKT structure shows the target layout flow — but Martin's content and services differ.

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Build succeeds with new index.astro
    Tool: Bash
    Preconditions: Tasks 1, 2 completed. index.astro rewritten.
    Steps:
      1. Run: npx astro build
      2. Verify exit code is 0
      3. Run: ls dist/index.html
      4. Verify dist/index.html exists
      5. Run: grep "variant-professional" dist/index.html
      6. Verify body has variant-professional class
    Expected Result: Build succeeds, output contains professional variant
    Failure Indicators: Build error, missing variant class, missing dist/index.html
    Evidence: .sisyphus/evidence/task-3-build.txt

  Scenario: Hero shows new FB photo
    Tool: Bash
    Preconditions: Build completed
    Steps:
      1. Run: grep -i "martin_fb" dist/index.html
      2. Verify at least one img src contains martin_fb (Astro hashes filenames, so look for the pattern)
      3. Run: grep -i "profil_profi" dist/index.html
      4. Verify NO matches (old hero image removed)
    Expected Result: martin_fb in HTML, profil_profi NOT in HTML
    Failure Indicators: profil_profi still referenced, martin_fb missing
    Evidence: .sisyphus/evidence/task-3-hero-image.txt

  Scenario: Two service sections present
    Tool: Bash
    Preconditions: Build completed
    Steps:
      1. Run: grep -c 'id="services"' dist/index.html
      2. Verify count is 2 (or at least check for both service section titles)
      3. Run: grep "Silnoproud" dist/index.html
      4. Run: grep "Slaboproud\|automatizace\|Automatizace" dist/index.html
      5. Verify both category headings present
    Expected Result: Two services sections with distinct category titles
    Failure Indicators: Only one services section, missing category title
    Evidence: .sisyphus/evidence/task-3-services.txt

  Scenario: Photo strip images present
    Tool: Bash
    Preconditions: Build completed
    Steps:
      1. Run: grep "photo-strip" dist/index.html
      2. Verify photo-strip class exists in output
      3. Count img tags within photo-strip section (should be 4)
    Expected Result: Photo strip with 4 images rendered
    Failure Indicators: Missing photo-strip, wrong number of images
    Evidence: .sisyphus/evidence/task-3-photo-strip.txt

  Scenario: No About section
    Tool: Bash
    Preconditions: Build completed
    Steps:
      1. Run: grep 'id="about"' dist/index.html
      2. Verify NO matches (About section removed)
      3. Run: grep "Kvalifikace" dist/index.html
      4. Verify NO matches (About section heading gone)
    Expected Result: No about section in output
    Failure Indicators: About section still present
    Evidence: .sisyphus/evidence/task-3-no-about.txt

  Scenario: No landing page remnants
    Tool: Bash
    Preconditions: Build completed
    Steps:
      1. Run: grep "landing" dist/index.html
      2. Verify NO matches for landing class or landing-related content
      3. Run: grep "/creative" dist/index.html
      4. Verify NO link to creative page
    Expected Result: Zero landing page content, zero creative links
    Failure Indicators: Any landing class or creative link found
    Evidence: .sisyphus/evidence/task-3-no-landing.txt

  Scenario: Creative page still works
    Tool: Bash
    Preconditions: Build completed
    Steps:
      1. Run: ls dist/creative/index.html
      2. Verify file exists
      3. Run: grep "variant-creative" dist/creative/index.html
      4. Verify creative variant class present
      5. Run: grep "Skončil jsem" dist/creative/index.html
      6. Verify creative hero headline present
    Expected Result: Creative page builds correctly, untouched content
    Failure Indicators: Creative page missing, wrong variant, content changed
    Evidence: .sisyphus/evidence/task-3-creative-check.txt

  Scenario: Visual verification at multiple viewports
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running (npx astro dev)
    Steps:
      1. Navigate to http://localhost:4321/
      2. Screenshot at 375px width → task-3-mobile.png
      3. Screenshot at 768px width → task-3-tablet.png
      4. Screenshot at 1440px width → task-3-desktop.png
      5. Verify hero section visible with Martin's photo
      6. Verify photo strip with 4 images below hero
      7. Verify 2 service sections visible
      8. Verify gallery with 8 images
      9. Navigate to http://localhost:4321/creative
      10. Screenshot at 1440px width → task-3-creative-desktop.png
      11. Verify creative page renders correctly (visual regression check)
    Expected Result: All pages render correctly at all viewports
    Failure Indicators: Broken layout, missing images, overlapping elements
    Evidence: .sisyphus/evidence/task-3-mobile.png, task-3-tablet.png, task-3-desktop.png, task-3-creative-desktop.png
  ```

  **Evidence to Capture:**
  - [ ] Build log: task-3-build.txt
  - [ ] Image checks: task-3-hero-image.txt
  - [ ] Services check: task-3-services.txt
  - [ ] Photo strip check: task-3-photo-strip.txt
  - [ ] No about check: task-3-no-about.txt
  - [ ] No landing check: task-3-no-landing.txt
  - [ ] Creative check: task-3-creative-check.txt
  - [ ] Screenshots: task-3-mobile.png, task-3-tablet.png, task-3-desktop.png, task-3-creative-desktop.png

  **Commit**: YES
  - Message: `feat(pages): replace index landing with professional page`
  - Files: `src/pages/index.astro`
  - Pre-commit: `npx astro build`

- [x] 4. Delete professional.astro

  **What to do**:
  - Delete file `src/pages/professional.astro`
  - This removes the `/professional` route entirely
  - Verify build still succeeds after deletion

  **Must NOT do**:
  - Do NOT delete any other files
  - Do NOT modify any import statements in other files (no file imports professional.astro)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single file deletion + build verification
  - **Skills**: []
  - **Skills Evaluated but Omitted**:
    - All: Not needed for file deletion

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 3 (sequential after Task 3)
  - **Blocks**: Task 5
  - **Blocked By**: Task 3

  **References**:

  **Pattern References**:
  - `src/pages/professional.astro` — File to delete. Verify no other file imports from it.

  **WHY Each Reference Matters**:
  - Must verify no import dependencies before deletion.

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: professional.astro deleted and build succeeds
    Tool: Bash
    Preconditions: Task 3 completed, new index.astro working
    Steps:
      1. Run: rm src/pages/professional.astro
      2. Run: npx astro build
      3. Verify exit code is 0
      4. Run: ls dist/professional/ 2>&1
      5. Verify "No such file or directory" or directory doesn't exist
      6. Run: ls dist/index.html
      7. Verify index.html still exists
      8. Run: ls dist/creative/index.html
      9. Verify creative still exists
    Expected Result: Build succeeds, no /professional route, / and /creative intact
    Failure Indicators: Build error, professional route still exists
    Evidence: .sisyphus/evidence/task-4-delete-check.txt

  Scenario: No dangling references to professional.astro
    Tool: Bash
    Preconditions: File deleted
    Steps:
      1. Run: grep -r "professional.astro" src/ --include="*.astro" --include="*.ts"
      2. Verify 0 matches (no imports referencing deleted file)
    Expected Result: Zero references to professional.astro in codebase
    Failure Indicators: Any file still importing/referencing professional.astro
    Evidence: .sisyphus/evidence/task-4-no-references.txt
  ```

  **Commit**: YES
  - Message: `chore(cleanup): remove professional.astro, now served at /`
  - Files: `src/pages/professional.astro` (deletion)
  - Pre-commit: `npx astro build`

- [x] 5. Full Build Verification + Playwright QA

  **What to do**:
  - Run complete build verification
  - Take Playwright screenshots at 3 viewports (375px, 768px, 1440px) for both `/` and `/creative`
  - Verify all anchor links work (#hero, #about won't exist, #services, #gallery, #contact)
  - Verify Header navigation links scroll to correct sections
  - Verify Header logo from `/creative` navigates to `/` (now professional page)
  - Test mobile hamburger menu opens and links work
  - Capture all evidence

  **Must NOT do**:
  - Do NOT modify any code — this is verification only
  - Do NOT create fix commits — report issues back

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Comprehensive multi-viewport QA requiring careful attention
  - **Skills**: [`playwright`]
    - `playwright`: Required for browser automation, screenshots, and interaction testing
  - **Skills Evaluated but Omitted**:
    - `dev-browser`: playwright skill provides same capability more directly

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 3 (after Task 4)
  - **Blocks**: Final Verification Wave
  - **Blocked By**: Task 3, Task 4

  **References**:

  **Pattern References**:
  - `src/components/Header.astro:25-31` — Navigation links to verify: #about, #services, #gallery, #contact. NOTE: #about will NOT exist anymore (About section removed). Header still has the link. This is a known issue — the agent should report it but not modify Header.astro (shared component).

  **WHY Each Reference Matters**:
  - Header nav defines which anchor links to test. The #about link pointing to nothing is a known regression that needs to be flagged.

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Full page renders correctly on desktop
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running (npx astro dev), all tasks 1-4 completed
    Steps:
      1. Navigate to http://localhost:4321/
      2. Set viewport to 1440x900
      3. Wait for page load
      4. Verify h1 contains "Profesionální elektroinstalace"
      5. Verify hero image is visible (img in .hero section)
      6. Scroll to photo strip section — verify 4 images visible
      7. Scroll to first services section — verify "Silnoproud" heading
      8. Scroll to second services section — verify "Slaboproud" or "automatizace" heading
      9. Scroll to gallery — verify 8 images
      10. Scroll to contact — verify email and phone visible
      11. Full-page screenshot → task-5-desktop-full.png
    Expected Result: Complete professional page with all sections, correct content
    Failure Indicators: Missing sections, wrong headings, broken images
    Evidence: .sisyphus/evidence/task-5-desktop-full.png

  Scenario: Mobile responsive layout
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:4321/
      2. Set viewport to 375x812 (iPhone-like)
      3. Verify hero has stacked layout (text above, image below)
      4. Verify photo strip shows 1-2 columns (not 4)
      5. Verify service cards stack vertically
      6. Full-page screenshot → task-5-mobile-full.png
      7. Click hamburger menu
      8. Verify nav links appear
      9. Screenshot with menu open → task-5-mobile-menu.png
    Expected Result: Fully responsive, readable, navigation works
    Failure Indicators: Horizontal scroll, overlapping content, broken menu
    Evidence: .sisyphus/evidence/task-5-mobile-full.png, task-5-mobile-menu.png

  Scenario: Creative page zero regression
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:4321/creative
      2. Set viewport to 1440x900
      3. Verify h1 contains "Skončil jsem jako pěšák"
      4. Verify hero has dark background with overlay image
      5. Verify About section exists with "VUT" text
      6. Full-page screenshot → task-5-creative-full.png
    Expected Result: Creative page identical to original, no changes
    Failure Indicators: Any visual difference, missing content, wrong styles
    Evidence: .sisyphus/evidence/task-5-creative-full.png

  Scenario: Navigation anchor links work
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running, on http://localhost:4321/
    Steps:
      1. Click "#services" nav link in header
      2. Verify page scrolls to services section
      3. Click "#gallery" nav link
      4. Verify page scrolls to gallery section
      5. Click "#contact" nav link
      6. Verify page scrolls to contact section
      7. NOTE: "#about" link will scroll nowhere (About section removed) — document this as known issue, do NOT fix Header.astro
    Expected Result: services, gallery, contact anchors work. #about is a known non-functional link.
    Failure Indicators: Anchor links don't scroll, page errors on click
    Evidence: .sisyphus/evidence/task-5-nav-anchors.txt

  Scenario: Header logo from creative navigates to professional
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:4321/creative
      2. Click header logo (a.header__logo)
      3. Verify URL is now http://localhost:4321/
      4. Verify h1 contains "Profesionální elektroinstalace" (landed on professional page)
    Expected Result: Logo navigates from creative to professional (index)
    Failure Indicators: Wrong URL, 404, still on creative page
    Evidence: .sisyphus/evidence/task-5-logo-nav.txt
  ```

  **Evidence to Capture:**
  - [ ] task-5-desktop-full.png
  - [ ] task-5-mobile-full.png
  - [ ] task-5-mobile-menu.png
  - [ ] task-5-creative-full.png
  - [ ] task-5-nav-anchors.txt
  - [ ] task-5-logo-nav.txt

  **Commit**: NO (verification only)

---

## Final Verification Wave (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Rejection → fix → re-run.

- [x] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. For each "Must Have": verify implementation exists (read file, run command). For each "Must NOT Have": search codebase for forbidden patterns — reject with file:line if found. Check evidence files exist in .sisyphus/evidence/. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [x] F2. **Code Quality Review** — `unspecified-high`
  Run `npx astro build`. Review all changed files for: `as any`/`@ts-ignore`, empty catches, console.log in prod, commented-out code, unused imports. Check AI slop: excessive comments, over-abstraction, generic names (data/result/item/temp). Verify professional.css additions follow existing pattern (.variant-professional prefix).
  Output: `Build [PASS/FAIL] | Files [N clean/N issues] | VERDICT`

- [x] F3. **Real Manual QA** — `unspecified-high` (+ `playwright` skill)
  Start dev server. Execute EVERY QA scenario from EVERY task — follow exact steps, capture evidence. Test cross-task integration: photo strip renders between hero and services, services have 2 categories, hero shows martin_fb.jpg. Take screenshots at 375px, 768px, 1440px for both `/` and `/creative`. Save to `.sisyphus/evidence/final-qa/`.
  Output: `Scenarios [N/N pass] | Integration [N/N] | Edge Cases [N tested] | VERDICT`

- [x] F4. **Scope Fidelity Check** — `deep`
  For each task: read "What to do", read actual file changes. Verify 1:1 — everything in spec was built (no missing), nothing beyond spec was built (no creep). Check creative.astro and creative.css are COMPLETELY UNTOUCHED (diff should be empty). Check Header.astro, HeroSection.astro, AboutSection.astro, ServicesSection.astro — all UNTOUCHED. Flag any unaccounted changes.
  Output: `Tasks [N/N compliant] | Untouched files [CLEAN/N issues] | VERDICT`

---

## Commit Strategy

- **Commit 1** (after Task 1+2): `feat(components): add PhotoStrip component and styles` — PhotoStrip.astro, professional.css
- **Commit 2** (after Task 3): `feat(pages): replace index landing with professional page` — index.astro
- **Commit 3** (after Task 4): `chore(cleanup): remove professional.astro, now served at /` — delete professional.astro

---

## Success Criteria

### Verification Commands
```bash
npx astro build  # Expected: exit code 0, no errors
grep -l "variant-professional" dist/index.html  # Expected: match found
grep -l "martin_fb" dist/index.html  # Expected: match found
grep -L "profil_profi" dist/index.html  # Expected: match found (file does NOT contain)
ls dist/creative/index.html  # Expected: file exists
ls dist/professional/  # Expected: No such directory
```

### Final Checklist
- [ ] All "Must Have" present
- [ ] All "Must NOT Have" absent
- [ ] Build succeeds
- [ ] Playwright screenshots captured at 3 viewports for / and /creative
- [ ] Creative page identical to before (zero regression)
