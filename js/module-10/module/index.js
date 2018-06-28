'use strict';

document.addEventListener('DOMContentLoaded', () => {

    /*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.

  https://test-users-api.herokuapp.com/users/
*/

// =======================
function getAllUsers(event){
  //  event.preventDefault();
   fetch('https://test-users-api.herokuapp.com/users/')
   .then(response => {
     if(response.ok) return response.json();

     throw new Error(`Error: ${response.statusText}`);
   })
   .then(data => {
     console.log(data.data);
   })
   .catch(error => {
     console.log(error);
   })
}

getAllUsers();



// ========================
getUserById('5b0f01c41744100014006452');

function getUserById(id) {
  //event.preventDefault();
  fetch('https://test-users-api.herokuapp.com/users/')
  .then(response => {
    if(response.ok) return response.json();

    throw new Error(`Error: ${response.statusText}`);
  })
  .then(data => {
    data.data.forEach(element => {
      if(element.id === id){
        console.log(element);
      }
    });
  })
  .catch(error => {
    console.log(error);
  })
}


// ===================
const user = {
  name: 'Ivan',
  age: 34
}

addUser(user);

function addUser(user) {
  fetch('https://test-users-api.herokuapp.com/users/', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => {
    return response.json();
  })
  .then(data => {  
    console.log(data);
  })
  .catch(error => {
    console.log("Error: " + error);
  })
}


// =========================
removeUser('5b086645e0400a0014a69c3d');

function removeUser(id) {
  fetch(`https://test-users-api.herokuapp.com/users/:${id}`, {
    method: 'DELETE',
  })
  .then(() => {
    console.log('User was successfully deleted!');
  })
  .catch(error => {
    console.log("Error: " + error);
  })
}



// ==================
const newInfo = {
  name: "Viktor",
  age: 23
}

updateUser('5b0be6b54f70ae00141efe9c', {newInfo});

function updateUser(id, user) {
  fetch(`https://test-users-api.herokuapp.com/users/:${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
     console.log(data);
  })
  .catch(error => {
    console.log("Error: " + error);
  })
}
});