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


let actions = [
  {classItem: 'actions__item',
  classButton: 'actions__btn',
  classIcon: 'actions__icon',
  imgIcon: 'actions__icon--like',
  classCount: 'actions__count'},

  {classItem: 'actions__item',
  classButton: 'actions__btn',
  classIcon: 'actions__icon',
  imgIcon: 'actions__icon--dislike',
  classCount: 'actions__count'},

  {classItem: 'actions__item',
  classButton: 'actions__btn',
  classIcon: 'actions__icon',
  imgIcon: 'actions__icon--fav',
  classCount: 'actions__count'}
];


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

createPostActions(actions);

function createPostActions(actions){  
  let arrayOfIcons = [];
  for(let i = 0; i < actions.length; i+=1){
    const createItem = document.createElement('li');
    createItem.classList.add(actions[i].classItem);
    
    const createButton = document.createElement('button');
    createButton.classList.add(actions[i].classButton);
    createItem.appendChild(createButton);
    
    const createIcon = document.createElement('span');
    createIcon.classList.add(actions[i].classIcon);
    createIcon.classList.add(actions[i].imgIcon);
    
    const createCount = document.createElement('span');
    createCount.classList.add(actions[i].classCount);
    createCount.textContent = '0';
    
    createButton.appendChild(createIcon);
    createButton.appendChild(createCount);
    createList.appendChild(createItem);
  }
};


card.appendChild(createList);
//==
//=====
return card;
}
sectionCard.appendChild(createPost());