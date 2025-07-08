const burgerBtn = document.querySelector('.header-btn');
const closeBtn = document.querySelector('.menu-close');
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelectorAll('.burger-nav a');

function closeMenu() {
  burgerMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

function openMenu() {
  burgerMenu.classList.add('active');
  document.body.classList.add('no-scroll');
}

burgerBtn.addEventListener('click', openMenu);

closeBtn.addEventListener('click', closeMenu);

navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', e => {
  if (
    burgerMenu.classList.contains('active') &&
    !burgerMenu.contains(e.target) &&
    !burgerBtn.contains(e.target)
  ) {
    closeMenu();
  }
});
