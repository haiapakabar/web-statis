// Feather icons
feather.replace();

// Sidebar & hamburger
const hamburgerMenu = document.getElementById("hamburgerMenu");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

hamburgerMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  sidebar.classList.add("show");
});

closeSidebar.addEventListener("click", function (e) {
  e.stopPropagation();
  sidebar.classList.remove("show");
});

document.addEventListener("click", function (e) {
  if (!sidebar.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    sidebar.classList.remove("show");
  }
});

// Active menu otomatis
document.querySelectorAll(".nav-menu a").forEach((link) => {
  const linkPath = link.getAttribute("href").split("?")[0].split("#")[0];
  const rawCurrent = window.location.pathname.split("/").pop() || "index.html";
  const currentPath = rawCurrent.startsWith("genre") ? "film.html" : rawCurrent;

  if (linkPath === currentPath) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

function initGenreDropdown(initialGenre = "Film") {
  const genreBtn = document.getElementById("genreBtn");
  const genreMenu = document.getElementById("genreMenu");
  const genreUnderline = document.querySelector(".genre-underline");
  const menuLinks = document.querySelectorAll(".genre-menu a");

  if (!genreBtn || !genreMenu || !genreUnderline) {
    return initialGenre;
  }

  let currentGenre = initialGenre === "Pilih Genre" ? "Film" : initialGenre;
  const savedGenre = localStorage.getItem("selectedGenre");
  if (savedGenre && savedGenre !== "Pilih Genre") {
    currentGenre = savedGenre;
  } else if (initialGenre === "Film" && typeof getRandomGenre === "function") {
    const randomGenre = getRandomGenre();
    currentGenre = randomGenre.label;
  }

  genreUnderline.textContent = currentGenre;

  menuLinks.forEach((link) => {
    link.classList.toggle("active", link.textContent.trim() === currentGenre);
  });

  genreBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    genreMenu.classList.toggle("show");
    genreBtn.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!genreMenu.contains(e.target) && !genreBtn.contains(e.target)) {
      genreMenu.classList.remove("show");
      genreBtn.classList.remove("active");
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const selectedGenre = this.textContent.trim();
      localStorage.setItem("selectedGenre", selectedGenre);
      genreUnderline.textContent = selectedGenre;

      menuLinks.forEach((item) => {
        item.classList.remove("active");
      });
      this.classList.add("active");

      genreMenu.classList.remove("show");
      genreBtn.classList.remove("active");

      window.location.href = this.getAttribute("href");
    });
  });

  return currentGenre;
}

let heroTimer;
let hitsSwiper;
let upcomingSwiper;

function createFilmSlide(film) {
  const slug = encodeURIComponent(film.slug);
  const poster = film.poster || "";
  const altText = film.title || "Film poster";

  return `
    <div class="swiper-slide">
      <a class="film-card" href="film-detail.html?slug=${slug}">
        <img src="${poster}" alt="${altText}" />
        <div class="film-title">${film.title}</div>
      </a>
    </div>`;
}

function renderSlides(section, wrapper, films) {
  if (!wrapper) {
    return;
  }

  const entries = films.filter((film) => film.section === section).slice(0, 10);
  wrapper.innerHTML = entries.length
    ? entries.map((film) => createFilmSlide(film)).join("")
    : `
      <div class="swiper-slide">
        <div class="film-title">Belum ada film untuk kategori ini.</div>
      </div>`;
}

function renderTrendingCards() {
  const grid = document.getElementById("trendingGrid");
  if (!grid || typeof filmCatalog === "undefined") {
    return;
  }

  const hits = filmCatalog
    .filter((film) => film.section === "hits")
    .slice(0, 3);
  if (!hits.length) {
    grid.innerHTML = `<p class="trending-empty">Belum ada data trending.</p>`;
    return;
  }

  const highlightFilm = hits[0];
  const sides = hits.slice(1);
  const layout = [];
  if (sides[0]) {
    layout.push(sides[0]);
  }
  layout.push(highlightFilm);
  if (sides[1]) {
    layout.push(sides[1]);
  }

  const createInCard = (film) => {
    const isHighlight = film.slug === highlightFilm.slug;
    const rank = hits.findIndex((item) => item.slug === film.slug) + 1;
    return `
      <a class="trending-card ${isHighlight ? "highlight" : "side"}"
         href="film-detail.html?slug=${encodeURIComponent(film.slug)}">
        <div class="card-image-wrapper">
          <img src="${film.poster || ""}" alt="${film.title}" />
          <span class="rank-badge rank-${rank}">${rank}</span>
        </div>
        <p>${film.title}</p>
      </a>`;
  };

  grid.innerHTML = layout.map((film) => createInCard(film)).join("");
}

