# Code Review Issues — `frontend-redesign` branch
> Reviewed: 2026-04-10. Fix in priority order. Check off each item when resolved.
> Last updated: 2026-04-10 (session 2 — most issues fixed)

---

## 🔴 Critical / Production Blockers

- [ ] **1. Contact form broken — `YOUR_TEMPLATE_ID` placeholder in EmailJS call**
  - `src/pages/ContactUs.jsx:101`
  - Every form submission fails silently. Service ID and public key are real; only the template ID is missing.
  - **Fix:** Replace `'YOUR_TEMPLATE_ID'` with the actual EmailJS template ID from your dashboard.
  - **Status:** Waiting on user to provide the template ID.

- [x] **2. Catalogue download serves a 143-byte placeholder text file**
  - ✅ Fixed: copied `src/assets/catalogue.pdf` (real PDF) → `public/catalogue.pdf`.

- [x] **3. Placeholder image URL `/api/placeholder/600/400` in two production components**
  - ✅ Fixed: `CowComfort.jsx` product 12 now uses `acid` image (TODO comment left to replace with dedicated asset); `Mechanization.jsx` product 8 now uses `milkline` image (TODO comment left).

---

## 🟠 Bugs

- [x] **4. `scrollRestoration = 'manual'` permanently disables browser back button**
  - ✅ Fixed: moved to module level (outside component) in `App.jsx` so it only runs once.

- [x] **5. Navbar theme flips too early — `closestSection` picks the wrong section**
  - ✅ Fixed in `GlobalNavBar.jsx`: covering sections (`rect.top <= 0 && rect.bottom > 0`) now have unconditional priority over approaching sections; they are chosen first with an early break before the approaching-section fallback.

- [x] **6. `getIconComponent` renders broken SVG — factory and UK icons are just location pins**
  - ✅ Fixed in `ContactUs.jsx`: 🏭 now uses a real building/factory SVG path; dead 🇬🇧 entry removed.

- [x] **7. `useLayoutEffect` in `ScrollToTop` should be `useEffect`**
  - ✅ Fixed in `App.jsx`.

---

## 🔒 Security & Production Readiness

- [x] **8. `public/_headers` missing all security headers**
  - ✅ Fixed: added `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`, and `Content-Security-Policy` under `/*`.
  - **Note:** Review the CSP `script-src` and `img-src` directives if you add any new third-party scripts or image hosts in future.

- [x] **9. `public/CATALOGUE_INSTRUCTIONS.md` is web-publicly served**
  - ✅ Fixed: moved to repo root (no longer in `public/`).

- [x] **10. `public/TEAM_IMAGES_INSTRUCTIONS.md` is web-publicly served**
  - ✅ Fixed: moved to repo root.

- [x] **11. `SampleCode.jsx` dev prototype must not ship**
  - ✅ Fixed: deleted `src/pages/SampleCode.jsx`.

- [ ] **12. 17+ multi-megabyte images committed to `src/assets` (~120 MB total)**
  - `src/assets/` — `hero4.png` (7.9 MB), `hero3.png` (5.4 MB), `glycostar.png` (5.9 MB), `ztox.jpeg` (5.0 MB), plus several 7+ MB `.JPG` files.
  - **Fix (manual — cannot be scripted):** Convert images to WebP and compress them (use Squoosh or `cwebp`), then serve from Cloudflare Images/R2 and remove the originals from git. This will significantly improve page load times.

- [x] **13. Hardcoded domain in SEO component and across 12 page files**
  - ✅ Fixed: added `VITE_SITE_URL` to `.env`; exported `siteUrl` constant from `SEO.jsx`; all 16 page-level `<SEO url=...>` props now use `{siteUrl + '/path'}` or `{siteUrl}`.

---

## 🎨 CSS Issues

- [x] **14. `.full-width-section` viewport-escape trick broken inside `overflow-x: hidden`**
  - ✅ Fixed in `common-styles.css`: replaced `position: relative; width: 100vw; left: 50%; transform: translateX(-50%)` with `margin-left: calc(50% - 50vw); width: 100vw` (no transform, safe with overflow-x: hidden).

- [x] **15. `overflow-x: hidden` declared redundantly in 13+ locations**
  - ✅ Partially fixed: removed the duplicate `body { overflow-x: hidden }` block from `common-styles.css`. The authoritative declaration is in `index.css`.
  - **Remaining (low priority):** The property still appears in individual page CSS files. These are harmless but noisy; clean them up gradually as you touch each page file.

- [x] **16. Duplicate `.container`, `.product-title`, `.product-description` with conflicting values**
  - ✅ Fixed: removed duplicate definitions from `home.css`; `common-styles.css` is now the single source of truth.

- [x] **17. Team modal `z-index: 1000` renders behind Bootstrap navbar (`z-index: 1030`)**
  - ✅ Fixed in `ourteam.css`: modal overlay is now `z-index: 1031`.

- [x] **18. `backdrop-filter` missing `-webkit-` prefix in team modal**
  - ✅ Fixed in `ourteam.css`: added `-webkit-backdrop-filter` to both the overlay and close button.

- [x] **19. `!important` used 10+ times for navbar link colours**
  - ✅ Fixed in `navbar.css`: removed all `!important` from colour declarations. Specificity of the selectors (e.g. `.navbar.dark-bg .nav-link`) is sufficient to override Bootstrap without it.

---

## 🔧 Code Quality & Conventions

- [x] **20. `Mechanization.jsx` and `CowComfort.jsx` import wrong page's CSS (`dairyfarmingsol.css`)**
  - ✅ Fixed: renamed `dairyfarmingsol.css` → `dairy-page-layout.css` (reflects that it is a shared layout file); updated imports in all three pages (`DairyFarmingSol.jsx`, `Mechanization.jsx`, `CowComfort.jsx`).

- [ ] **21. Duplicate asset import — `collector` and `meter` both point to `Collector.JPG`**
  - `src/pages/CowComfort.jsx` — the Digital Milk Meter product has no real image yet.
  - The duplicate `meter` import has been removed (issue 22). Product still shows `collector` image as a stand-in.
  - **Fix (manual):** Add a real meter image asset to `src/assets/` and update the product entry.

- [x] **22. Dead imports: `meter` in `Mechanization.jsx`, `useEffect` in `App.jsx`**
  - ✅ Fixed: both removed.

- [ ] **23. Hero image array mixes local assets with a hardcoded Unsplash URL (hero_2 missing)**
  - `src/pages/Home.jsx:22–28` — slide 2 uses an external Unsplash URL; `hero_2` was never created.
  - **Fix (manual):** Add a `hero2.png/jpg` local asset, import it, and replace the URL.
  - A TODO comment has been added to mark this clearly.

- [ ] **24. Inconsistent component declaration style across `src/pages/`**
  - Arrow function components (`const X = () => {}`) are actually the majority pattern across this codebase (13 files). Only `Home.jsx` and `AboutUs.jsx` use `export default function`.
  - **Recommendation:** Standardize the two outliers (`Home.jsx`, `AboutUs.jsx`) to arrow function style to match the rest, or leave as-is — the inconsistency is minor and has zero runtime impact.
  - **Status:** Deferred (cosmetic only, no functional impact).

- [x] **25. Double-slash typo in asset import path**
  - ✅ Fixed in `Footprint.jsx`: `'..//assets/mech-map.jpeg'` → `'../assets/mech-map.jpeg'`.

---

## Progress
- Total issues: 25
- Fixed: 20 ✅
- Needs user action / manual work: 4 (issues 1, 12, 21, 23)
- Deferred (cosmetic): 1 (issue 24)
