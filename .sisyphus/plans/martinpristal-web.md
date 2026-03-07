# Martin Přistal — Two-Variant Astro Website

## TL;DR

> **Quick Summary**: Build a professional Astro website for Martin Přistal (electrician/industrial automation) with two design variants — Creative (`/creative`) and Professional (`/professional`) — plus a landing page at `/`. Czech language, auto dark/light mode via CSS `prefers-color-scheme`, deployed to Cloudflare Workers.
> 
> **Deliverables**:
> - Landing page at `/` linking to both variants
> - Creative variant at `/creative` — bold, energetic, storytelling-driven (dark aesthetic, lime green accents)
> - Professional variant at `/professional` — authoritative, structured, B2B-optimized (light aesthetic, navy blue)
> - Auto dark/light mode via CSS custom properties + `prefers-color-scheme`
> - Optimized images via Astro `<Image>` component
> - Clean architecture: separate CSS files, reusable components, shared layout
> 
> **Estimated Effort**: Medium
> **Parallel Execution**: YES — 4 waves
> **Critical Path**: Task 1 (CSS) → Task 2 (Layout) → Tasks 3-8 (Components) → Tasks 9-11 (Pages) → Tasks 12-13 (Build/Deploy)

---

## Context

### Original Request
User wants a professional Astro website for Martin Přistal's electrical services business. Two design variants (Creative and Professional) accessible via separate URLs. Czech language. Auto dark/light mode. Deployed to Cloudflare Workers.

### Interview Summary
**Key Discussions**:
- **Two variants via URL**: `/creative` (Variant A — bold storytelling) and `/professional` (Variant B — B2B authoritative), plus landing at `/`
- **Czech language**: All content in Czech
- **Dark mode**: Auto-detection via CSS `prefers-color-scheme` — no JS toggle
- **Architecture**: Separate CSS files in `src/styles/`, separate components in `src/components/`, Astro best practices
- **Images**: Use `<Image>` from `astro:assets`, images already in `src/assets/`
- **No tests**: User explicitly declined Playwright and unit tests
- **Deployment**: Cloudflare Workers (wrangler.toml already configured)

**Research Findings**:
- **INSTRUCTIONS.md**: Complete copywriting spec for both variants with exact Czech headlines, section content, and design direction
- **Logo analysis**: 400x400 navy background, white "MP" serif monogram, lime green divider, "Electro & Services" sans-serif
- **Image inventory**: 64 images — key profile shots analyzed, 50+ electrical work photos available for gallery
- **Astro docs**: CSS imports in frontmatter, `<Image>` component for optimization, scoped styles, `define:vars` for CSS custom properties
- **Brand colors**: Navy `#0B132B`, Lime Green `#C0D667`, White `#FFFFFF`

---

## Work Objectives

### Core Objective
Build a complete two-variant Astro website with Czech content following the INSTRUCTIONS.md spec, auto dark/light mode, optimized images, and clean component architecture.

### Concrete Deliverables
- `src/styles/global.css` — CSS reset, custom properties, dark/light mode
- `src/styles/creative.css` — Creative variant styles
- `src/styles/professional.css` — Professional variant styles
- `src/layouts/BaseLayout.astro` — Shared HTML head, meta tags, font loading
- `src/components/Header.astro` — Navigation with logo
- `src/components/Footer.astro` — Footer with contact info
- `src/components/HeroSection.astro` — Hero with variant-specific content
- `src/components/AboutSection.astro` — About/Story section
- `src/components/ServicesSection.astro` — Services listing
- `src/components/GallerySection.astro` — Photo gallery of electrical work
- `src/components/ContactSection.astro` — CTA / contact section
- `src/pages/index.astro` — Landing page
- `src/pages/creative.astro` — Creative variant page
- `src/pages/professional.astro` — Professional variant page

### Definition of Done
- [ ] `npm run build` succeeds with zero errors
- [ ] Landing page at `/` renders with links to both variants
- [ ] `/creative` renders full Creative variant with all sections
- [ ] `/professional` renders full Professional variant with all sections
- [ ] Dark mode auto-activates when browser prefers dark color scheme
- [ ] All images load via Astro `<Image>` component (WebP optimization)
- [ ] All text content is in Czech language

### Must Have
- Czech language for all visible text
- Two distinct visual designs matching INSTRUCTIONS.md spec
- Auto dark/light mode via CSS `prefers-color-scheme`
- Astro `<Image>` component for all images
- Separate CSS files (not inline styles)
- Reusable Astro components
- Responsive design (mobile + desktop)
- Working Cloudflare Workers deployment

### Must NOT Have (Guardrails)
- No JavaScript for dark mode toggle — CSS-only via `prefers-color-scheme`
- No Playwright or unit tests
- No backend/API — contact is mailto: link only
- No excessive comments or JSDoc (AI slop)
- No `as any` or `@ts-ignore` in TypeScript
- No third-party CSS frameworks (Tailwind, Bootstrap) — custom CSS only
- No unused imports or dead code
- No English text in user-facing content (except brand name "MP Electro & Services")

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: NO
- **Automated tests**: None (user explicitly declined)
- **Framework**: None

### QA Policy
Every task includes agent-executed QA scenarios. Evidence saved to `.sisyphus/evidence/`.

- **Frontend/UI**: Use `dev-browser` skill — Navigate pages, verify content renders, check responsive layout, screenshot
- **Build verification**: Use Bash — `npm run build`, check for errors
- **CSS verification**: Use Bash — Check CSS file existence and content patterns

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Foundation — CSS + Layout):
├── Task 1: Global CSS with dark/light mode [quick]
├── Task 2: Creative variant CSS [quick]
├── Task 3: Professional variant CSS [quick]
└── Task 4: BaseLayout component [quick]

Wave 2 (Components — ALL parallel, depend on Wave 1):
├── Task 5: Header component (depends: 4) [visual-engineering]
├── Task 6: Footer component (depends: 4) [visual-engineering]
├── Task 7: HeroSection component (depends: 4) [visual-engineering]
├── Task 8: AboutSection component (depends: 4) [visual-engineering]
├── Task 9: ServicesSection component (depends: 4) [visual-engineering]
├── Task 10: GallerySection component (depends: 4) [visual-engineering]
└── Task 11: ContactSection component (depends: 4) [visual-engineering]

Wave 3 (Pages — assemble components):
├── Task 12: Landing page index.astro (depends: 5, 6) [visual-engineering]
├── Task 13: Creative variant page (depends: 5-11, 1-2) [visual-engineering]
└── Task 14: Professional variant page (depends: 5-11, 1, 3) [visual-engineering]

Wave 4 (Verification + Deploy):
├── Task 15: Build verification + fix any errors (depends: 12-14) [quick]
└── Task 16: Final visual QA of both variants (depends: 15) [visual-engineering]

