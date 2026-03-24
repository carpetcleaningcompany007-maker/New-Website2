# JW Carpet Care rebuild plan

## What has been changed in this rebuild

1. The site is now driven primarily through Jekyll layouts and shared includes.
2. Service pages now use one shared `service` layout.
3. Town pages use one shared `town` layout.
4. Service plus town pages use one shared `service-town` layout.
5. Missing service plus town pages for rug cleaning and commercial cleaning have been generated for every town.
6. The design system has been tightened so pages use the same hero, cards, process blocks, map panels and CTA bands.
7. The awkward double image sections were removed.
8. Self aware SEO wording was stripped back.

## Recommended next order after this zip

1. Build and preview in GitHub Pages or local Jekyll.
2. Check the main pages first:
   - homepage
   - carpet cleaning
   - commercial
   - Worcester town page
   - Worcester carpet cleaning page
3. Replace any stock photo URLs with your preferred real photos.
4. Add the real Formspree endpoint.
5. Add real reviews and gallery images.
6. Then tighten any service specific wording further.

## Key files to focus on next time

- `_layouts/service.html`
- `_layouts/town.html`
- `_layouts/service-town.html`
- `assets/style.css`
- `_data/services.yml`
- `_data/towns.yml`
