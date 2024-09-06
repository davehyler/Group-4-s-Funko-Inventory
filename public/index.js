const funkoEl = document.getElementById('funkos');
const termButton = document.getElementById('term-btn');

const getfunkos = () =>
  fetch('/api/funkos', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data);

const renderfunko = (funko) => {
  const cardEl = document.createElement('div');
  const cardImageEl = document.createElement('img');
  const cardBodyEl = document.createElement('div');
  const cardBodyTitle = document.createElement('div');

  cardImageEl.classList.add('image', 'p-5');
  cardEl.classList.add('card', 'p-5');
  cardBodyEl.classList.add('card-body', 'p-5');
  cardBodyTitle.classList.add('card-header', 'card-title', 'link');

  cardImageEl.setAttribute('src', funko.imageName);
  cardBodyTitle.innerHTML = funko.title;
  cardBodyEl.innerText = funko.series;
  cardEl.appendChild(cardBodyTitle);
  cardEl.appendChild(cardBodyEl);
  cardEl.appendChild(cardImageEl);
  funkoEl.appendChild(cardEl);
};

const buttonHandler = () =>
  getfunkos().then((response) => response.forEach((item) => renderfunko(item)));

termButton.addEventListener('click', buttonHandler);
