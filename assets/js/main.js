document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.querySelector("[data-nav-toggle]");
  var navMenu = document.querySelector("[data-nav-menu]");
  var currentYearEl = document.getElementById("current-year");

  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      navMenu.classList.toggle("is-open");
    });

    navMenu.querySelectorAll("a[href^='#']").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-open");
      });
    });
  }

  document.querySelectorAll("a[href^='#']").forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var targetId = anchor.getAttribute("href").slice(1);
      if (!targetId) {
        return;
      }
      var target = document.getElementById(targetId);
      if (!target) {
        return;
      }
      event.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 72,
        behavior: "smooth"
      });
    });
  });
});
