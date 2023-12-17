const navToggle = document.querySelector('.header__nav-toggle');
const navMenu = document.querySelector('.header__nav');

navToggle.addEventListener('click', (e) => {
    e.preventDefault();

    const isVisible = navMenu.getAttribute('data-visible');

    if (isVisible == 'true') {
        console.log('is true');
        console.log(isVisible);
        navMenu.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    } else {
        console.log('is false');
        console.log(isVisible);
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