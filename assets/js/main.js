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

  var resourcesGrid = document.getElementById("resources-grid");
  if (resourcesGrid) {
    var resourcesData = [
      {
        title: "Lancement d'Academia",
        category: "Academia",
        audience: "Étudiants & familles",
        description: "Une plateforme unique pour retrouver les offres de formations, cours de soutien, préparations de concours et opportunités d'emploi proposées via Nexiom Group.",
        image: "assets/img/academia04.png",
        imageAlt: "Illustration d'offres de formation pour les étudiants",
        ctaLabel: "Être informé du lancement",
        ctaHref: "#contact"
      },
      {
        title: "Programme partenariats universités privées",
        category: "Partenariats",
        audience: "Universités & centres de formation",
        description: "Nexiom Group structure la diffusion de vos programmes via Academia et accompagne la qualification des candidatures issues de vos campagnes.",
        image: "assets/img/Coserfa.jpg",
        imageAlt: "Illustration de partenariat entre universités et Nexiom Group",
        ctaLabel: "Devenir partenaire",
        ctaHref: "#contact"
      },
      {
        title: "Automatisation de vos réseaux sociaux",
        category: "Nexiom AI Studio",
        audience: "Entreprises & institutions",
        description: "Nexiom AI Studio assiste vos équipes en planifiant les publications et en pilotant vos réseaux sociaux de manière coordonnée.",
        image: "assets/img/nexiom02.png",
        imageAlt: "Illustration d'automatisation des réseaux sociaux",
        ctaLabel: "Discuter avec Nexiom",
        ctaHref: "#contact"
      },
      {
        title: "Opportunités pour étudiants et jeunes diplômés",
        category: "Opportunités",
        audience: "Étudiants & jeunes diplômés",
        description: "Sélection d'offres de stages, d'emplois et de programmes d'appui, relayées via nos canaux de communication et centralisées sur Academia.",
        image: "assets/img/nexiom03.png",
        imageAlt: "Illustration d'opportunités pour les étudiants",
        ctaLabel: "Recevoir des informations",
        ctaHref: "#contact"
      }
    ];

    resourcesData.forEach(function (item) {
      var article = document.createElement("article");
      article.className = "card";

      var imageEl = null;
      if (item.image) {
        imageEl = document.createElement("img");
        imageEl.className = "resource-image";
        imageEl.src = item.image;
        imageEl.alt = item.imageAlt || item.title;
        imageEl.loading = "lazy";
      }

      var meta = document.createElement("p");
      meta.className = "resource-meta";
      meta.textContent = item.audience;

      var tag = document.createElement("span");
      tag.className = "resource-tag";
      tag.textContent = item.category;

      var titleEl = document.createElement("h3");
      titleEl.textContent = item.title;

      var desc = document.createElement("p");
      desc.textContent = item.description;

      var link = document.createElement("a");
      link.className = "resource-link";
      link.href = item.ctaHref;
      link.textContent = item.ctaLabel;

      if (imageEl) {
        article.appendChild(imageEl);
      }
      article.appendChild(tag);
      article.appendChild(titleEl);
      article.appendChild(meta);
      article.appendChild(desc);
      article.appendChild(link);

      resourcesGrid.appendChild(article);
    });
  }

  var mediaSlider = document.querySelector("[data-media-slider]");
  if (mediaSlider) {
    var slides = mediaSlider.querySelectorAll(".media-slide");
    var currentIndex = 0;
    var slideCount = slides.length;
    var intervalMs = 8000;

    function showSlide(index) {
      if (!slideCount) return;
      for (var i = 0; i < slideCount; i++) {
        slides[i].classList.toggle("is-active", i === index);
      }
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      showSlide(currentIndex);
    }

    if (slideCount > 1) {
      setInterval(nextSlide, intervalMs);
    }
  }

  var sectionIds = ["hero", "resources", "about", "products", "services", "academia", "contact"];
  var navLinksMap = {};
  sectionIds.forEach(function (id) {
    var link = document.querySelector('.site-nav a[href="#' + id + '"]');
    if (link) {
      navLinksMap[id] = link;
    }
  });

  function setActiveNav(id) {
    for (var key in navLinksMap) {
      if (!Object.prototype.hasOwnProperty.call(navLinksMap, key)) continue;
      if (key === id) {
        navLinksMap[key].classList.add("is-active");
      } else {
        navLinksMap[key].classList.remove("is-active");
      }
    }
  }

  function updateActiveSection() {
    var currentId = "hero";
    var offset = 96;

    sectionIds.forEach(function (id) {
      var section = document.getElementById(id);
      if (!section) return;
      var rect = section.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom >= offset) {
        currentId = id;
      }
    });

    setActiveNav(currentId);
  }

  if (Object.keys(navLinksMap).length > 0) {
    window.addEventListener("scroll", updateActiveSection);
    updateActiveSection();
  }
});