Wave FINAL (Independent review, 4 parallel):
├── Task F1: Plan compliance audit (oracle)
├── Task F2: Code quality review (unspecified-high)
├── Task F3: Real manual QA (unspecified-high)
└── Task F4: Scope fidelity check (deep)

Critical Path: Task 1 → Task 4 → Task 7 → Task 13 → Task 15 → F1-F4
Parallel Speedup: ~65% faster than sequential
Max Concurrent: 7 (Wave 2)
```

### Dependency Matrix

| Task | Depends On | Blocks |
|------|-----------|--------|
| 1 (Global CSS) | — | 4, 13, 14 |
| 2 (Creative CSS) | — | 13 |
| 3 (Professional CSS) | — | 14 |
| 4 (BaseLayout) | 1 | 5-14 |
| 5 (Header) | 4 | 12-14 |
| 6 (Footer) | 4 | 12-14 |
| 7 (HeroSection) | 4 | 13, 14 |
| 8 (AboutSection) | 4 | 13, 14 |
| 9 (ServicesSection) | 4 | 13, 14 |
| 10 (GallerySection) | 4 | 13, 14 |
| 11 (ContactSection) | 4 | 13, 14 |
| 12 (Landing page) | 5, 6 | 15 |
| 13 (Creative page) | 1-2, 5-11 | 15 |
| 14 (Professional page) | 1, 3, 5-11 | 15 |
| 15 (Build verify) | 12-14 | 16, F1-F4 |
| 16 (Visual QA) | 15 | F1-F4 |

### Agent Dispatch Summary

- **Wave 1**: **4 tasks** — T1-T3 → `quick`, T4 → `quick`
- **Wave 2**: **7 tasks** — T5-T11 → `visual-engineering`
- **Wave 3**: **3 tasks** — T12-T14 → `visual-engineering`
- **Wave 4**: **2 tasks** — T15 → `quick`, T16 → `visual-engineering`
- **FINAL**: **4 tasks** — F1 → `oracle`, F2 → `unspecified-high`, F3 → `unspecified-high`, F4 → `deep`

---

## TODOs

> Implementation tasks follow. EVERY task has: Recommended Agent Profile + Parallelization + QA Scenarios.
> No Playwright testing — QA uses dev-browser skill for visual verification where needed.

- [ ] 1. Global CSS — Reset, Custom Properties, Dark/Light Mode

  **What to do**:
  - Create `src/styles/global.css` with:
    - Modern CSS reset (box-sizing, margin reset, smooth scrolling, font smoothing)
    - `:root` block defining all CSS custom properties for light mode defaults:
      - `--color-navy: #0B132B`
      - `--color-white: #FFFFFF`
      - `--color-lime: #C0D667`
      - `--color-bg: #FFFFFF` (light default)
      - `--color-text: #0B132B` (light default)
      - `--color-surface: #F5F5F5` (light default)
      - `--color-border: #E0E0E0` (light default)
      - Typography variables: `--font-heading`, `--font-body` (use system font stack)
      - Spacing variables: `--space-xs` through `--space-3xl`
      - Container max-width: `--container-max: 1200px`
    - `@media (prefers-color-scheme: dark)` block overriding:
      - `--color-bg: #0B132B` (navy)
      - `--color-text: #F5F5F5`
      - `--color-surface: #1C2541`
      - `--color-border: #2A3A5C`
    - Base element styles using variables: `body { background: var(--color-bg); color: var(--color-text); }`
    - `.container` utility class (max-width, auto margin, padding)
    - Basic responsive typography (clamp-based)

  **Must NOT do**:
  - No JavaScript for dark mode — CSS-only
  - No Tailwind or CSS framework imports
  - No over-engineering — keep it simple, let variant CSS files add specificity

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single CSS file creation with well-defined requirements, straightforward implementation
  - **Skills**: []
    - No special skills needed for CSS authoring
  - **Skills Evaluated but Omitted**:
    - `frontend-ui-ux`: Not needed — this is pure CSS foundation, no design decisions
    - `playwright`: Explicitly excluded by user

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 2, 3, 4)
  - **Blocks**: Tasks 4, 13, 14
  - **Blocked By**: None (can start immediately)

  **References**:

  **Pattern References**:
  - `INSTRUCTIONS.md:1-88` — Full design spec, brand colors (#0B132B navy, #C0D667 lime green), variant-specific color guidance

  **API/Type References**:
  - None — pure CSS

  **External References**:
  - Astro CSS docs: Import CSS in component frontmatter with `import '../styles/global.css'` — this is how BaseLayout will consume this file
  - `prefers-color-scheme` MDN docs for dark mode media query syntax

  **WHY Each Reference Matters**:
  - `INSTRUCTIONS.md` provides the exact brand colors and both variant color palettes — these must be the source for all CSS custom property values

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Global CSS file exists with correct structure
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: cat src/styles/global.css
      2. Assert: File contains `:root {` block with `--color-navy: #0B132B`
      3. Assert: File contains `@media (prefers-color-scheme: dark)` block
      4. Assert: File contains `--color-bg`, `--color-text`, `--color-surface` in both light and dark blocks
      5. Assert: File contains `body {` with `var(--color-bg)` and `var(--color-text)`
      6. Assert: File does NOT contain any JavaScript or `<script>` tags
    Expected Result: All CSS custom properties defined for both light and dark modes
    Failure Indicators: Missing dark mode media query, hardcoded colors instead of variables
    Evidence: .sisyphus/evidence/task-1-global-css-structure.txt

  Scenario: No forbidden patterns in CSS
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: grep -c "tailwind\|bootstrap\|@import.*framework" src/styles/global.css
      2. Assert: Count is 0
    Expected Result: Zero matches for third-party framework references
    Evidence: .sisyphus/evidence/task-1-no-frameworks.txt
  ```

  **Commit**: YES (groups with Wave 1)
  - Message: `feat(styles): add CSS foundation with dark/light mode and variant styles`
  - Files: `src/styles/global.css`
  - Pre-commit: `npm run build`

- [ ] 2. Creative Variant CSS

  **What to do**:
  - Create `src/styles/creative.css` with:
    - Creative variant color overrides scoped to `.variant-creative`:
      - Default (light mode): Dark-themed aesthetic as described in INSTRUCTIONS.md — navy background with lime green accents. Override `--color-bg: #0B132B`, `--color-text: #F5F5F5`, `--color-accent: #C0D667`
      - Dark mode override for creative variant (already dark-themed, so minimal changes — maybe slightly different surface color)
    - Bold typography styles: larger headings, impactful font weights
    - Hero section styling for creative variant: full-width, dramatic, overlay effects for hero image
    - Section-specific styles: story-driven about section, energetic service cards
    - Animation/transition styles: subtle entrance animations (CSS-only, `@keyframes` or `transition`)
    - Gallery grid for creative variant (dynamic, asymmetric feel)
    - Mobile responsive adjustments for creative-specific styles

  **Must NOT do**:
  - No JavaScript animations — CSS transitions/keyframes only
  - No duplicate reset/base styles — those belong in global.css
  - No hardcoded colors — use and override CSS custom properties

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single CSS file with clear design direction from INSTRUCTIONS.md
  - **Skills**: []
  - **Skills Evaluated but Omitted**:
    - `frontend-ui-ux`: Could help but the design direction is already specified in INSTRUCTIONS.md — no design decisions needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 3, 4)
  - **Blocks**: Task 13
  - **Blocked By**: None (can start immediately)

  **References**:

  **Pattern References**:
  - `INSTRUCTIONS.md:5-50` (approx) — VARIANT_A_CREATIVE section: "Odvážná, energická, storytellingová", dark mode default, lime green accents, bold typography, hero headline "Skončil jsem jako pěšák v cizině. Teď tvořím energii doma."

  **External References**:
  - CSS `@keyframes` for subtle entrance animations
  - CSS Grid / Flexbox for gallery layout

  **WHY Each Reference Matters**:
  - `INSTRUCTIONS.md` VARIANT_A section defines the exact visual tone: dark aesthetic, lime green, bold — these must drive every style choice in this file

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Creative CSS file exists with variant-specific styles
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: cat src/styles/creative.css
      2. Assert: File contains `.variant-creative` scoped styles
      3. Assert: File contains `--color-accent: #C0D667` or similar lime green reference
      4. Assert: File contains hero section styles
      5. Assert: File does NOT contain CSS reset (that's in global.css)
    Expected Result: Creative variant CSS with dark aesthetic and lime green accents
    Failure Indicators: Missing variant scoping, duplicate reset styles, no accent color
    Evidence: .sisyphus/evidence/task-2-creative-css.txt
  ```

  **Commit**: YES (groups with Wave 1)
  - Message: `feat(styles): add CSS foundation with dark/light mode and variant styles`
  - Files: `src/styles/creative.css`

- [ ] 3. Professional Variant CSS

  **What to do**:
  - Create `src/styles/professional.css` with:
    - Professional variant color overrides scoped to `.variant-professional`:
      - Default (light mode): Clean, light aesthetic per INSTRUCTIONS.md — white/light gray background, navy text, structured layout
      - Dark mode override: Invert to dark background with maintained navy/white contrast
    - Authoritative typography: structured, consistent sizing, professional serif/sans-serif pairing if appropriate
    - Hero section styling: structured, clean, corporate feel, profile image with professional framing
    - Section-specific styles: expertise cards, structured service listing, credential highlights
    - Grid layouts for services (clean, organized, B2B feel)
    - Gallery grid (uniform, professional — even grid, no asymmetry)
    - Mobile responsive adjustments

  **Must NOT do**:
  - No JavaScript — CSS only
  - No duplicate reset/base styles
  - No hardcoded colors — use CSS custom properties

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single CSS file, clear design direction from INSTRUCTIONS.md
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2, 4)
  - **Blocks**: Task 14
  - **Blocked By**: None (can start immediately)

  **References**:

  **Pattern References**:
  - `INSTRUCTIONS.md:50-88` (approx) — VARIANT_B_PROFESSIONAL section: "Autoritativní, strukturovaný, B2B", clean/light aesthetic, navy blue typography, hero headline "Profesionální elektroinstalace a průmyslová automatizace."

  **WHY Each Reference Matters**:
  - `INSTRUCTIONS.md` VARIANT_B section defines exact visual tone: authoritative, structured, B2B-optimized — drives all design choices

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Professional CSS file exists with variant-specific styles
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: cat src/styles/professional.css
      2. Assert: File contains `.variant-professional` scoped styles
      3. Assert: File contains structured, clean layout styles
      4. Assert: File does NOT contain CSS reset
    Expected Result: Professional variant CSS with clean light aesthetic and navy typography
    Failure Indicators: Missing variant scoping, dark-first aesthetic (should be light-first), duplicate reset
    Evidence: .sisyphus/evidence/task-3-professional-css.txt
  ```

  **Commit**: YES (groups with Wave 1)
  - Message: `feat(styles): add CSS foundation with dark/light mode and variant styles`
  - Files: `src/styles/professional.css`

- [ ] 4. BaseLayout Component

  **What to do**:
  - Create `src/layouts/BaseLayout.astro` with:
    - Astro component with props: `title: string`, `description: string`, `variant?: 'creative' | 'professional'`
    - `<html lang="cs">` for Czech language
    - `<head>` with: charset, viewport meta, title from prop, description meta, favicon reference
    - Import `global.css` in frontmatter: `import '../styles/global.css'`
    - Conditionally import variant CSS based on `variant` prop:
      - If variant === 'creative': import `../styles/creative.css`
      - If variant === 'professional': import `../styles/professional.css`
    - `<body>` with `class:list` applying variant class: `variant-creative` or `variant-professional`
    - `<slot />` for page content
    - No `<script>` tags for dark mode — CSS handles it

  **Must NOT do**:
  - No inline styles in the layout — use CSS files
  - No JavaScript for theming
  - No hardcoded content — everything via props or slot

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single component file following standard Astro layout pattern
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2, 3)
  - **Blocks**: Tasks 5-14 (all components and pages)
  - **Blocked By**: Task 1 (needs global.css to exist for import)

  **References**:

  **Pattern References**:
  - `src/pages/index.astro` — Current bare template showing Astro page structure (replace content, keep structural patterns)

  **API/Type References**:
  - Astro `Props` interface pattern: `interface Props { title: string; }`
  - Astro `class:list` directive for conditional classes

  **External References**:
  - Astro Layout docs: Layouts use `<slot />` for content injection
  - Astro CSS imports: `import '../styles/file.css'` in frontmatter

  **WHY Each Reference Matters**:
  - `src/pages/index.astro` shows the existing minimal Astro page structure — layout should wrap this pattern
  - Astro docs confirm `import` in frontmatter is the correct way to load CSS files

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: BaseLayout component exists with correct structure
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: cat src/layouts/BaseLayout.astro
      2. Assert: File contains `<html lang="cs">`
      3. Assert: File contains `import '../styles/global.css'`
      4. Assert: File contains `<slot />`
      5. Assert: File contains `variant` prop handling with `class:list`
      6. Assert: File does NOT contain `<script>` tags
    Expected Result: Clean Astro layout with Czech lang, CSS imports, variant class support
    Failure Indicators: Missing lang="cs", no CSS import, no slot, JavaScript for theming
    Evidence: .sisyphus/evidence/task-4-baselayout.txt

  Scenario: Layout handles variant prop correctly
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: grep -c "variant-creative\|variant-professional" src/layouts/BaseLayout.astro
      2. Assert: Count is >= 1 (variant classes referenced)
      3. Run: grep -c "creative.css\|professional.css" src/layouts/BaseLayout.astro
      4. Assert: Count is >= 1 (variant CSS conditionally imported)
    Expected Result: Layout conditionally applies variant class and imports variant CSS
    Evidence: .sisyphus/evidence/task-4-variant-handling.txt
  ```

  **Commit**: YES (groups with Wave 1)
  - Message: `feat(styles): add CSS foundation with dark/light mode and variant styles`
  - Files: `src/layouts/BaseLayout.astro`

- [ ] 5. Header Component

  **What to do**:
  - Create `src/components/Header.astro` with:
    - Props: `variant?: 'creative' | 'professional'` (for variant-specific nav styling)
    - Logo image using `<Image>` from `astro:assets`: `import logo from '../assets/logo.png'`
    - Logo sized at 48px height (desktop), 36px height (mobile)
    - Navigation links: "O mně", "Služby", "Galerie", "Kontakt" — anchor links (`#about`, `#services`, `#gallery`, `#contact`)
    - Sticky/fixed header with subtle background blur on scroll (CSS-only: `backdrop-filter: blur()`)
    - Responsive: hamburger menu on mobile (CSS-only, using checkbox hack — no JS)
    - Use semantic `<header>`, `<nav>`, `<ul>`, `<li>`, `<a>` elements
    - Scoped styles within the component using `<style>` tag (Astro auto-scopes)

  **Must NOT do**:
  - No JavaScript for mobile menu — use CSS checkbox hack or `:target` selector
  - No duplicate global styles — only header-specific styles
  - No English text in navigation

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: UI component with responsive design, mobile menu pattern, visual styling
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Header requires responsive design decisions, mobile menu UX, visual hierarchy
  - **Skills Evaluated but Omitted**:
    - `dev-browser`: Not needed during component creation — visual QA happens at page level

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 6-11)
  - **Blocks**: Tasks 12, 13, 14
  - **Blocked By**: Task 4 (BaseLayout must exist)

  **References**:

  **Pattern References**:
  - `src/assets/logo.png` — Logo image file (400x400, navy bg, white MP monogram, lime green divider). Display at 48px height, preserve aspect ratio.

  **API/Type References**:
  - Astro `<Image>` component: `import { Image } from 'astro:assets'` — use `width` and `height` props for optimization

  **External References**:
  - Astro Image docs: `<Image src={logo} alt="MP Electro & Services" height={48} />`
  - CSS checkbox hack for mobile menu: invisible checkbox + label as hamburger + adjacent sibling selector for menu

  **WHY Each Reference Matters**:
  - `logo.png` analysis showed it's 400x400 square — must be sized down to ~48px height in header, background is navy so on light backgrounds the square crop works but consider if logo needs transparent background handling

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Header renders with logo and navigation
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: cat src/components/Header.astro
      2. Assert: File contains `import { Image } from 'astro:assets'`
      3. Assert: File contains `import logo from '../assets/logo.png'`
      4. Assert: File contains navigation links with Czech text: "O mně", "Služby", "Galerie", "Kontakt"
      5. Assert: File contains `<header` and `<nav` semantic elements
      6. Assert: File does NOT contain `<script>` tags
    Expected Result: Semantic header with Astro Image logo and Czech navigation
    Failure Indicators: Missing Image import, English nav text, JavaScript for menu
    Evidence: .sisyphus/evidence/task-5-header.txt
  ```

  **Commit**: YES (groups with Wave 2)
  - Message: `feat(components): add all reusable section components`
  - Files: `src/components/Header.astro`

- [ ] 6. Footer Component

  **What to do**:
  - Create `src/components/Footer.astro` with:
    - Props: `variant?: 'creative' | 'professional'`
    - Business name: "MP Electro & Services" (brand name stays in English per logo)
    - Contact info: email, phone (from INSTRUCTIONS.md if available, otherwise placeholder with `[DOPLNIT]` Czech note)
    - Copyright line: `© 2026 Martin Přistal — MP Electro & Services`
    - Social links section (if referenced in INSTRUCTIONS.md)
    - Semantic `<footer>` element
    - Scoped styles

  **Must NOT do**:
  - No JavaScript
  - No English text except brand name "MP Electro & Services"

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: UI component with styling
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Footer layout, visual balance, responsive design

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5, 7-11)
  - **Blocks**: Tasks 12, 13, 14
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - `INSTRUCTIONS.md` — Check for contact information, social links, or footer content spec

  **WHY Each Reference Matters**:
  - `INSTRUCTIONS.md` may specify contact details or social profiles to include in footer

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Footer component exists with correct content
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: cat src/components/Footer.astro
      2. Assert: File contains `<footer` semantic element
      3. Assert: File contains "Martin Přistal" or "MP Electro"
      4. Assert: File contains `© 2026` or copyright reference
    Expected Result: Semantic footer with Czech content and business info
    Evidence: .sisyphus/evidence/task-6-footer.txt
  ```

  **Commit**: YES (groups with Wave 2)
  - Message: `feat(components): add all reusable section components`
  - Files: `src/components/Footer.astro`

