"use strict";

/* =========================================
   Script principal
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada correctamente ✅");

  // Navegación suave entre secciones
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
