'use strict';

document.addEventListener('DOMContentLoaded', () => {

const ul = document.querySelector('.js-preview');

const galleryItems = [
  { preview: 'img/camera-p.jpg', fullview: 'img/camera-f.jpg', alt: "camera"},
  { preview: 'img/photo-p.jpeg', fullview: 'img/photo-f.jpeg', alt: "photo"},
  { preview: 'img/adidas-p.jpeg', fullview: 'img/adidas-f.jpeg', alt: "adidas"},
  { preview: 'img/cherry-p.jpg', fullview: 'img/cherry-f.jpg', alt: "cherry"},
  { preview: 'img/coffe-p.jpeg', fullview: 'img/coffe-f.jpeg', alt: "coffe"},
  { preview: 'img/town-p.jpeg', fullview: 'img/town-f.jpeg', alt: "town"},
];

function createGallery(arr) {
  let arrOfImage = [];
  const lengthOfArr = arr.length;
    for(let i = 0; i < lengthOfArr; i+=1){
      let item = document.createElement('li');
      let image = document.createElement('img');
      image.setAttribute('src', arr[i].preview);
      image.setAttribute('data-fullview', arr[i].fullview);
      image.setAttribute('alt', arr[i].alt);
      item.appendChild(image);
      arrOfImage.push(item);
    }
  return arrOfImage;
};

ul.append(...createGallery(galleryItems));

  const list = document.querySelector('.js-preview');

  const images = document.querySelectorAll('ul > li > img');
 
  const fullviewImage = document.querySelector('.js-fullview > img');

  list.addEventListener('click', switchImage);

  function switchImage({target}) {
    const nodeName = target.nodeName;

    if(nodeName !== 'IMG') return;
 
    let attribute =  target.dataset.fullview;
    fullviewImage.setAttribute('src', attribute);     
  }
});