- [ ] 7. HeroSection Component

  **What to do**:
  - Create `src/components/HeroSection.astro` with:
    - Props: `variant: 'creative' | 'professional'`, `headline: string`, `subheadline: string`, `ctaText: string`, `ctaHref: string`
    - Image props: Accept imported image for hero background/profile
    - Use `<Image>` from `astro:assets` for hero image
    - **Creative variant content** (passed via props from page):
      - Headline: "Skončil jsem jako pěšák v cizině. Teď tvořím energii doma."
      - Image: `profil_extra.jpg` (skydiving photo)
      - Full-width dramatic layout with image overlay
    - **Professional variant content** (passed via props from page):
      - Headline: "Profesionální elektroinstalace a průmyslová automatizace"
      - Image: `profil_profi.jpg` (professional portrait)
      - Structured layout with image + text side by side
    - Semantic `<section id="hero">` element
    - CTA button linking to `#contact`
    - Scoped styles for hero layout, responsive behavior

  **Must NOT do**:
  - No JavaScript for animations — CSS transitions only
  - No hardcoded Czech text in component — pass all text via props for reusability
  - No inline background-image — use `<Image>` component

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Hero section is the most visually impactful component — needs careful layout, image handling, responsive design
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Hero design requires visual impact, image composition, CTA placement, responsive behavior

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5, 6, 8-11)
  - **Blocks**: Tasks 13, 14
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - `INSTRUCTIONS.md:5-20` (approx) — Creative hero: "Skončil jsem jako pěšák v cizině. Teď tvořím energii doma." with dramatic skydive photo
  - `INSTRUCTIONS.md:50-65` (approx) — Professional hero: "Profesionální elektroinstalace a průmyslová automatizace" with professional portrait
  - `src/assets/profil_extra.jpg` — Creative hero image: tandem skydive, orange jumpsuit, blue sky, high adrenaline. Vertical orientation — consider crop or object-fit
  - `src/assets/profil_profi.jpg` — Professional hero image: outdoor portrait, technical jacket, hilltop. Vertical orientation — use alongside text, not as full-width background

  **API/Type References**:
  - Astro `<Image>` component: Pass imported image to `src` prop, set `alt`, `width`, `height`
  - Astro `Props` interface for component type safety

  **WHY Each Reference Matters**:
  - `INSTRUCTIONS.md` provides EXACT Czech headlines for each variant — these must be used verbatim
  - Image analysis showed both hero photos are vertical orientation — layout must accommodate this (not stretch/distort)

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: HeroSection component accepts variant-specific props
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: cat src/components/HeroSection.astro
      2. Assert: File contains `import { Image } from 'astro:assets'`
      3. Assert: File contains props interface with `variant`, `headline`
      4. Assert: File contains `<section` with `id="hero"`
      5. Assert: File contains CTA button/link
      6. Assert: File does NOT contain hardcoded Czech text (text comes via props)
    Expected Result: Flexible hero component accepting variant-specific content via props
    Failure Indicators: Hardcoded text, missing Image import, no variant prop
    Evidence: .sisyphus/evidence/task-7-hero.txt
  ```

  **Commit**: YES (groups with Wave 2)
  - Message: `feat(components): add all reusable section components`
  - Files: `src/components/HeroSection.astro`

- [ ] 8. AboutSection Component

  **What to do**:
  - Create `src/components/AboutSection.astro` with:
    - Props: `variant: 'creative' | 'professional'`, `title: string`, `content: string` (or HTML content via slot), `image?: ImageMetadata`
    - **Creative variant**: Story-driven narrative about Martin's journey (from INSTRUCTIONS.md). Use `profil_extra2.jpg` or `vsehodruhu.jpg` as supporting image
    - **Professional variant**: Structured expertise/background section. Use credentials and experience focus
    - Semantic `<section id="about">` element
    - Image + text layout (responsive: stacked on mobile, side-by-side on desktop)
    - Scoped styles

  **Must NOT do**:
  - No hardcoded body text — pass via props/slot from page
  - No JavaScript

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Content layout component with image/text composition
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Layout composition, image/text balance, responsive behavior

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5-7, 9-11)
  - **Blocks**: Tasks 13, 14
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - `INSTRUCTIONS.md` — Creative "O mně" section: personal story, journey from abroad back to Czech Republic, passion narrative
  - `INSTRUCTIONS.md` — Professional "Odbornost & Pozadí" section: credentials, experience, technical background
  - `src/assets/profil_extra2.jpg` — Alternative skydive shot, similar to extra.jpg
  - `src/assets/vsehodruhu.jpg` — Construction/carpentry scene, team building pergola, shows versatility

  **WHY Each Reference Matters**:
  - `INSTRUCTIONS.md` provides the exact narrative arc for each variant's about section
  - `vsehodruhu.jpg` demonstrates Martin's versatility beyond electrical work — good supporting image for "story" section

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: AboutSection component structure
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: cat src/components/AboutSection.astro
      2. Assert: File contains `<section` with `id="about"`
      3. Assert: File contains props interface
      4. Assert: File contains responsive layout styles (grid or flexbox)
    Expected Result: Flexible about section with variant support
    Evidence: .sisyphus/evidence/task-8-about.txt
  ```

  **Commit**: YES (groups with Wave 2)
  - Message: `feat(components): add all reusable section components`
  - Files: `src/components/AboutSection.astro`

