# 06 — Divi 5 átültetési jegyzet

A statikus minták **nem** Divi-oldalak, de a szerkezetük szándékosan Divi-kompatibilis:
minden szekció → **Section**, minden konténer → **Row**, minden rács → oszlopok, minden komponens
→ Divi-modul + Custom CSS. Ez a dokumentum oldalanként és komponensenként adja meg a leképezést.

---

## 1. Globális előkészítés (egyszer, projektszinten)

1. **Divi → Theme Options → General → Custom CSS** (vagy gyermektéma `style.css`): másold be a
   `tokens.css` `:root{…}` változóit. Innentől a `var(--bh-*)` mindenhol elérhető.
2. **Divi → Theme Builder:** hozz létre globális **Header** és **Footer** sablont (lásd §3).
3. Töltsd fel a `assets/css/components.css` + `layout.css` + `base.css` tartalmát egy **globális
   CSS**-be (Theme Options Custom CSS, vagy egy „Code" modul a Theme Builder body-sablonjában,
   vagy gyermektéma). A `bh-` osztályok így minden Divi-modulon használhatók a „CSS ID & Classes →
   CSS Class" mezőn keresztül.
4. **Divi → Theme Options → General → Layout:** állítsd a tartalomszélességet ~1152 px-re
   (`--bh-container`), a gutter szélességet közepesre (a régi `et_pb_gutters3` megfelelője).
5. **Színek:** a Divi „Global Colors" közé vedd fel a paletta tagjait (primary `#7a3b9b`,
   primary-dark `#4d2463`, accent `#e7b008`, cream `#fbf8f3` stb.).
6. **Betűk:** Theme Customizer → Typography: törzs = a rendszer-sans (vagy self-hosted Open Sans),
   címsorok = ugyanaz erős súllyal; a serif lead-hez külön „Text" preset.

## 2. Oldalszintű átültetési terv

| Statikus oldal | Divi felépítés (Section → Row → modul) |
|---|---|
| `index.html` | **Hero**: Section(cream) → Row(2 oszlop) → bal: Text(eyebrow)+Heading+Text(lead)+Button-csoport+Code(stat-sor); jobb: Image (Custom CSS `bh-frame`). **Mi a Barnahus**: Section → Row(2 oszlop) → Text + Blurb/Text(idézet). **Hub**: Section(cream) → Row(3 oszlop) → 3× Blurb (vagy Text). **Pillérek**: Section → Row(4 oszlop) → 4× Blurb. **Blog**: Section(soft) → **Blog modul** (grid, 2 oszlop). **CTA**: Section(dark) → Row(2 oszlop) → Text + Text(tax-box). **Kapcsolat**: Section → Row(3 oszlop) → 3× Blurb. |
| `ez-a-barnahus.html` | **Page header**: Section(soft) → Row → Text(breadcrumb)+Heading+Text. **Intro+hub**: mint a főoldalon. **Szolgáltatás**: Section(cream) → Row(2 oszlop, kép balra). **Folyamat #1–#6**: Section → Row(1 oszlop) → Code modul (`<ol class="bh-process">`) **vagy** 6× Blurb. **Ki kérhet**: Section(soft) → Row(3 oszlop) → 3× Blurb (kör-ikon). **Mit javaslunk**: Section → Row(2 oszlop) → 2× Text (`bh-note`, `bh-important`). |
| `rolunk.html` | Page header; majd váltakozó Section-ök: bemutatkozó (Row 2 oszlop: Image+Text), kintsugi (Row 2 oszlop: Text+Blockquote), küldetés (Text `bh-note`), értékek (Code `bh-process` vagy 5× Blurb), jövőkép (Row 2 oszlop: 2× Blurb), támogatók (Image + felirat). |
| `blog.html` | Page header + **Blog modul** (grid, 2 oszlop) — a `bh-blog-card` stílus a Blog modul Custom CSS-ébe. |
| `blog/minta-bejegyzes.html` | **Theme Builder → Post sablon** (lásd §3). A törzs egyetlen **Text** modul `bh-article` osztállyal, vagy szakaszonkénti Text/Blockquote/Blurb. |
| `blog/kepbol-html-minta.html` | Ugyanaz a Post sablon. A 4 pillér = Row(4 oszlop, Blurb); a kritériumok #1–#5 = `bh-process` (Code) vagy 5× Blurb; az üzenetblokk = Text/Blockquote `bh-quote`. |

## 3. Theme Builder javaslat

