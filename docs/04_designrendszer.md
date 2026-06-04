# 04 — Designrendszer (Divi 5-be átültethető)

Saját, komponensalapú, **tiszta CSS** rendszer. Nincs Tailwind / Bootstrap / külső UI-kit / CDN.
Minden a `assets/css/` öt fájljában él, és a Divi 5 logikáját követi.

| Fájl | Szerep | Divi 5 megfelelő |
|---|---|---|
| `tokens.css` | Designtokenek (CSS-változók) | Globális változók / preset-értékek |
| `base.css` | Reset, alaptipográfia, a11y | Theme alap, body szövegstílus |
| `layout.css` | Szekció, konténer, rács | Section / Row / oszlopstruktúra |
| `components.css` | Márkakomponensek | Modulok + Custom CSS osztályok |
| `pages.css` | Oldalspecifikus kivételek | Oldal-szintű „Custom CSS" |

Betöltési sorrend a HTML-ben **mindig**: `tokens → base → layout → components → pages`.

---

## 1. Színpaletta (mintavételezve a logóból és infografikákból)

| Token | Érték | Szerep |
|---|---|---|
| `--bh-primary` | `#7a3b9b` | fő lila — gombok, keretek, linkek |
| `--bh-primary-dark` | `#4d2463` | mélylila — footer, erős címsorok, idézetblokk |
| `--bh-primary-700` | `#5f2d7d` | hover/aktív |
| `--bh-primary-soft` | `#ece4f3` | világos lila wash háttér |
| `--bh-primary-200` | `#d7c4e6` | halvány lila (papírlap-réteg, motívum) |
| `--bh-accent` | `#e7b008` | okker/mustár — kiemelés, pötty, callout |
| `--bh-accent-dark` | `#c2900a` | okker hover/kontraszt |
| `--bh-accent-soft` | `#faf0cf` | halvány sárga háttér |
| `--bh-ink` | `#2b2330` | fő szöveg (lilába hajló sötét) |
| `--bh-muted` | `#5d5566` | másodlagos szöveg |
| `--bh-surface` | `#ffffff` | alap felület |
| `--bh-cream` | `#fbf8f3` | meleg krém szekcióháttér |
| `--bh-border` | `#e6dfec` | finom keret |
| `--bh-important` | `#b23a48` | fontos/figyelmeztető — **visszafogott**, meleg piros |

**Kontraszt:** a `--bh-ink` fehéren és a `#fff` mélylilán (`--bh-primary-dark`) is WCAG AA felett
van; az okker (`--bh-accent`) **csak sötét szöveggel** vagy nagy méretben használandó (sárgán fehér
szöveg tilos). A `--bh-primary` fehéren AA testszövegre megfelelő.

## 2. Tipográfia

- **Sans (törzs):** `--bh-font-sans` — humanista rendszerfont-stack (`system-ui`…). Offline, gyors.
- **Serif (lead/idézet):** `--bh-font-serif` — Georgia-alapú stack; ez adja az „emberi, szerkesztett"
  hangot, és megkülönböztet a generikus, csak-sans SaaS-oldalaktól.
- **Skála:** `--bh-fs-100 … --bh-fs-800`, `clamp()`-pel, így mobilon sem törik el és nem lesz apró.
- **Szerepek:** `h1` = `--bh-fs-800` (hero), `h2` = 700, `h3` = 600; `.bh-lead`/`.bh-article__lead`
  = serif `--bh-fs-500`; `.bh-meta`, `.bh-contact__label` = `--bh-fs-100/200` (apró intézményi info);
  számozott elemek: `.bh-process__item::before`, `.bh-pillars__num` (tabuláris számok).

> **Élesítési opció:** ha a brandhez közelebbi tipográfia kell, self-hostolható **Open Sans**
> (eredeti törzsfont) és egy meleg **serif** (pl. Fauna One/­Bitter) a `assets/fonts/`-ból,
> `@font-face`-szel, `font-display: swap`-pal. A token-stack ekkor csak a változó értékét cseréli —
> a komponensekhez nem kell nyúlni.

## 3. Komponenskatalógus