- [ ] 9. ServicesSection Component

  **What to do**:
  - Create `src/components/ServicesSection.astro` with:
    - Props: `variant: 'creative' | 'professional'`, `title: string`, `services: Array<{ title: string; description: string; icon?: string }>`
    - Services from INSTRUCTIONS.md:
      - Elektroinstalace (residential wiring)
      - Průmyslová automatizace (industrial automation / PLC)
      - Revize a kontroly (inspections)
      - Smart home / inteligentní domácnost
    - **Creative variant**: Energetic presentation, possibly with bold icons or cards with lime green accents
    - **Professional variant**: Structured grid, clean cards, authoritative presentation
    - Semantic `<section id="services">` element
    - Card/grid layout for services (responsive)
    - Simple SVG icons or emoji for service categories (no external icon library)
    - Scoped styles

  **Must NOT do**:
  - No external icon libraries (FontAwesome, etc.) — use inline SVG or emoji
  - No JavaScript
  - No hardcoded services list — pass via props from page

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Card-based UI layout with responsive grid
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Card design, grid layout, visual hierarchy for service offerings

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5-8, 10-11)
  - **Blocks**: Tasks 13, 14
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - `INSTRUCTIONS.md` — Services section for both variants: exact service names and descriptions in Czech
  - Creative: energetic presentation with bold accents
  - Professional: structured grid, B2B-optimized descriptions

  **WHY Each Reference Matters**:
  - `INSTRUCTIONS.md` provides exact Czech service names and descriptions — use verbatim

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: ServicesSection component structure
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: cat src/components/ServicesSection.astro
      2. Assert: File contains `<section` with `id="services"`
      3. Assert: File contains props interface with `services` array
      4. Assert: File contains grid/card layout styles
      5. Assert: File does NOT import external icon libraries
    Expected Result: Services component with card grid and Czech service data support
    Evidence: .sisyphus/evidence/task-9-services.txt
  ```

  **Commit**: YES (groups with Wave 2)
  - Message: `feat(components): add all reusable section components`
  - Files: `src/components/ServicesSection.astro`

- [ ] 10. GallerySection Component

  **What to do**:
  - Create `src/components/GallerySection.astro` with:
    - Props: `variant: 'creative' | 'professional'`, `title: string`, `images: Array<{ src: ImageMetadata; alt: string }>`
    - Use `<Image>` from `astro:assets` for every gallery image
    - Select 6-8 best electrical work photos from the PXL_*/IMG_* collection. Recommended selection (by date/variety):
      - `PXL_20260226_141631970.jpg` (most recent work)
      - `PXL_20260225_181503857.jpg`
      - `PXL_20251118_162533352.jpg`
      - `PXL_20251118_163706687.jpg`
      - `PXL_20251114_175140526.jpg`
      - `PXL_20251024_132850051.jpg`
      - `PXL_20241212_173348000.jpg`
      - `IMG_20250731_114924_186.jpg`
    - **Creative variant**: Dynamic grid, possibly asymmetric, hover effects with lime green overlay
    - **Professional variant**: Uniform grid, clean spacing, subtle hover
    - Responsive: 3 columns desktop, 2 tablet, 1 mobile
    - Lazy loading for gallery images (Astro `<Image>` handles this)
    - Semantic `<section id="gallery">` element
    - Scoped styles

  **Must NOT do**:
  - No JavaScript lightbox — simple gallery grid
  - No external gallery library
  - Image selection will happen in the page files (Tasks 13-14), not hardcoded here

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Image grid layout with responsive behavior and hover effects
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Gallery grid composition, image sizing, hover interactions

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5-9, 11)
  - **Blocks**: Tasks 13, 14
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - `src/assets/PXL_*.jpg` and `src/assets/IMG_*.jpg` — 56+ electrical work photos. Agent should visually inspect a few to pick best ones showing: clean electrical cabinets, neat wiring, variety of work types
  - `INSTRUCTIONS.md` — Gallery section references for both variants

  **API/Type References**:
  - Astro `ImageMetadata` type for typed image props
  - Astro `<Image>` component with `width`, `height`, `loading="lazy"`

  **WHY Each Reference Matters**:
  - The PXL/IMG photos are the actual work portfolio — need to select best representatives of electrical craftsmanship
  - Astro Image component ensures WebP optimization and proper sizing for gallery thumbnails

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: GallerySection component structure
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: cat src/components/GallerySection.astro
      2. Assert: File contains `import { Image } from 'astro:assets'`
      3. Assert: File contains `<section` with `id="gallery"`
      4. Assert: File contains grid layout styles (CSS grid)
      5. Assert: File contains responsive breakpoints (media queries or auto-fit)
    Expected Result: Responsive gallery grid using Astro Image component
    Evidence: .sisyphus/evidence/task-10-gallery.txt
  ```

  **Commit**: YES (groups with Wave 2)
  - Message: `feat(components): add all reusable section components`
  - Files: `src/components/GallerySection.astro`

