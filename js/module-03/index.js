'use strict';

function checkIfLoginExists(logins, login){
  let checkExists = logins.includes(login);
  let loginExists;
  if(checkExists){
     loginExists = false;
     console.log('Такой логин уже используется!');
  }
  else{
    loginExists = true;
  }
  return loginExists;
}

function checkLoginValidity(login){
  let newArray = [];
  let checkLogin;
  newArray = login.split("");
  if(newArray.length >= 4 && newArray.length <= 16){
    if(checkIfLoginExists(logins, login)){
      checkLogin = true;
    }
  }
  else{
    checkLogin = false;
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
  return checkLogin;
}

function addLogin(logins, login){
  if(checkLoginValidity(login)){
    logins.push(login);
    console.log('Логин успешно добавлен!');
  }
  return logins;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt('Введите логин для регистрации:');
addLogin(logins, login);
console.log(logins);