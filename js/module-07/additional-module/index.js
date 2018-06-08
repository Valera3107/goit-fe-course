'use strict';

//===========(1)
// const items = document.querySelectorAll('.categories > li');

// items.forEach(item => {console.log('Category: ', item.firstChild);
// console.log('Quantity: ', item.firstElementChild.children.length);
// });


// =========(2)
// const getCheckedInputsData = function(inputs){
//   let propValue = inputs[0].dataset.prop;
//   let objOfValues = {
//       values: [],
//       prop: propValue
//   };
//   inputs.map(val => objOfValues.values.push(val.getAttribute('value')));
//   return objOfValues;
// }; 

// let categoryListInputs = Array.from(document.querySelectorAll('input[checked]'));
// console.log(getCheckedInputsData(categoryListInputs));

//==========(3)
// function makerList(){
//   let textContent;
//   do{
//   textContent = prompt('Input text for item:');
//   if(textContent !== null){
//     let newItem = document.createElement('li');
//     newItem.innerHTML = textContent;
//     elementUl.appendChild(newItem);
//   }
//   }while(textContent);
  
// };

// const list = document.querySelector('#list');
// const elementUl = document.createElement('ul');

// makerList();
// list.appendChild(elementUl);

//=======(4)
const sectionCard = document.querySelector('#post');

function createPost(){
const card = document.createElement('div');
card.classList.add('post');

//====img
const createImg = document.createElement('img');

createImg.setAttribute('class', 'post__image');
createImg.setAttribute('src', 'http://via.placeholder.com/400x150');
createImg.setAttribute('alt', 'post image');
card.appendChild(createImg);

//====title
const createTitle = document.createElement('h2');
createTitle.classList.add('post__title');
createTitle.textContent = 'Lorem ipsum dolos';
card.appendChild(createTitle);

//====text
const createText = document.createElement('p');
createText.classList.add('post__text');
createText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
card.appendChild(createText);

//=====List
const createList = document.createElement('ul');
createList.classList.add('actions');
createList.classList.add('post__actions');
//==li
const createItemA = document.createElement('li');
createItemA.classList.add('actions__item');

const createButtonA = document.createElement('button');
createButtonA.classList.add('actions__btn');
createItemA.appendChild(createButtonA);

const createIconA = document.createElement('span');
createIconA.classList.add('actions__icon');
createIconA.classList.add('actions__icon--like');

const createCountA = document.createElement('span');
createCountA.classList.add('actions__count');
createCountA.textContent = '0';

createButtonA.appendChild(createIconA);
createButtonA.appendChild(createCountA);
createList.appendChild(createItemA);
//==
//==li
const createItemB = document.createElement('li');
createItemB.classList.add('actions__item');

const createButtonB = document.createElement('button');
createButtonB.classList.add('actions__btn');
createItemB.appendChild(createButtonB);

const createIconB = document.createElement('span');
createIconB.classList.add('actions__icon');
createIconB.classList.add('actions__icon--dislike');

const createCountB = document.createElement('span');
createCountB.classList.add('actions__count');
createCountB.textContent = '0';


createButtonB.appendChild(createIconB);
createButtonB.appendChild(createCountB);
createList.appendChild(createItemB);
//==
//==li
const createItemC = document.createElement('li');
createItemC.classList.add('actions__item');

const createButtonC = document.createElement('button');
createButtonC.classList.add('actions__btn');
createItemC.appendChild(createButtonC);

const createIconC = document.createElement('span');
createIconC.classList.add('actions__icon');
createIconC.classList.add('actions__icon--fav');

const createCountC = document.createElement('span');
createCountC.classList.add('actions__count');
createCountC.textContent = '0';

createButtonC.appendChild(createIconC);
createButtonC.appendChild(createCountC);
createList.appendChild(createItemC);
card.appendChild(createList);
//==
//=====
return card;
}
sectionCard.appendChild(createPost());