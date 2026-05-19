(function () {
  const root = document.body;
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const langButtons = document.querySelectorAll("[data-set-lang]");

  function preferredLanguage() {
    const saved = localStorage.getItem("site-lang");
    if (saved === "ja" || saved === "en") return saved;

    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang === "ja" || urlLang === "en") return urlLang;

    return navigator.language && navigator.language.startsWith("ja") ? "ja" : "en";
  }

  function setLanguage(lang) {
    root.setAttribute("data-lang", lang);
    localStorage.setItem("site-lang", lang);
    langButtons.forEach((button) => {
      const active = button.dataset.setLang === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  setLanguage(preferredLanguage());

  langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.setLang));
  });

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();