- [ ] 11. ContactSection Component

  **What to do**:
  - Create `src/components/ContactSection.astro` with:
    - Props: `variant: 'creative' | 'professional'`, `title: string`, `description: string`, `email: string`, `phone: string`
    - CTA section with prominent "Kontaktujte mě" / "Spojte se se mnou" heading
    - Email link: `<a href="mailto:{email}">`
    - Phone link: `<a href="tel:{phone}">`
    - **Creative variant**: Bold CTA, energetic design, lime green accent button
    - **Professional variant**: Clean, structured contact block, corporate feel
    - Semantic `<section id="contact">` element
    - No contact form — just direct contact links (mailto/tel)
    - Scoped styles

  **Must NOT do**:
  - No contact form (no backend)
  - No JavaScript
  - No hardcoded contact details — pass via props

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: CTA section with visual impact and layout
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: CTA design, visual hierarchy, button styling

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5-10)
  - **Blocks**: Tasks 13, 14
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - `INSTRUCTIONS.md` — Contact/CTA section for both variants, contact information if specified

  **WHY Each Reference Matters**:
  - `INSTRUCTIONS.md` specifies the CTA tone for each variant — energetic vs professional

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: ContactSection component structure
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: cat src/components/ContactSection.astro
      2. Assert: File contains `<section` with `id="contact"`
      3. Assert: File contains `mailto:` link
      4. Assert: File contains `tel:` link
      5. Assert: File does NOT contain `<form` element
    Expected Result: Contact section with email/phone links, no form
    Evidence: .sisyphus/evidence/task-11-contact.txt
  ```

  **Commit**: YES (groups with Wave 2)
  - Message: `feat(components): add all reusable section components`
  - Files: `src/components/ContactSection.astro`

- [ ] 12. Landing Page (index.astro)

  **What to do**:
  - Replace content of `src/pages/index.astro` with:
    - Import and use `BaseLayout` (no variant prop — landing has its own style)
    - Clean, minimal landing page with:
      - Logo centered
      - Heading: "Martin Přistal — MP Electro & Services"
      - Brief tagline in Czech: "Profesionální elektroinstalace a průmyslová automatizace"
      - Two prominent buttons/cards linking to:
        - `/creative` — "Kreativní verze" (with brief description)
        - `/professional` — "Profesionální verze" (with brief description)
    - Use `<Image>` for logo
    - Minimal, elegant styling — scoped styles or use global CSS only
    - Responsive: looks good on mobile and desktop
    - `<html lang="cs">` via BaseLayout

  **Must NOT do**:
  - No complex layout — this is a simple chooser page
  - No JavaScript
  - No English text except brand name

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Landing page design with visual balance and responsive layout
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Landing page composition, CTA button design, visual balance

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Tasks 13, 14)
  - **Blocks**: Task 15
  - **Blocked By**: Tasks 5, 6 (Header, Footer — if used on landing)

  **References**:

  **Pattern References**:
  - `src/pages/index.astro` — Current file to replace (bare Astro template)
  - `src/assets/logo.png` — Logo for centered display
  - `src/layouts/BaseLayout.astro` — Layout to wrap page content

  **WHY Each Reference Matters**:
  - Current `index.astro` must be replaced entirely — agent should read it first to understand structure, then overwrite
  - Logo needs to be prominently displayed on the landing page

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Landing page structure and content
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: cat src/pages/index.astro
      2. Assert: File imports BaseLayout
      3. Assert: File contains link to "/creative"
      4. Assert: File contains link to "/professional"
      5. Assert: File contains "Martin Přistal" or "MP Electro"
      6. Assert: File contains Czech text (e.g., "Kreativní", "Profesionální")
    Expected Result: Landing page with two variant links and Czech content
    Failure Indicators: Missing variant links, English-only content, no layout import
    Evidence: .sisyphus/evidence/task-12-landing.txt

  Scenario: Landing page builds without errors
    Tool: Bash
    Preconditions: All Wave 1-2 tasks complete, this task complete
    Steps:
      1. Run: npm run build 2>&1 | tail -20
      2. Assert: Build completes without errors
      3. Assert: dist/index.html exists
    Expected Result: Successful build with index.html output
    Evidence: .sisyphus/evidence/task-12-build.txt
  ```

  **Commit**: YES (groups with Wave 3)
  - Message: `feat(pages): add landing, creative, and professional pages`
  - Files: `src/pages/index.astro`

