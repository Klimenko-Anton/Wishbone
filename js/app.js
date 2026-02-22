/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/files/functions.js
function menuOpen() {
  window.addEventListener("load", function () {
    document.addEventListener("click", function (e) {
      const targetElement = e.target;
      if (!targetElement.closest(".icon-menu")) return;
      if (targetElement.closest(".icon-menu")) {
        document.documentElement.classList.toggle("menu-open");
        document.documentElement.classList.toggle("lock");
        targetElement.setAttribute("aria-label", "Open menu");
        if (document.documentElement.classList.contains("menu-open")) {
          targetElement.setAttribute("aria-label", "Close menu");
        }
      }
    });
  });
}
;// CONCATENATED MODULE: ./src/js/app.js

menuOpen();

/******/ })()
;