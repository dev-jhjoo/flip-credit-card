const flipButton = document.getElementById('flip-button');
const flipButtonBack = document.getElementById('flip-button-back');
const card = document.querySelector('.card');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');

flipButton.addEventListener('click', () => {
  card.classList.add('flip');
  cardFront.style.transform = 'rotateY(180deg)';
  cardBack.style.transform = 'rotateY(360deg)';
});

flipButtonBack.addEventListener('click', () => {
  card.classList.remove('flip');
  cardFront.style.transform = 'rotateY(360deg)';
  cardBack.style.transform = 'rotateY(180deg)';
});
