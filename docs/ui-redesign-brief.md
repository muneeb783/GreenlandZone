# UI Redesign Brief

Working notes for the site-wide UI refresh. The visual designs live in Figma; this file records the audit, the agreed constraints and the design direction so work can resume in a new session.

Figma file: https://www.figma.com/design/t9gHflMrU3hU2I7Yo9m5s7 ("GreenlandZone — UI Redesign", pages: Style Guide & Components, Page Designs, Assets — currently empty)

## Constraints (from the owner)

- Keep every piece of existing copy verbatim. No shortening or rewording.
- Keep the current color scheme.
- Cover every page down to small interactions (product cards, detail modal, FAQ, team photos).
- Review designs in Figma before any frontend changes.

## Pages in scope

Linked from the nav: Home `/`, About `/about`, Team `/team`, Contact `/contact`, Products `/products`, Mechanization `/products/mechanization`, Cow Comfort `/products/cowcomfort`, Feed Additives `/products/feed`, Footprint `/footprint`.

The seven older routes (`/products/dairy`, `/parts`, `/forage`, `/milking`, `/hygiene`, `/teat`, `/monitoring`) are not linked anywhere; their content already lives on the three consolidated product pages.

Content inventory: 12 Mechanization products, 20 Cow Comfort products, 18 Feed Additive products, 15 team gallery items, 4 footprint regions, 3 FAQs, 2 leadership messages.

## Existing palette (kept)

| Token | Hex | Use today |
|---|---|---|
| green/600 | `#16A34A` | Primary brand green (most used color) |
| green/700 / 800 | `#15803D` / `#166534` | Hover, pressed |
| green/500 / 400 | `#22C55E` / `#4ADE80` | Accents, stats on dark |
| green/100 | `#DCFCE7` | Chips, tints |
| slate/800 / 700 / 600 | `#213543` / `#2A4555` / `#355364` | Dark heroes, modal close bar |
| forest/800 | `#1C2B1E` | Footer, dark green heroes |
| cream | `#F7F4EF` | Warm section backgrounds |
| surface | `#F8FAFC` | Cool section backgrounds |
| ink / 600 / 500 | `#1A1A1A` / `#4B5563` / `#6B7280` | Text |

Off-palette colors to remove: blue/orange gradient orbs (Home "Our Approach"), teal and purple region colors (Footprint).

## Audit: inconsistencies and bugs found

1. **Three type systems.** Home, Contact and Footer use Cormorant Garamond + DM Sans; About, Team, Products and Footprint use Inter; the global `index.css` is still the Vite default. Proposal: Cormorant Garamond for display headings, DM Sans for everything else; drop Inter.
2. **Three different hero treatments.** Home uses a photo, Products/Team/Footprint use slate gradients, and the product pages use dark green. Proposal: one hero pattern with a photo plus a dark overlay, an eyebrow chip, headline and stats.
3. **Product detail modal.** The image sits on white inside a fixed-height column, leaving a large empty block. Long feature lists are cut off behind the full-width "CLOSE" bar. The navbar shows through above the overlay. There is no call to action.
4. **No category filtering** on product pages, despite 12–20 products and 6–14 categories each.
5. **Emoji icons** on Home "Our Solutions" (🔧 🌾 🐄) and Contact info cards; the rest of the site uses lucide icons.
6. **Team page: two broken images.** `src/assets/gc1.png` and `gc2.png` are HEIC files with a `.png` extension, which browsers cannot display ("Annual Sales Training 2026", "Annual Awards & Recognition Ceremony"). Re-export them as JPEG.
7. **Contact map renders blank** in the captured screenshot.
8. **Leadership page has no navbar contrast.** Nav links are invisible on the dark header.
9. **The nav has no primary CTA.** Comparable B2B equipment sites put "Request a quote" or "Contact a rep" in the header.

## Design direction

- **Navigation:** sticky, with a solid white state once scrolled and a green "Get a Quote" button. Product categories appear as a dropdown under Products.
- **Product listing:** category filter chips with counts, then a 3-column card grid. Images use a 4:3 crop on a neutral background so cut-out product shots sit cleanly. Each card shows the category and tag, the name, `shortDesc`, the first three features and a "View details" link. Cards lift on hover.
- **Product detail:** a large right-side drawer, or a centered modal capped at 90vh. The image panel sits on a cream background. The header shows a sticky title with an × close button. Body text is `fullDesc`. Features appear in a two-column check list, with every feature visible through internal scrolling. The footer holds two CTAs: "Enquire about this product" (pre-fills the contact form) and WhatsApp.
- **Trust elements:** reuse the existing stats as one stat-strip component. Partner and brand logos, if available, would be a good addition.
- **Contact:** the existing split layout stays as the pattern. Use icon tiles in place of emoji, a working map embed and a WhatsApp button.
- **Footer:** keep the current structure. Raise the low-contrast text (the copyright line and tagline) to meet WCAG AA.

## Status

- Done: audit, screenshots of every page, verbatim text extraction, compressed images (121 MB → 4.7 MB), Figma file created.
- Blocked: image uploads to Figma failed because the session network blocked `mcp.figma.com`. A personal environment named `greenlandzone` now allows that host (plus delaval.com, lely.com, gea.com and alltech.com for competitor research). Start the next session on that environment, with the Figma connector connected.
- Next: build the style guide and components in Figma, then the nine page designs, then review with the owner.

## Figma progress (2026-11-26)

- **Done in Figma:**
  - Color, spacing and radius variables, matching the palette above.
  - 17 text styles in Cormorant Garamond and DM Sans (Inter dropped).
  - 4 elevation styles.
  - A Foundations board.
  - 31 icon components (lucide plus the cow glyph).
  - 68 compressed real photos on the Assets page.
  - 21 components: Button, Eyebrow, Filter chip, Stat, Stat strip, Form field, Section header, Feature card, Product card (default and hover), FAQ item (open and closed), Contact info card, Team gallery tile (default and hover), Leadership card, Timeline item, Location pin, Footprint region card, Category card, Nav link, Nav (transparent and solid), Products dropdown, Footer.
- **Blocked:** the Figma Starter plan's MCP tool-call limit stopped all calls, reads included, partway through.
- **Not yet built:**
  - The Page hero and Product detail modal components.
  - The nine page designs.
  - A fix for the translucent-fill bug on the footer and nav indicators.
- **Resume:** see `docs/figma/build-notes.md`. It has the node IDs, known defects and next steps. `docs/figma/product-data.json` holds the verbatim product and page copy, and `docs/figma/image-hashes.json` maps uploaded photos to Figma image hashes.
- **Competitor research (Lely and GEA readable; DeLaval and Alltech pages render client-side and returned no content):**
  - Header "Contact" plus "Get a quote" CTA, and the "Find Dealer" CTA repeated after each feature block: https://www.gea.com/en/dairy-farming/, https://www.gea.com/en/products/milking-farming-barn/milking-solutions/automatic-milking/dairyrobot-r9500/
  - Hero with one primary and one secondary CTA, icon + heading + short-text benefit blocks, and a brochure list with per-item Download buttons: https://www.lely.com/, https://www.lely.com/solutions/milking/
  - Inquiry-type selector on the contact form: https://www.gea.com/en/contact/
  - Dealer and location counts as trust signals: https://www.lely.com/about-lely/contact/
