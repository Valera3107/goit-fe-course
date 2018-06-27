'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // const input = document.querySelector("input");
  // const submitBtn = document.querySelector(".js-submit");
  // const result = document.querySelector(".js-result");
  // const apiUrl = "https://restcountries.eu/rest/v2/name/";  
  

  // submitBtn.addEventListener("click", fetchCountryData);


  // function fetchCountryData(evt) {
  //   evt.preventDefault();
  //   fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
  // .then(response => {
  //   if(response.ok) return response.json();

  //   throw new Error(`Error while fetching: ${response.statusText}`);
  // })
  // .then(data => {
  //   const countryName = data[0].name;
  //   const capital = data[0].capital;
  //   const currency = data[0].currencies[0].name;
  //   const flag = data[0].flag;
  //   makeCardInfo(countryName, capital, currency, flag);
  // })
  // .catch(error => {
  //   console.log("Error: " + error);
  // });
  // }

  // function makeCardInfo(name, cap, cur, fl) {
  //   const item = document.createElement('div');
  //   const countryName = document.createElement('p');
  //   const capital = document.createElement('p');
  //   const currency = document.createElement('p');
  //   const flag = document.createElement('img');
  //   flag.setAttribute('src', fl);
  //   countryName.textContent = name;
  //   capital.textContent = cap;
  //   item.classList.add('item');
  //   currency.textContent = cur;
  //   flag.classList.add('image');
  //   item.append(countryName, capital, currency, flag);
  //   result.appendChild(item);
  // }
  
  // ============(2)
  
// const input = document.querySelector("input");
// const submitBtn = document.querySelector("#js-submit");
// const result = document.querySelector(".result");
// const apiUrl = `https://api.github.com/users/`;
// const findUser = '?client_id=xxxx&client_secret=yyyy`';

// submitBtn.addEventListener("click", fetchUserData);
// /*
//   @param {FormEvent} evt
//   Avatar: аватартка 
//   Username: логин
//   Bio: описание профиля
//   Public repos: кол-во открытых репозиториев
// */
// function fetchUserData(evt) {
//   evt.preventDefault();
//   fetch(`${apiUrl}${input.value}${findUser}`)
//   .then(response => {
//     if(response.ok) return response.json();

//     throw new Error(`Error while fetching: ${response.statusText}`);
//   })
//   .then(data => {
//     makeCardInfo(data.avatar_url,data.login,data.bio,data.public_repos);
//   })
//   .catch(error => {
//     console.log(error);
//   })

// }
// function makeCardInfo(ava, name, bio, repos) {
//   const item = document.createElement('div');
//   const userName = document.createElement('p');
//   const userBio = document.createElement('p');
//   const publicRepos = document.createElement('p');
//   const avatar = document.createElement('img');
//   avatar.setAttribute('src', ava);
//   userName.textContent = `User name: ${name}`;
//   userBio.textContent = `User bio: ${bio}`;
//   item.classList.add('item');
//   publicRepos.textContent = `Public repos: ${repos}`;
//   avatar.classList.add('image');
//   item.append(avatar, userName, userBio, publicRepos);
//   result.appendChild(item);
// }
// ==============(3)
// const getBtn = document.querySelector(".js-get");
// const result = document.querySelector(".result");
// const table = document.querySelector("table");

// getBtn.addEventListener("click", fetchUsers);

// /*
//   @param {FormEvent} evt
// */
// function fetchUsers(evt) {
//   evt.preventDefault();

//   fetch('https://test-users-api.herokuapp.com/users/')
//   .then(res => {
//     if(res.ok) return res.json();

//     throw new Error(`Error: ${res.statusText}`);
//   })
//   .then(data => {
//     data.data.forEach(element => {
//       makeTable(element.id, element.name, element.age);
//     });
//   })
//   .catch(err =>{
//     console.log(err);
//   })

//   table.classList.remove('beforeClick');
//   table.classList.add('action');
// };

// function makeTable(id, name, age) {
//   const tr = document.createElement('tr');
//   const itemId = document.createElement('td');
//   const itemName = document.createElement('td');
//   const itemAge = document.createElement('td');
//   itemId.textContent = id;
//   itemId.classList.add('item');
//   itemName.textContent = name;
//   itemName.classList.add('item');
//   itemAge.textContent = age;
//   itemAge.classList.add('item');
//   tr.append(itemId, itemName, itemAge);
//   table.appendChild(tr);
// }

// ==========(4)

const input = document.querySelector("input");
const postBtn = document.querySelector(".js-post");
const result = document.querySelector(".result");

postBtn.addEventListener("click", getUserByName);

function getUserByName(evt) {
  evt.preventDefault();

  fetch('https://test-users-api.herokuapp.com/users/')
  .then(res=>{
    if(res.ok) return res.json();

    throw new Error(`Error: ${res.statusText}`)
  })
  .then(data=>{
    findUserInform(data.data, input.value);
  })
  .catch(err => {
    console.log(err);
  })
}

function findUserInform(arr, name) {
  let userInfo = document.createElement('p');
  arr.forEach(element => {
    if(element.name === name){
      userInfo.textContent = `id: ${element.id}; name: ${element.name}; age: ${element.age}`;
      result.appendChild(userInfo);
    }
  });  
}

});