- [ ] 13. Creative Variant Page (creative.astro)

  **What to do**:
  - Create `src/pages/creative.astro` with:
    - Import all components: BaseLayout, Header, Footer, HeroSection, AboutSection, ServicesSection, GallerySection, ContactSection
    - Import images: `profil_extra.jpg`, `vsehodruhu.jpg`, selected gallery photos
    - Import creative CSS (if not handled by layout): should be handled by BaseLayout when `variant="creative"` is passed
    - Use `<BaseLayout title="Martin Přistal — Kreativní" variant="creative">`
    - Wire up all sections with Czech content from INSTRUCTIONS.md VARIANT_A:
      - **Hero**: headline="Skončil jsem jako pěšák v cizině. Teď tvořím energii doma.", image=profil_extra.jpg
      - **About**: Story-driven narrative from INSTRUCTIONS.md (personal journey, passion, return to CZ)
      - **Services**: Service list with energetic descriptions from INSTRUCTIONS.md
      - **Gallery**: 6-8 selected electrical work photos with Czech alt text
      - **Contact**: "Pojďme spolupracovat" or similar CTA from INSTRUCTIONS.md, email/phone
    - Pass `variant="creative"` to all components

  **Must NOT do**:
  - No inline styles — component styles + variant CSS handle everything
  - No English user-facing text
  - No inventing content — use INSTRUCTIONS.md verbatim for Czech copy

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Page assembly requiring visual understanding of how components compose together
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Page composition, visual flow between sections, image selection

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Tasks 12, 14)
  - **Blocks**: Task 15
  - **Blocked By**: Tasks 1, 2, 5-11 (all CSS + all components)

  **References**:

  **Pattern References**:
  - `INSTRUCTIONS.md:5-50` (approx) — VARIANT_A_CREATIVE: Complete Czech copy for all sections. **READ THIS ENTIRE SECTION** and use text verbatim
  - `src/assets/profil_extra.jpg` — Hero image (skydiving)
  - `src/assets/vsehodruhu.jpg` — About section supporting image (versatility)
  - `src/assets/PXL_*.jpg` / `IMG_*.jpg` — Gallery images (select 6-8 best, visually inspect)

  **API/Type References**:
  - All component prop interfaces (created in Wave 2 tasks)

  **WHY Each Reference Matters**:
  - `INSTRUCTIONS.md` VARIANT_A section is the SINGLE SOURCE OF TRUTH for all Czech copy on this page — do not paraphrase, do not translate, use as-is
  - Gallery images need visual inspection to pick best representatives of electrical work

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Creative page assembles all sections
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: cat src/pages/creative.astro
      2. Assert: File imports BaseLayout, Header, HeroSection, AboutSection, ServicesSection, GallerySection, ContactSection, Footer
      3. Assert: File passes variant="creative" to BaseLayout
      4. Assert: File contains Czech headline "Skončil jsem jako pěšák" (from INSTRUCTIONS.md)
      5. Assert: File imports profil_extra from assets
    Expected Result: Complete creative page with all sections and Czech content
    Failure Indicators: Missing component imports, wrong variant, English content, missing hero image
    Evidence: .sisyphus/evidence/task-13-creative-page.txt

  Scenario: Creative page builds and route exists
    Tool: Bash
    Preconditions: All dependencies complete
    Steps:
      1. Run: npm run build 2>&1 | tail -20
      2. Assert: Build succeeds
      3. Assert: dist/creative/index.html exists (or dist/creative.html)
    Expected Result: /creative route builds successfully
    Evidence: .sisyphus/evidence/task-13-build.txt
  ```

  **Commit**: YES (groups with Wave 3)
  - Message: `feat(pages): add landing, creative, and professional pages`
  - Files: `src/pages/creative.astro`

- [ ] 14. Professional Variant Page (professional.astro)

  **What to do**:
  - Create `src/pages/professional.astro` with:
    - Import all components: BaseLayout, Header, Footer, HeroSection, AboutSection, ServicesSection, GallerySection, ContactSection
    - Import images: `profil_profi.jpg`, selected gallery photos
    - Use `<BaseLayout title="Martin Přistal — Profesionální" variant="professional">`
    - Wire up all sections with Czech content from INSTRUCTIONS.md VARIANT_B:
      - **Hero**: headline="Profesionální elektroinstalace a průmyslová automatizace", image=profil_profi.jpg
      - **About**: Structured expertise section from INSTRUCTIONS.md (credentials, experience, technical background)
      - **Services**: Service list with B2B-optimized descriptions from INSTRUCTIONS.md
      - **Gallery**: 6-8 selected electrical work photos (can be same or different selection as creative)
      - **Contact**: Professional CTA from INSTRUCTIONS.md, email/phone
    - Pass `variant="professional"` to all components

  **Must NOT do**:
  - No inline styles
  - No English user-facing text
  - No inventing content — use INSTRUCTIONS.md verbatim

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Page assembly with visual composition understanding
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Page composition, section flow

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Tasks 12, 13)
  - **Blocks**: Task 15
  - **Blocked By**: Tasks 1, 3, 5-11 (global CSS + professional CSS + all components)

  **References**:

  **Pattern References**:
  - `INSTRUCTIONS.md:50-88` (approx) — VARIANT_B_PROFESSIONAL: Complete Czech copy for all sections. **READ THIS ENTIRE SECTION** and use text verbatim
  - `src/assets/profil_profi.jpg` — Hero image (professional portrait on hilltop)
  - `src/assets/PXL_*.jpg` / `IMG_*.jpg` — Gallery images

  **WHY Each Reference Matters**:
  - `INSTRUCTIONS.md` VARIANT_B section is the SINGLE SOURCE OF TRUTH for Czech copy — use verbatim

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Professional page assembles all sections
    Tool: Bash
    Preconditions: Task complete
    Steps:
      1. Run: cat src/pages/professional.astro
      2. Assert: File imports BaseLayout and all section components
      3. Assert: File passes variant="professional" to BaseLayout
      4. Assert: File contains Czech headline "Profesionální elektroinstalace" (from INSTRUCTIONS.md)
      5. Assert: File imports profil_profi from assets
    Expected Result: Complete professional page with all sections and Czech content
    Failure Indicators: Missing components, wrong variant, English content
    Evidence: .sisyphus/evidence/task-14-professional-page.txt

  Scenario: Professional page builds and route exists
    Tool: Bash
    Preconditions: All dependencies complete
    Steps:
      1. Run: npm run build 2>&1 | tail -20
      2. Assert: Build succeeds
      3. Assert: dist/professional/index.html exists
    Expected Result: /professional route builds successfully
    Evidence: .sisyphus/evidence/task-14-build.txt
  ```

  **Commit**: YES (groups with Wave 3)
  - Message: `feat(pages): add landing, creative, and professional pages`
  - Files: `src/pages/professional.astro`

