# ToxicCycle Brand Asset Bundle

Prepared for the ToxicCycle IoT Smart Drop-Box website. Use the SVG files where a crisp scalable asset is needed and the PNG exports for image-only workflows.

## Contents

- `logo/` — transparent ToxicCycle wordmark logo in SVG and PNG, with light and dark text variants.
- `icons/` — 24 individual Lucide SVG icons used across navigation, metrics, hardware, and e-waste states. Lucide license is included as `LICENSE-Lucide-MIT.txt`.
- `illustrations/` — flat drop-box station illustration at 1x (256 × 256) and 2x (512 × 512), with transparent background.
- `fonts/` — Plus Jakarta Sans variable font (200–800) and Inter variable font with their SIL Open Font License files.

## Brand colors

- Primary green: `#15803D`
- Teal: `#0F766E`
- Amber: `#F59E0B`
- Dark surface: `#111827`

## Font CSS example

```css
@font-face {
  font-family: "Plus Jakarta Sans";
  src: url("/assets/toxicycle-brand/fonts/PlusJakartaSans-Variable.ttf") format("truetype");
  font-style: normal;
  font-weight: 200 800;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/assets/toxicycle-brand/fonts/Inter-Variable.ttf") format("truetype");
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
}
```

## Logo variants

- `logo/toxicycle-logo-dark.svg` and `.png`: white wordmark for dark surfaces.
- `logo/toxicycle-logo-light.svg` and `.png`: charcoal wordmark for light surfaces.

Icon exports are based on Lucide React from the project dependencies. Font files were downloaded from the official Google Fonts repository; copyright and license notices are retained beside the font files.
