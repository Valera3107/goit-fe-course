'use strict';

function checkIfLoginExists(logins, login){
  let checkExists = logins.includes(login);
  let loginExists;
  if(checkExists){
     loginExists = false;
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
  if(newArray.length > 4 && newArray.length < 16){
    if(checkIfLoginExists(logins, login)){
      checkLogin = true;
    }
  }
  else{
    console.log('Логин не валиден');
    checkLogin = false;
  }
  return checkLogin;
}

function addLogin(logins, login){
  if(checkLoginValidity(login)){
    logins.push(login);
    console.log('Логин успешно добавлен!');
  }
  else{
    console.log('Такой логин уже используется!');
  }
  return logins;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt('Введите логин для регистрации:');
addLogin(logins, login);
console.log(logins);