- [ ] 15. Build Verification & Fix Errors

  **What to do**:
  - Run `npm run build` and capture full output
  - If build fails:
    - Read error messages carefully
    - Fix each error (missing imports, type errors, CSS issues)
    - Re-run build until it succeeds
  - If build succeeds:
    - Verify all 3 routes exist in `dist/`: index.html, creative/index.html, professional/index.html
    - Check no unexpected warnings
  - Run `npm run preview` to verify site serves
  - Check that all image files are processed (WebP versions in dist/)

  **Must NOT do**:
  - No adding new features — only fix build errors
  - No changing functionality — only fixing compilation issues
  - No skipping errors — every error must be resolved

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Build verification and error fixing is straightforward debugging
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (after Wave 3)
  - **Blocks**: Task 16, F1-F4
  - **Blocked By**: Tasks 12, 13, 14

  **References**:

  **Pattern References**:
  - All files created in Tasks 1-14 — may need fixes

  **External References**:
  - Astro build error docs for common issues

  **WHY Each Reference Matters**:
  - All previously created files are potential sources of build errors

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Build succeeds with zero errors
    Tool: Bash
    Preconditions: All Wave 1-3 tasks complete
    Steps:
      1. Run: npm run build 2>&1
      2. Assert: Exit code is 0
      3. Assert: Output does NOT contain "error" (case insensitive)
      4. Run: ls dist/index.html dist/creative/index.html dist/professional/index.html
      5. Assert: All 3 files exist
    Expected Result: Clean build with all 3 route files in dist/
    Failure Indicators: Non-zero exit code, missing route files, error messages
    Evidence: .sisyphus/evidence/task-15-build.txt

  Scenario: Preview server starts
    Tool: Bash
    Preconditions: Build succeeded
    Steps:
      1. Run: timeout 10 npm run preview 2>&1 || true
      2. Assert: Output contains "localhost" or server start message
    Expected Result: Preview server starts without errors
    Evidence: .sisyphus/evidence/task-15-preview.txt
  ```

  **Commit**: YES (if fixes were needed)
  - Message: `fix: resolve build errors and verify all routes`
  - Files: any fixed files
  - Pre-commit: `npm run build`

- [ ] 16. Visual QA — Both Variants

  **What to do**:
  - Start dev server (`npm run dev`)
  - Using `dev-browser` skill, navigate to each page and verify:
    - **`/` (Landing)**: Logo renders, two variant links visible, Czech text, responsive
    - **`/creative`**: All sections render (Hero, About, Services, Gallery, Contact), images load, Czech content matches INSTRUCTIONS.md, dark aesthetic with lime green accents visible
    - **`/professional`**: All sections render, images load, Czech content matches INSTRUCTIONS.md, clean/light aesthetic visible
  - Check responsive layout at mobile viewport (375px width)
  - Take screenshots of each page (desktop + mobile) as evidence
  - Verify dark mode: Set browser to dark preference, check both variants respond
  - Report any visual issues for fixing

  **Must NOT do**:
  - No adding features — only report and fix visual issues
  - No changing content — only fixing layout/display problems

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Visual inspection and QA requires understanding of design quality
  - **Skills**: [`dev-browser`, `frontend-ui-ux`]
    - `dev-browser`: Browser automation for navigating pages, taking screenshots, checking responsive behavior
    - `frontend-ui-ux`: Visual quality assessment, identifying layout issues

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (after Task 15)
  - **Blocks**: F1-F4
  - **Blocked By**: Task 15

  **References**:

  **Pattern References**:
  - `INSTRUCTIONS.md` — Full design spec for visual comparison
  - All pages created in Wave 3

  **WHY Each Reference Matters**:
  - `INSTRUCTIONS.md` is the design reference — visual QA must compare rendered pages against this spec

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: All pages render correctly at desktop viewport
    Tool: dev-browser skill
    Preconditions: Dev server running at localhost:4321
    Steps:
      1. Navigate to http://localhost:4321/
      2. Assert: Page loads, logo visible, two variant links present
      3. Screenshot: .sisyphus/evidence/task-16-landing-desktop.png
      4. Navigate to http://localhost:4321/creative
      5. Assert: Hero section visible with skydive image, lime green accents present
      6. Assert: All sections visible: #hero, #about, #services, #gallery, #contact
      7. Screenshot: .sisyphus/evidence/task-16-creative-desktop.png
      8. Navigate to http://localhost:4321/professional
      9. Assert: Hero section visible with professional portrait, clean light design
      10. Assert: All sections visible: #hero, #about, #services, #gallery, #contact
      11. Screenshot: .sisyphus/evidence/task-16-professional-desktop.png
    Expected Result: All 3 pages render with correct content and images
    Failure Indicators: Missing sections, broken images, wrong content
    Evidence: .sisyphus/evidence/task-16-*-desktop.png

  Scenario: Pages are responsive at mobile viewport
    Tool: dev-browser skill
    Preconditions: Dev server running
    Steps:
      1. Set viewport to 375x812 (iPhone)
      2. Navigate to each page (/creative, /professional)
      3. Assert: Content stacks vertically, no horizontal overflow
      4. Assert: Navigation is mobile-friendly (hamburger or stacked)
      5. Screenshot each page
    Expected Result: Responsive layout, no overflow, readable text
    Evidence: .sisyphus/evidence/task-16-*-mobile.png
  ```

  **Commit**: YES (if fixes were made)
  - Message: `fix: visual QA fixes for both variants`
  - Files: any fixed files

