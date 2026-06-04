/* ============================================================
   Barnahus refaktor — main.js
   Csak a feltétlenül szükséges, progresszív fejlesztésű viselkedés.
   Nincs külső függőség, nincs CDN. Mobilmenü + (opcionális) gyors kilépés.
   ============================================================ */
(function () {
  "use strict";

  /* --- Mobil navigáció --- */
  var toggle = document.querySelector(".bh-nav-toggle");
  var nav = document.getElementById("bh-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });

    // Esc zárja a menüt
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.getAttribute("data-open") === "true") {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });

    // Link kattintásra zárás (mobilon)
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && window.matchMedia("(max-width: 60rem)").matches) {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* --- Opcionális gyors kilépés (trauma-informált) ---
     A gomb csak akkor aktív, ha jelen van a DOM-ban (alapból nincs a mintában). */
  var exitBtn = document.querySelector("[data-quick-exit]");
  if (exitBtn) {
    exitBtn.addEventListener("click", function () {
      // Aktuális oldal lecserélése, hogy a "vissza" gomb se vezessen ide.
      window.location.replace(exitBtn.getAttribute("data-quick-exit") || "https://www.google.hu/");
    });
  }
})();
