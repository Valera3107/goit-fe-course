import {fetchUrl} from './services/api';
import * as storage from './services/storage';
import urlCardTemplate from './templates/url-item.hbs';
import './styles.css';
import './sass/test.scss';

const addBtn = document.querySelector('.button');
const input = document.querySelector('.input');
const containerForCards = document.querySelector('.container');
const clearBtn = document.querySelector('.clear');
const API_KEY = '5b615c62b034a0ff7d742c244e2bacb145df5b5c6c34a';
let fetchedUrl = storage.get();
let deleteBtn;

if(fetchedUrl) {
  hydrateUrlCard(fetchedUrl);
  deleteBtn = document.querySelectorAll('.btn-reset');
  deleteBtn.forEach(elem => elem.addEventListener('click', deleteItem));
}

clearBtn.addEventListener('click', clearInput);
addBtn.addEventListener('click', addNewUrl);

function clearInput(evt) {
  evt.preventDefault();
  input.value = '';
}


function addNewUrl(evt) {
  evt.preventDefault();

  fetch(`http://api.linkpreview.net/?key=${API_KEY}&q=${input.value}`)
  .then(res => res.json())
  .then(data => {
    if(fetchedUrl === null){
      fetchedUrl = [];
      fetchedUrl.unshift(data);
    } else if(checkUrlIsNew(data.title)){
      fetchedUrl.unshift(data);
    }
    updateContainer();
    hydrateUrlCard(fetchedUrl);
    storage.set(fetchedUrl);
  });
}

function deleteItem({target}) {
  const nodeName = target.nodeName;

  if(nodeName !== 'BUTTON') return;

  const item = target.parentNode;
  const titleElement = item.querySelector('.block__title');

  const arrOfCards = storage.get();
  
  arrOfCards.filter(element => element.title !== titleElement.textContent);
  updateContainer();
  hydrateUrlCard(arrOfCards);
  storage.clear();
  storage.set(arrOfCards);
  item.innerHTML = '';
}

function checkUrlIsNew(elem) {
  const arrOfTitle = [];
  if(fetchedUrl.length !== 0){
    fetchedUrl.forEach(elem => arrOfTitle.push(elem.title));
  }
  return arrOfTitle.includes(elem) ? false : true;
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