- **Globális Header** (minden oldalra): Row(2 oszlop) → bal: logó (Image) + „Barnahus / Szombathely"
  (Text); jobb: **Menü modul** (a `bh-nav` stílusok a menü Custom CSS-ébe) + Button („Támogatás").
  A Divi beépített reszponzív mobilmenüje kiváltja a `main.js` hamburgert; a `bh-nav__link::after`
  aláhúzás-animáció a menü „Custom CSS → Menu Link"-jébe kerül.
- **Globális Footer**: Section(dark) → Row(3 oszlop) → márka+leírás / oldal-linkek (Menü vagy Text) /
  kapcsolat (Text). Alul Row(1 oszlop) → Text(`bh-footer__bottom`).
- **Blog sablon (archívum)**: Theme Builder → „All Archive pages" (vagy Blog/Category) → a tartalom-
  területre **Blog modul** grid layouttal, `bh-blog-card` Custom CSS-sel.
- **Bejegyzéssablon (single post)**: Theme Builder → „All Posts" → Post Title modul (a `bh-page-header`
  stílussal) + Dynamic Content (szerző, dátum → `bh-meta`) + Post Content modul (`bh-article`
  tipográfiával). A `bh-article` `max-width: 44rem` a Post Content Custom CSS-ébe.

## 4. Komponensenkénti modul-leképezés és Custom CSS

| Komponens | Divi modul | Custom CSS / megjegyzés |
|---|---|---|
| `bh-hero` | Section + Row(2 oszlop) | háttér = cream global color; jobb oszlop Image-re `bh-frame` osztály |
| `bh-frame` (papírlap) | Image modul + CSS Class `bh-frame` | a `::before/::after` rétegek a globális CSS-ből jönnek — **ezt tartsd meg Custom CSS-ként**, ne generáltatd Divivel |
| `bh-eyebrow` | Text modul, class `bh-eyebrow` | a `::before` okker vonal Custom CSS-ből |
| `bh-card` / hub | **Blurb** (cím+szöveg+link) | felső színes szegély (`border-top`) a Blurb Custom CSS-ébe; az `01/02/03` index Blurb „use icon" helyett Text |
| `bh-process__item` | Code modul (`<ol>`) **vagy** Blurb-sor | a `counter`-es `#1` szám Custom CSS-ben él; ha Blurb, a számot az ikonmezőbe írd |
| `bh-pillars` | Row(4 oszlop) → Blurb | a kör-szám = Blurb ikon vagy Number; mobilon Divi auto-stackel |
| `bh-quote` | Text / Blockquote modul | dark háttér + serif; ház-motívum = háttér-SVG vagy egy Code modul (inline SVG) |
| `bh-timeline` | Code modul (`<ol class="bh-timeline">`) | tiszta CSS-idővonal; alternatíva: Blurb-sor bal szegéllyel |
| `bh-note` / `bh-important` | Text modul, class | bal szegély + lágy háttér Custom CSS-ből |
| `bh-cta` + tax-box | Section(dark) + Row(2 oszlop) | a tax-box egy Text modul `bh-cta__taxbox` osztállyal |
| `bh-contact` | Row(3 oszlop) → Blurb | e-mail Blurb-re `overflow-wrap: anywhere` (hosszú cím tördelése!) |
| `bh-orgs` | Row(3 oszlop) → Blurb | sraffozott kör = Blurb ikon háttér Custom CSS-sel |

## 5. Képből HTML-be alakított tartalmak Divi-megvalósítása

- **Az izlandi modell** (`kepbol-html-minta`): a teljes cikk egyetlen **Post**-ként a Post sablonon,
  szakaszonként Divi-modulokra bontva (Text + Blurb-pillérek + Code-`bh-process`). **Ne** illeszd be
  újra a régi PNG-t — az indexelhetetlen. A forrásképet csak referenciaként tartsd meg.
- **Rólunk / egyesület:** statikus oldal Theme Builder body nélkül; a `bh-process` értékek 5× Blurbként
  is megépíthetők, ha a szerkesztő nem akar Code modult.
- **Szombathelyi szolgáltatások** és **magyar idővonal:** a következő körben teljes oldalként; a
  `bh-process` és `bh-timeline` Code-modulként a leggyorsabb, de Blurb-sorra is bontható.
- **Támogatói illusztráció:** marad **Image** modul, jó alt-tal; a névsort a megrendelő által
  hitelesítve érdemes szöveggé tenni (akkor a kép dekoratívvá válik).

## 6. CSS-osztálylista (amit a Diviben is használj)
`bh-section(+--cream/--soft/--accent/--dark/--tight)`, `bh-container(+--wide/--text)`, `bh-split`,
`bh-grid(+--2/--3/--auto)`, `bh-eyebrow`, `bh-lead`, `bh-prose`, `bh-btn(+--accent/--ghost)`,
`bh-arrow-link`, `bh-frame`, `bh-hatch`, `bh-card(+--accent/--link)`, `bh-note`, `bh-callout`,
`bh-important`, `bh-process(+--accent)`, `bh-process__item`, `bh-pillars`, `bh-quote(+--soft)`,
`bh-timeline`, `bh-blog-card`, `bh-meta`, `bh-article`, `bh-figure`, `bh-cta`, `bh-contact`,
`bh-orgs`, `bh-page-header`, `bh-breadcrumb`, `bh-footer`, `bh-review-flag`.

> **Aranyszabály:** a Divi által generált moduláris CSS helyett tartsd meg ezeket a `bh-` osztályokat
> és a `--bh-*` változókat. Így a dizájn egy helyen karbantartható, és nem áll vissza a régi
> világoskék Divi-alapértelmezésre.
