# Decisions — profi-redesign

## User Decisions (Final, Confirmed)
1. **Index page** → Full professional page at `/` (not a landing with cards)
2. **professional.astro** → DELETE entirely (Task 4)
3. **creative.astro** → Keep as-is, hidden, NO link from index
4. **Hero image** → Use `martin_fb.jpg` (FB photo) NOT `profil_profi.jpg`
5. **Services** → Split into 2 categories: Silnoproud + Slaboproud/Automatizace
6. **Photo strip** → New `PhotoStrip.astro` component BELOW hero (not inside), 4 reference photos
7. **About section** → REMOVE entirely
8. **Gallery** → Keep current 8 images, no additions
9. **Styles** → Kept separated (professional.css + creative.css)

## Architecture Decisions
- PhotoStrip placed AFTER HeroSection, BEFORE first ServicesSection
- Duplicate IDs from 2× ServicesSection: ACCEPTED (not fixed)
- Styles in professional.css only (append-only), no inline styles in components
- No new npm dependencies
