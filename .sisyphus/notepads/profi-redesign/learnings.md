# Learnings — profi-redesign

## Project Architecture
- Astro project, component-based
- Components accept `variant` prop: 'creative' | 'professional'
- CSS is variant-scoped: `.variant-professional` body class set by BaseLayout
- BaseLayout conditionally imports CSS based on variant prop
- All pages are in `src/pages/`, components in `src/components/`, styles in `src/styles/`

## Component Patterns
- GallerySection.astro: imports `{ Image } from 'astro:assets'`, typed Props interface, `.map()` over images array
- Props interface format: `interface Props { variant: 'creative' | 'professional'; ... }`
- Image usage: `<Image src={img.src} alt={img.alt} width={400} height={400} loading="lazy" />`
- No inline `<style>` in components — all styles go in variant CSS files

## CSS Architecture
- All selectors prefixed with `.variant-professional`
- Variables: `var(--color-bg)`, `var(--color-surface)`, `var(--color-border)`, `var(--color-lime)`, `var(--color-navy)`, `var(--color-text)`
- Spacing variables: `var(--space-sm)`, `var(--space-md)`, `var(--space-lg)`, `var(--space-xl)`, `var(--space-3xl)`
- Transition variables: `var(--transition-base)`, `var(--transition-fast)`
- Responsive breakpoints: 640px (tablet), 1024px (desktop)
- Gallery pattern (lines 254-290): CSS Grid, 2col mobile → 3col tablet → 4col desktop, aspect-ratio 1, hover scale(1.03)

## Known Issues
- ServicesSection.astro hardcodes `id="services"` — using it twice creates duplicate IDs. ACCEPTED as minor HTML validation issue.
- Header.astro has `#about` nav link — About section removed. Link will scroll nowhere. DO NOT modify Header.astro (shared component).

## Assets
- `src/assets/martin_fb.jpg` — New hero image (outdoor FB photo, man on hilltop)
- `src/assets/profil_profi.jpg` — OLD hero image — MUST be replaced
- 64 total images in src/assets/

## Build Command
- `npx astro build` (NOT `bun run build`)
- Dev server: `npx astro dev`
