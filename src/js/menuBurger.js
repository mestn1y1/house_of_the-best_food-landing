document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header-btn');
  const closeBtn = document.querySelector('.menu-close');
  const burgerMenu = document.querySelector('.burger-menu');

  burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
  });
});
