const navToggle = document.querySelector('.header__nav-toggle');
const navMenu = document.querySelector('.header__nav');
const overlays = document.querySelector('.overlays')

navToggle.addEventListener('click', (e) => {
    e.preventDefault();

    const isVisible = navMenu.getAttribute('data-visible');

    if (isVisible == 'true') {
        overlays.setAttribute('data-visible', false);
        navMenu.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    } else {
        overlays.setAttribute('data-visible', true);
        navMenu.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }
})

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});