function initHeroSlider() {
  if (typeof window === "undefined") {
    return;
  }

  const slider = document.querySelector(".hero-slider");
  const slides = slider
    ? Array.from(slider.querySelectorAll(".hero-slide"))
    : [];
  const dots = Array.from(document.querySelectorAll(".hero-dot"));
  if (!slider || !slides.length) {
    return;
  }

  let activeIndex = slides.findIndex((slide) =>
    slide.classList.contains("active"),
  );
  if (activeIndex === -1) {
    activeIndex = 0;
  }

  const setSlide = (index) => {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === index);
    });
    dots.forEach((dot, idx) => dot.classList.toggle("active", idx === index));
  };

  const goToNext = () => {
    activeIndex = (activeIndex + 1) % slides.length;
    setSlide(activeIndex);
  };

  const startAuto = () => {
    clearInterval(heroTimer);
    heroTimer = setInterval(goToNext, 5500);
  };

  const stopAuto = () => {
    clearInterval(heroTimer);
  };

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      activeIndex = idx;
      setSlide(activeIndex);
      startAuto();
    });
  });

  slider.addEventListener("mouseenter", stopAuto);
  slider.addEventListener("mouseleave", startAuto);

  setSlide(activeIndex);
  startAuto();
}

function renderGenreSliders(genreLabel) {
  if (typeof filterFilmsByGenre !== "function") {
    return;
  }

  const hitsWrapper = document.querySelector(".hits-swiper .swiper-wrapper");
  const upcomingWrapper = document.querySelector(
    ".upcoming-swiper .swiper-wrapper",
  );
  if (!hitsWrapper || !upcomingWrapper) {
    return;
  }

  const normalizedGenre =
    typeof normalizeGenreLabel === "function"
      ? normalizeGenreLabel(genreLabel)
      : genreLabel;
  const filtered = filterFilmsByGenre(normalizedGenre);
  renderSlides("hits", hitsWrapper, filtered);
  renderSlides("upcoming", upcomingWrapper, filtered);
}

function initializeSwipers() {
  if (!document.querySelector(".hits-swiper") || typeof Swiper !== "function") {
    return;
  }

  const sharedOptions = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    loop: true,
    spaceBetween: 10,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 180,
      modifier: 1.5,
      slideShadows: false,
      scale: 1.1,
    },
  };

  const hitsOptions = Object.assign({}, sharedOptions, {
    pagination: {
      el: ".hits-swiper .swiper-pagination",
      clickable: true,
    },
    speed: 520,
  });

  const upcomingOptions = Object.assign({}, sharedOptions, {
    pagination: {
      el: ".upcoming-swiper .swiper-pagination",
      clickable: true,
    },
    speed: 520,
  });

  hitsSwiper = new Swiper(".hits-swiper", hitsOptions);
  upcomingSwiper = new Swiper(".upcoming-swiper", upcomingOptions);
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const paramGenre = params.get("genre");
  const currentFile = window.location.pathname.split("/").pop();

  let detectedGenre = "Film";
  let renderGenre = "Film";

  if (paramGenre || currentFile === "genre.html") {
    detectedGenre =
      typeof getCurrentGenreLabel === "function"
        ? getCurrentGenreLabel()
        : "Film";
    renderGenre = detectedGenre;
  }

  const actualGenre = initGenreDropdown(detectedGenre);
  renderGenreSliders(renderGenre);
  initializeSwipers();
  initHeroSlider();
  renderTrendingCards();

  // Auto-open genre dropdown on film.html page
  if (currentFile === "film.html" || currentFile === "genre.html") {
    const genreBtn = document.getElementById("genreBtn");
    const genreMenu = document.getElementById("genreMenu");
    if (genreBtn && genreMenu) {
      setTimeout(() => {
        genreMenu.classList.add("show");
        genreBtn.classList.add("active");
      }, 500);
    }
  }
});
