const reservationBtn = document.getElementById('reservation-btn');
const backdrop = document.querySelector('.backdrop');
const reservationForm = document.querySelector('.reservation-form');
const closeFormBtn = document.getElementById('close-btn');
const reserveBtn = document.querySelector('.reserve-btn');

reservationBtn.addEventListener('click', () => {
  backdrop.classList.remove('hidden');
  document.body.classList.add('no-scroll');
});

reserveBtn.addEventListener('click', () => {
  backdrop.classList.remove('hidden');
  document.body.classList.add('no-scroll');
});

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) {
    closeModal();
  }
});

reservationForm.addEventListener('submit', e => {
  e.preventDefault();
  reservationForm.reset();
  closeModal();
});

function closeModal() {
  backdrop.classList.add('hidden');
  document.body.classList.remove('no-scroll');
}

closeFormBtn.addEventListener('click', closeModal);
