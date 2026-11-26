# Figma build notes (handoff)

File: https://www.figma.com/design/t9gHflMrU3hU2I7Yo9m5s7 (pages: Style Guide & Components `0:1`, Page Designs `1:4`, Assets `1:5`).

## What exists in the file

**Variables.**
- `Color` collection, 18 variables: green/400–800, green/100, slate/600–800, forest/800, neutral/cream, surface, white and line, ink/900/600/500, and feedback/error.
- `Spacing & Radius` collection: space/4–120 and radius/sm, md, lg, xl, pill.

**Text styles (17).** Display/XL, Display/L, Heading/H2, H3, H3 Italic and H4 (Cormorant SemiBold; H4 is DM Sans), Title/Card, Body/L, M and S, Label/Button, Nav, Eyebrow and Chip, Stat/Number, Stat/Label, Caption.

**Effect styles.** Elevation/1 Card, 2 Hover, 3 Modal, Nav.

**Images.** 68 compressed photos are on the Assets page. Layer names match the filenames, and their image hashes are in `image-hashes.json`. `gc1.png` and `gc2.png` are HEIC files and were not uploaded.

**Style Guide page.**

| Section | Node |
|---|---|
| 01 · Foundations (swatches, type ramp, elevation, radius/spacing notes) | `7:2` |
| 02 · Icons (31 lucide icon components + cow glyph) | `7:156` |
| 03 · Components | `8:2` |

**Components.**

| Component | Node |
|---|---|
| Button set (Type × State, Label/icon props) | `8:86` |
| Eyebrow | `8:98` |
| Filter chip | `8:117` |
| Stat | `8:129` |
| Stat strip | `8:142` |
| Form field | `8:195` |
| Section header | `9:25` |
| Feature card | `9:36` |
| Product card | `9:104` |
| FAQ item | `9:129` |
| Contact info card | `9:151` |
| Team gallery tile | `10:75` |
| Leadership card | `10:97` |
| Timeline item | `10:137` |
| Location pin | `10:143` |
| Footprint region card | `10:203` |
| Category card | `10:217` |
| Nav link | `13:109` |
| Nav | `13:205` |
| Products dropdown | `13:236` |
| Footer | `13:297` |

Icon IDs: arrow-right `7:161`, chevron-right `7:166`, chevron-down `7:171`, download `7:178`, check `7:183`, map-pin `7:189`, calendar `7:197`, phone `7:202`, mail `7:208`, x `7:214`, message-circle `7:219`, wrench `7:224`, leaf `7:230`, award `7:236`, users `7:244`, trending-up `7:250`, sparkles `7:255`, droplet `7:260`, factory `7:265`, plus `7:271`, minus `7:276`, lightbulb `7:283`, package `7:291`, clock `7:297`, file-text `7:306`, image-off `7:316`, facebook `7:321`, twitter `7:326`, youtube `7:332`, linkedin `7:339`, cow `7:344`.

## Added after the plan upgrade

**More components:**

| Component | Node |
|---|---|
| Page hero | `16:185` |
| Feature item | `16:194` |
| Product detail modal | `16:293` (brochure link sits in the body) |

**Page sections on Page Designs:**

| Page | Section | Page frame |
|---|---|---|
| Home | `17:207` | `17:208` |
| About | `18:436` | `18:437` |
| Team | `19:546` | `19:547` (lightbox `19:984`) |
| Contact | `21:1134` | `21:1135` |
| Products | `20:920` | `20:921` |
| Mechanization | `22:1313` | `22:1314` (modal `22:1930`) |
| Cow Comfort | `23:1905` | `23:1906` (modal `23:2802`) |
| Feed Additives | `24:2753` | `24:2754` (modal `24:3569`) |
| Footprint | `25:3544` | `25:3545` |

## Gotchas learned

- Paints bound to a color variable with opacity below 1 rendered solid. Store translucent colours as raw `{type:'SOLID', color, opacity}` paints.
- `setBoundVariableForPaint` keeps the input paint's base colour. Pass the variable's resolved colour, or some renders show black.
- After `resize()` on an auto-layout frame, set `layoutSizingVertical = 'HUG'`.
- `isExposedInstance` can only be set after the parent has become a component.
