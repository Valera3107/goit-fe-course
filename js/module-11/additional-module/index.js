'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // =========(1)
//   const listItems = [
//     { name: 'item 1', count: 2 },
//     { name: 'item 2', count: 4 },
//     { name: 'item 3', count: 12 },
//     { name: 'item 4', count: 29 },
//   ];

// const list = document.querySelector('#root');

// const source = document.querySelector('#items').innerHTML.trim();

// const template = Handlebars.compile(source);

// const markup = template({ listItems });

// list.insertAdjacentHTML('afterbegin', markup);

// ==================(2)
// const posts = [
//   { title: "post 1", text: "text 1", isFav: true },
//   { title: "post 2", text: "text 2", isFav: false },
//   { title: "post 3", text: "text 3", isFav: true },
//   { title: "post 4", text: "text 4", isFav: false }
// ];

// const list = document.querySelector('.list');
// const source = document.querySelector('#source').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = template({posts});

// list.insertAdjacentHTML('afterbegin', markup);

// ==================(3)
const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", validate);

function validate(evt) {}
});