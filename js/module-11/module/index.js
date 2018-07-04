'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelector('.js-tabs__nav');

  const links = document.querySelectorAll('.tabs__link');

  const tabsPane = document.querySelectorAll('.tabs__pane');
  
  panels.addEventListener('click', switchPanel);

  function switchPanel({target}) {
    event.preventDefault();
    const nodeName = target.nodeName;
    const max = links.length;
    if(nodeName !== 'A') return;

    for(let i = 0; i < max; i++){
        if(links[i] !== target){
            links[i].classList.remove('tabs__link--active');
            tabsPane[i].classList.remove('tabs__pane--active');
        } else {
            links[i].classList.add('tabs__link--active');
            tabsPane[i].classList.add('tabs__pane--active');
        }
    }
  }
// =================
const button = document.querySelector('.js-get');
const table = document.querySelector('table');

button.addEventListener('click', getAllUsers);

function getAllUsers(event){
   event.preventDefault();
   fetch('https://test-users-api.herokuapp.com/users/')
   .then(response => {
     if(response.ok) return response.json();

     throw new Error(`Error: ${response.statusText}`);
   })
   .then(data => {
     makeTable(data.data);
   })
   .catch(error => {
     console.log(error);
   })
}
 function makeTable(arr) {
   arr.forEach(elem => {
   const tr = document.createElement('tr');
   const itemId = document.createElement('td');
   const itemName = document.createElement('td');
   const itemAge = document.createElement('td');
   itemId.textContent = elem.id;
   itemId.classList.add('table-item');
   itemName.textContent = elem.name;
   itemName.classList.add('table-item');
   itemAge.textContent = elem.age;
   itemAge.classList.add('table-item');
   tr.append(itemId, itemName, itemAge);
   table.appendChild(tr);
   })
 }

// ========================

const input = document.querySelector('.js-search');
const searchBtn = document.querySelector('#js-submit');
const userText = document.querySelector('#showUserInfo');

searchBtn.addEventListener('click', getUserById);


function getUserById() {
  event.preventDefault();
  fetch(`https://test-users-api.herokuapp.com/users/${input.value}`)
  .then(response => {
    if(response.ok) return response.json();

    throw new Error(`Error: ${response.statusText}`);
  })
  .then(data => {
    userText.textContent = `Name: ${data.data.name}, age: ${data.data.age}`;
  })
  .catch(error => {
    console.log(error);
  })
}


// ===================
const userName = document.querySelector('.js-name');
const userAge = document.querySelector('.js-age');
const submitBtn = document.querySelector('#js-submitNewUser');
const textAboutNewUser = document.querySelector("#newUserInfotmation");

submitBtn.addEventListener('click', addUser);

function addUser(event) {
  event.preventDefault();
  fetch('https://test-users-api.herokuapp.com/users/', {
    method: 'POST',
    body: JSON.stringify({name: userName.value , age: userAge.value}),
    headers: {
      Accept: 'application/json',
    'Content-Type': 'application/json',
    }
  })
  .then(response => {
    if(response.ok) return response.json();
    
    throw new Error(`Error: ${response.statusText}`);
  })
  .then(data => {  
    textAboutNewUser.textContent = `Successfully added new user: name: ${userName.value}, age: ${userAge.value}`;
  })
  .catch(error => {
    console.log("Error: " + error);
  })
}


// =========================
const inputForRemove = document.querySelector('.js-remove');
const removeBtn = document.querySelector('#js-remove');
const textAboutRemoveUser = document.querySelector('#deleted-info');

removeBtn.addEventListener('click', removeUser)

function removeUser(event) {
  event.preventDefault();
  fetch(`https://test-users-api.herokuapp.com/users/${inputForRemove.value}`, {
    method: 'DELETE',
  })
  .then(() => {
    textAboutRemoveUser.textContent = `Deleted user by id: ${inputForRemove.value}`;
  })
  .catch(error => {
    console.log("Error: " + error);
  })
}

// ==================

const userId = document.querySelector('#js-resubmit-id');
const newUserName = document.querySelector('#js-resubmit-name');
const newUserAge = document.querySelector('#js-resubmit-age');
const resubmitBtn = document.querySelector('#js-resubmit');
const newUserInfo = document.querySelector('#resubmitUserInfo');

resubmitBtn.addEventListener('click', updateUser);

function updateUser(event) {
  event.preventDefault();
  fetch(`https://test-users-api.herokuapp.com/users/${userId.value}`, {
    method: 'PUT',
    body: JSON.stringify({name: newUserName.value, age: newUserAge.value}),
    headers: {
      Accept: 'application/json',
    'Content-Type': 'application/json',
    }
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
     newUserInfo.textContent = `New name:${data.data.name}, new age: ${data.data.age}`;
  })
  .catch(error => {
    console.log("Error: " + error);
  })
}
});