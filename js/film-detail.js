document.addEventListener("DOMContentLoaded", () => {
  const posterEl = document.getElementById("detailPoster");
  const titleEl = document.getElementById("detailTitle");
  const infoEl = document.getElementById("detailInfo");
  const castEl = document.getElementById("detailCast");
  const synopsisEl = document.getElementById("detailSynopsis");
  const detailCard = document.getElementById("detailCard");
  const synopsisSection = document.getElementById("detailSynopsisSection");
  const fallback = document.getElementById("detailFallback");

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  function showFallback() {
    if (detailCard) {
      detailCard.style.display = "none";
    }
    if (synopsisSection) {
      synopsisSection.style.display = "none";
    }
    if (fallback) {
      fallback.hidden = false;
    }
  }

  if (typeof getFilmBySlug !== "function" || !slug) {
    showFallback();
    return;
  }

  const film = getFilmBySlug(slug);
  if (!film) {
    showFallback();
    return;
  }

  document.title = `${film.title} | VINMOEC`;

  if (posterEl) {
    posterEl.src = film.poster || "";
    posterEl.alt = film.title;
  }

  if (titleEl) {
    titleEl.textContent = film.title;
  }

  if (infoEl) {
    const infoList = Array.isArray(film.info) ? film.info : [];
    infoEl.innerHTML = infoList
      .map((item) => `<li><strong>${item.label}:</strong> ${item.value}</li>`)
      .join("");
  }

  if (castEl) {
    const castList = Array.isArray(film.cast) ? film.cast : [];
    castEl.innerHTML = castList.map((member) => `<li>${member}</li>`).join("");
  }

  if (synopsisEl) {
    synopsisEl.textContent = film.synopsis || "";
  }
});
