(() => {
  const header = document.querySelector(".site-header");
  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = navigator.connection?.saveData;
  if (reducedMotion || saveData) {
    document.querySelectorAll("video[autoplay]").forEach((video) => {
      video.pause();
      video.removeAttribute("autoplay");
    });
  }
})();
