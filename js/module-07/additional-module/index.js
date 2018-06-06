'use strict';

//===========(1)
const categoryList = document.querySelector("ul");
let newArr = Array.from(categoryList.children);
let arrOfIncludes = newArr[0].querySelectorAll('li');
let arrOfIncludes = newArr.removeAttribute('ul');
console.log('category: ', categoryList.textContent);
console.log('length: ', arrOfIncludes.length);

// =========(2)
// const getCheckedInputsData = function(inputs){
//   const arrOfCheckElem = Array.from(inputs);
//   const checkedElem = arrOfCheckElem.filter(val => val.hasAttribute('checked'));
//   let objOfValues = {
//       values: [],
//       prop: []
//   };
//   checkedElem.map(val => objOfValues.values.push(val.getAttribute('value')));
//   checkedElem.find(val => objOfValues.prop.push(val.getAttribute('data-prop')));
//   console.log(objOfValues);
// }; 

// let categoryListInputs = Array.from(document.querySelectorAll('input'));
// getCheckedInputsData(categoryListInputs);

//==========(3)
// function makerList(){
//   let textContent;
//   do{
//   textContent = prompt('Input text for item:');
//   let newItem = document.createElement('li');
//   newItem.innerHTML = textContent;
//   elementUl.appendChild(newItem);
//   }while(textContent);
  
// };

// const list = document.querySelector('#list');
// const elementUl = document.createElement('ul');

// makerList();
// list.appendChild(elementUl);

//=======(4)
// const card = document.querySelector('.post');

// const createDiv = document.createElement('div');
// const createImg = document.createElement('img');
// const createTitle = document.createElement('h2');
// const createText = document.createElement('p');
// const createList = document.createElement('ul');
// const createItem = document.createElement('li');
// const createButton = document.createElement('button');
// const createIcon = document.createElement('span');
// const createCount = document.createElement('span');


// createList.setAttribute('class', 'actions post__actions');

// createDiv.setAttribute('class', 'post');

// createTitle.setAttribute('class', 'post_title');

// createText.setAttribute('class', 'post_text');

// createItem.setAttribute('class', 'actions post__actions');

// createButton.setAttribute('class', 'actions__btn');

// createIcon.setAttribute('class', 'actions__icon actions__icon--like');
// createCount.setAttribute('class', 'actions__count');

// createImg.setAttribute('class', 'post__image');
// createImg.setAttribute('src', 'http://via.placeholder.com/400x150');
// createImg.setAttribute('alt', 'post image');

// createText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
// createTitle.textContent = 'Lorem ipsum dolos';
// createCount.textContent = '0';
// createButton.appendChild(createIcon);
// createButton.appendChild(createCount);

// card.appendChild(createImg);
// card.appendChild(createTitle);
// card.appendChild(createText);
// card.appendChild(createList);
// card.appendChild(createItem);
// card.appendChild(createButton);
// card.appendChild(createIcon);
// card.appendChild(createCount);