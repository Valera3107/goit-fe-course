import {fetchUrl} from './services/api';
import * as storage from './services/storage';
import urlCardTemplate from './templates/url-item.hbs';
import './styles.css';
import './sass/test.scss';

const addBtn = document.querySelector('.button');
const input = document.querySelector('.input');
const containerForCards = document.querySelector('.container');
const clearBtn = document.querySelector('.clear');
const API_KEY = '5b5de084291166ca757657eb93d1f04d87b4de35f4a7e';
let fetchedUrl = storage.get();

if(fetchedUrl) {
  hydrateUrlCard(fetchedUrl);
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
      // let arrOfDeleteBtn = document.querySelectorAll()
      fetchedUrl.unshift(data);
    }

    updateContainer();
    hydrateUrlCard(fetchedUrl);
    storage.set(fetchedUrl);
  });
}

function deleteBtn() {
  const deleteBtn = document.querySelector('.btn-reset');
  deleteBtn.addEventListener('click', deleteBtnFunctional);
}

function deleteBtnFunctional({ target }) {
  const nodeName = target.nodeName;
  console.log(target.nodeName);

  if(nodeName !== 'BUTTON'){ return };

  console.log(target.parentNode);
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