---

## Final Verification Wave

> 4 review agents run in PARALLEL. ALL must APPROVE. Rejection → fix → re-run.

- [ ] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. For each "Must Have": verify implementation exists (read file, check content). For each "Must NOT Have": search codebase for forbidden patterns — reject with file:line if found. Check evidence files exist in .sisyphus/evidence/. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [ ] F2. **Code Quality Review** — `unspecified-high`
  Run `npm run build`. Review all changed files for: `as any`/`@ts-ignore`, empty catches, console.log in prod, commented-out code, unused imports. Check AI slop: excessive comments, over-abstraction, generic names. Verify CSS custom properties are consistent across files.
  Output: `Build [PASS/FAIL] | Files [N clean/N issues] | VERDICT`

- [ ] F3. **Real Manual QA** — `unspecified-high` (+ `dev-browser` skill)
  Start dev server. Navigate to `/`, `/creative`, `/professional`. Verify all sections render, all images load, Czech text is correct, responsive layout works on mobile viewport. Test dark mode by toggling browser preference. Save screenshots.
  Output: `Pages [N/N pass] | Images [N/N loaded] | Dark Mode [PASS/FAIL] | VERDICT`

- [ ] F4. **Scope Fidelity Check** — `deep`
  For each task: read "What to do", read actual implementation. Verify 1:1 — everything in spec was built, nothing beyond spec was built. Check INSTRUCTIONS.md compliance for all Czech copy. Flag unaccounted changes.
  Output: `Tasks [N/N compliant] | Scope [CLEAN/N issues] | VERDICT`

---

## Commit Strategy

| After | Message | Files | Pre-commit |
|-------|---------|-------|------------|
| Wave 1 | `feat(styles): add CSS foundation with dark/light mode and variant styles` | `src/styles/*.css`, `src/layouts/BaseLayout.astro` | `npm run build` |
| Wave 2 | `feat(components): add all reusable section components` | `src/components/*.astro` | `npm run build` |
| Wave 3 | `feat(pages): add landing, creative, and professional pages` | `src/pages/*.astro` | `npm run build` |
| Wave 4 | `fix: address build issues and final adjustments` | any fixes | `npm run build` |

---

## Success Criteria

### Verification Commands
```bash
npm run build          # Expected: Build completes with 0 errors, outputs to dist/
npm run preview        # Expected: Site serves at localhost, all 3 routes work
```

### Final Checklist
- [ ] All "Must Have" present (Czech language, two variants, dark mode, Image component, separate CSS, components, responsive, CF Workers)
- [ ] All "Must NOT Have" absent (no JS toggle, no tests, no backend, no AI slop, no third-party CSS, no English UI text)
- [ ] `npm run build` succeeds
- [ ] All 3 pages render correctly (`/`, `/creative`, `/professional`)
- [ ] Dark/light mode switches automatically based on browser preference
