const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const navMenu = document.querySelector('.main-nav__wrapper');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--is-opened')) {
    navMain.classList.remove('main-nav--is-opened');
    navMain.classList.add('main-nav--is-closed');
    navMenu.style.setProperty('--menu-height', '0px');
  } else {
    navMain.classList.add('main-nav--is-opened');
    navMain.classList.remove('main-nav--is-closed');
    const fullHeight = `${navMenu.scrollHeight}px`;
    navMenu.style.setProperty('--menu-height', fullHeight);
  }
});
