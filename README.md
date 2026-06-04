# Barnahus – statikus refaktor-minta

A [barnahus.hu](https://barnahus.hu) (WordPress + Divi 4.27.4) statikus tükrének auditja és egy
modern, hozzáférhető, **Divi 5-be átültethető** refaktor-mintarendszer. Lila vezérszín, okker
akcentus, valódi helyszíni fotók — nem generikus sablon.

## Megnyitás helyileg
```bash
cd barnahus_refaktor
python3 -m http.server 8088
# böngésző: http://localhost:8088/index.html
```
A fájlok relatív útvonalakat használnak, így `file://` megnyitással is működnek.

## Szerkezet
```
index.html              Főoldal
ez-a-barnahus.html      Hub + szombathelyi szolgáltatás (folyamat, "ki kérhet", teendők)
rolunk.html             Egyesület (képből HTML: küldetés, értékek, jövőkép, kintsugi)
blog.html               Bloglista
blog/
  minta-bejegyzes.html             Eredetileg is normál HTML bejegyzés
  a-pedofilia-ellen-mit-tehetunk.html  Bejegyzés (érzékeny tartalom, figyelmeztetéssel)
  kepbol-html-minta.html           Infografika → valódi HTML cikk (zászlóshajó-demó)
assets/
  css/  tokens, base, layout, components, pages    (betöltési sorrend ugyanez)
  js/   main.js  (mobilmenü + opcionális gyors kilépés)
  img/  logo, photos, infographics-source (referencia), converted, icons, fonts
docs/
  01_kutatas.md  02_audit.md  03_kepbol_html_terv.md  04_designrendszer.md
  05_megvalositasi_terv.md  06_divi5_atultetesi_jegyzet.md  07_validacio.md
```

## Designrendszer dióhéjban
- Tokenvezérelt CSS, egyetlen `bh-` névtér, komponensalapú (lásd `docs/04`).
- Színek: `--bh-primary #7a3b9b`, `--bh-primary-dark #4d2463`, `--bh-accent #e7b008`,
  `--bh-cream #fbf8f3`.
- Nincs Tailwind/Bootstrap/UI-kit, nincs CDN, nincs külső font/hotlink.
- Hozzáférhetőség: szemantikus HTML5, 1 h1/oldal, fókuszállapotok, `prefers-reduced-motion`,
  nyomtatási stílus.

## Fontos
- Az eredeti tükör (`../BARNAHUS_MIRROR/`) csak olvasott referencia — nem módosul.
- A `[ELLENŐRIZENDŐ]` / `.bh-review-flag` jelölésű tartalmak emberi ellenőrzést igényelnek
  (lásd `docs/03` és `docs/07`).
