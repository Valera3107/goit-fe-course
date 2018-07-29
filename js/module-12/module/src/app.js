import {fetchUrl} from './services/api';
import * as storage from './services/storage';
import urlCardTemplate from './templates/url-item.hbs';
import './styles.css';
import './sass/test.scss';

const addBtn = document.querySelector('.button');
const input = document.querySelector('.input');
const containerForCards = document.querySelector('.container');
const API_KEY = '5b5c8aea8435ee921159bd661dd4654425725c01c9047';
let savedUrls = storage.get();
let fetchedUrl = [];

if(savedUrls) {
  hydrateUrlCard(savedUrls);
}

addBtn.addEventListener('click', addNewUrl);

function addNewUrl(evt) {
  evt.preventDefault();

  fetch(`http://api.linkpreview.net/?key=${API_KEY}&q=${input.value}`)
  .then(res => res.json())
  .then(data => {
    fetchedUrl.push(data);
    updateContainer();
    hydrateUrlCard(fetchedUrl);
    storage.set(fetchedUrl);
  });

  const deleteBtn = document.querySelectorAll('.btn-reset');
  console.log(deleteBtn);
}

function updateContainer() {
  containerForCards.innerHTML = "";
}

function hydrateUrlCard(urls) {
  const markup = createUrlItems(urls);
  addNewCard(markup);
}

function createUrlItems(items) {
  return items.reduce((markup, item) => 
  markup + urlCardTemplate(item), '');
}

function addNewCard(markup) {
   containerForCards.insertAdjacentHTML('afterbegin', markup);
}
