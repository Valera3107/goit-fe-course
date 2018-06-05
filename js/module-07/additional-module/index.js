'use strict';

//===========(1)
// const categoryList = document.querySelectorAll("ul");

// console.log(categoryList);
//=========(2)
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
function makerList(){
  let textContent;
  do{
  textContent = prompt('Input text for item:');
  let newItem = document.createElement('li');
  newItem.textContent = textContent;
  elementUl.appendChild(newItem);
  }while(textContent);

};

const list = document.querySelector('#list');
const elementUl = document.createElement('ul');

makerList();
list.appendChild(elementUl);