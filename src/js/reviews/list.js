import { reviews } from './data.js';

const container = document.getElementById('reviewsSwiperWrapper');

container.innerHTML = reviews
  .map(
    review => `
    <div class="swiper-slide">
      <div class="review-card">
      <p class="review-text">${review.text}</p>
      <h3 class="review-name">${review.name}</h3>
      <p class="review-role">Guest</p>
      <img src="${review.img}" alt="${review.name}" class="review-image">
      </div>
    </div>
  `
  )
  .join('');