| Komponens | Osztály | Leírás |
|---|---|---|
| Navigáció | `bh-header`, `bh-nav`, `bh-nav__link`, `bh-nav-toggle` | Sticky fejléc, reszponzív mobilmenü (JS-toggle, Esc-zárás) |
| Gyors kilépés (opc.) | `bh-quickexit` `[data-quick-exit]` | Trauma-informált; alapból nincs beépítve |
| Hero | `bh-hero`, `bh-hero__title`, `bh-hero__motif` | Aszimmetrikus, ház-motívummal |
| Aloldal-fejléc | `bh-page-header`, `bh-breadcrumb` | Cím + morzsa |
| Eyebrow | `bh-eyebrow` | Szekció-felülcím okker vonallal |
| Lead | `bh-lead`, `bh-article__lead` | Serif bevezető |
| Prose | `bh-prose` | Folyószöveg-tördelés, egyedi listajelölő |
| Info-kártya | `bh-card`, `bh-card__icon`, `bh-card--link` | Felül színes szegély, opcionális link-kártya |
| Papírlap-keret | `bh-frame` | Egymásra csúszó keretes lapok (kép köré) |
| Sraffozás | `bh-hatch` | Ferde csíkos dekor-háttér |
| Note / Callout / Important | `bh-note`, `bh-callout`, `bh-important` | Kiemelt info-dobozok (visszafogott figyelmeztetés) |
| Folyamat | `bh-process`, `bh-process__item` | Számozott lépéslista (`#1…#n`, `counter`) |
| Pillérek | `bh-pillars`, `bh-pillars__item` | Egyenrangú oszlopok (pl. 4 cél) |
| Idézet | `bh-quote`, `bh-quote--soft` | Üzenetblokk ház-motívummal |
| Idővonal | `bh-timeline`, `bh-timeline__item` | Dátumozott mérföldkövek |
| Blogkártya | `bh-blog-card`, `bh-meta` | Lista-elem kép + kivonat |
| Cikk | `bh-article` | Olvasónézet (44rem sáv) |
| Figure | `bh-figure` | Kép + felirat |
| CTA | `bh-cta`, `bh-cta__taxbox` | Felhívássáv (1% adó / adószám) |
| Kapcsolat | `bh-contact`, `bh-contact__item` | E-mail/telefon blokkok |
| Szervezet-körök | `bh-orgs` | „Ki kérhet vizsgálatot" három kör |
| Lábléc | `bh-footer` | Mélylila, 3 hasáb + alsó sor |

**Osztálynév-konvenció:** `bh-` előtag, BEM-szerű `__elem` és `--modosito`. Rendezett, előre
átültethető — nincs generált/kaotikus név.

## 4. Layout-segédek
- `bh-section` (+ `--cream`/`--soft`/`--accent`/`--dark`/`--tight`) — szekció + háttér.
- `bh-container` (+ `--wide`/`--text`) — konténer-szélességek.
- `bh-grid` (+ `--2`/`--3`/`--auto`), `bh-split` (aszimmetrikus 2 hasáb), `bh-stack`.
- Töréspontok: 40rem (kis tablet), 52rem (tablet), 60rem (kis desktop). Mobil-first.

## 5. Hozzáférhetőség beépítve
- `:focus-visible` látható fókusz minden interaktív elemen.
- `.bh-skip` ugró-link, `.bh-visually-hidden` segéd.
- `prefers-reduced-motion`: minden animáció/átmenet kikapcsol.
- Színkontraszt AA-célzott; az okker csak sötét szöveggel.
- Nyomtatási alapstílus (`@media print`).

## 6. Divi 5-kompatibilitási megjegyzések (komponensenként)

| Komponens | Divi 5 leképezés |
|---|---|
| `bh-section` | **Section** (háttérszín = `--cream`/`--soft`/`--dark` preset) |
| `bh-container` + `bh-split` | **Row** 2 oszloppal (1.05/0.95 arány), gutter közepes |
| `bh-grid--3` | **Row** 3 oszloppal (vagy 1 oszlop + Blurb-ismétlés) |
| `bh-card` / hub-kártya | **Blurb modul** vagy Row-oszlop + Text; felső szegély = Custom CSS |
| `bh-process__item` | **Blurb** sor (szám = ikonhely) vagy Text modul `counter` Custom CSS-sel |
| `bh-pillars` | **Row** 4 oszloppal, oszloponként Blurb |
| `bh-quote` | **Text** vagy **Blockquote** modul `--dark` szekcióban; ház-motívum = háttérkép/Code |
| `bh-timeline` | **Code modul** (a `<ol>` + Custom CSS), vagy moduláris Blurb-sor |
| `bh-blog-card` lista | **Blog modul** (grid layout) testreszabott Custom CSS-sel |
| `bh-cta` | **Section** `--dark` + Row (2 oszlop: szöveg + tax-box Text modul) |
| `bh-contact` | **Row** 3 oszlop, oszloponként Blurb (ikon + érték) |
| header/footer | **Theme Builder** globális Header/Footer (lásd `06_…`) |

**Custom CSS, amit érdemes a Diviben is megtartani** (a generált helyett): a `bh-frame`
(papírlap-réteg `::before/::after`), a `bh-process` `counter`-e, a `bh-eyebrow::before` vonal, a
`bh-hatch` sraffozás, és a `--bh-*` változók a Divi „Website CSS"/globális változók közé másolva.

A teljes, oldalankénti és modulszintű átültetés a **`06_divi5_atultetesi_jegyzet.md`**-ben.
