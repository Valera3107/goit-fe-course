import {fetchUrl} from './services/api';
import * as storage from './services/storage';
import urlCardTemplate from './templates/url-item.hbs';
import './styles.css';
import './sass/test.scss';

const addBtn = document.querySelector('.button');
const input = document.querySelector('.input');
const containerForCards = document.querySelector('.container');
const API_KEY = '5b5acec53381f4ba3dcec447cb39460a176c95534f3ac';


addBtn.addEventListener('click', addNewUrl);

// function deleteCard(evt) {
//   evt.preventDefault();
//   evt.target.remove();
// }

function addNewUrl(evt) {
  evt.preventDefault();

  fetch(`http://api.linkpreview.net/?key=${API_KEY}&q=${input.value}`)
  .then(res => res.json())
  .then(data => {
    hydrateUrlCard(data);
  });

  // deleteBtn = document.querySelector('.btn-reset');
  // deleteBtn.addEventListener('click', deleteCard);
}

function saveCards() {
  let savedCards = Array.from(...containerForCards.querySelectorAll('.url-item'));
  storage.set(savedCards);
}

function hydrateUrlCard(photos) {
  const markup = createUrlItem(photos);
  addNewCard(markup);
}

function createUrlItem(item) {
  return urlCardTemplate(item);
}

function addNewCard(markup) {
  containerForCards.insertAdjacentHTML('beforeend', markup);
}
