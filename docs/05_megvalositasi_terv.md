# 05 — Megvalósítási terv

## 1. Mit építünk meg első körben?
Hat reprezentatív, teljes, hordozható statikus HTML-oldalt + a közös designrendszert:

1. `index.html` — főoldal
2. `ez-a-barnahus.html` — hub-oldal a modell rövid bemutatásával
3. `rolunk.html` — egyesület (képből HTML, intézményi tartalom)
4. `blog.html` — bloglista
5. `blog/minta-bejegyzes.html` — eredetileg is normál HTML bejegyzés
6. `blog/kepbol-html-minta.html` — **infografika → valódi HTML cikk** (zászlóshajó-demó)

## 2. Miért pont ezeket?
- Lefedik az **összes eltérő sablontípust**: hero-főoldal, hub, intézményi szövegoldal, lista,
  két bejegyzéstípus.
- Tartalmazzák a megbízás **kiemelt problémáját**: a képbe zárt tartalom HTML-esítését (rolunk +
  kepbol-html-minta), valódi adattal.
- Kevés, de **alapos** oldal — nem aprózzuk el (a megbízás kérése szerint).

## 3. Milyen komponenseket készítünk?
Lásd `04_designrendszer.md` §3. A mintacsomag mindegyiket használja legalább egyszer: nav/footer,
hero, page-header, card/hub-card, note/callout/important, process, pillars, quote, timeline (terv),
blog-card, article, figure, cta, contact, orgs.

## 4. Mely képeket használjuk? (átmásolva `assets/img/`)
logo: `barnahus-logo.png`, `barnahus-haz-motivum.svg`;
photos: `folyoso-varo` (hero), `alapitok-molino` (rólunk), `europai-mozgalom-molino`,
`homokterapia`, `vizsgalo-szoba`, `monitoring-pult`, `kamera-szoba`, `maci-folyoso`,
`tamogatoi-illusztracio`, `kez-a-kezben`.

## 5. Mely képeket alakítjuk HTML-lé?
- **Izlandi modell** infografika → `blog/kepbol-html-minta.html` (teljes).
- **Rólunk / egyesület** infografika → `rolunk.html` (teljes).
- **Szombathelyi szolgáltatások** infografika → teaser az `ez-a-barnahus.html`-ben (folyamat +
  „ki kérhet" + telefonos teendők); teljes oldal a következő körben.
- **Magyar megvalósítás** idővonal → `bh-timeline` komponens, **terv** és kiolvasott eleje
  dokumentálva (`03_…` D); teljes oldal a következő körben.
- **Támogatói illusztráció** → **marad kép** (rolunk), jó `alt`-tal.

## 6. CSS-stratégia
- Tokenek → base → layout → komponensek → oldalak (5 fájl), egyetlen `bh-` névtér.
- Mobil-first, `clamp()`-skála, CSS Grid; nincs build-lépés, nincs külső függőség.
- Minden szín/tér/sugár tokenből; a Divi 5 globális változókra 1:1 átvihető.

## 7. Kockázatok
- **OCR-bizonytalanság** az infografikák egyes részein → `[ELLENŐRIZENDŐ]` jelölés a docs-ban és
  `.bh-review-flag` a HTML-ben.
- Érzékeny téma (konkrét ügy a blogban) → tartalmi jóváhagyás kell.
- Szervezeti nevek / elérhetőségek elavulhattak → élesítés előtt ellenőrzés.
- Rendszerfont-stack platformfüggő megjelenés → opcionális self-hosted font élesben.

## 8. Mi marad későbbi munkára?
- Teljes „szolgáltatások" és „magyar megvalósítás" oldal.
- `kapcsolat` (térkép külső embed nélkül / statikus térképkép), `tamogass`, `dokumentumtar`.
- A YouTube-rajzfilm beágyazás adatvédelmi szempontból megfontolt megoldása (facade/klikk-to-load).
- Self-hosted fontok, WebP/AVIF képkonverzió, teljes oldalkészlet, valódi Divi 5 felépítés.

## 9. Mit kell embernek ellenőriznie?
- Minden `[ELLENŐRIZENDŐ]` tétel (`03_…`, `07_…`).
- A támogatói illusztráció névsora.
- Telefonszámok, e-mail, adószám, szervezeti/fenntartói nevek aktualitása.
- A blogposztok érzékeny részeinek megtartása / esetleges tartalmi figyelmeztetés.
- Gyors-kilépés gomb bevezetésének döntése.
