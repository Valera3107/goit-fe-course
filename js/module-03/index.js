'use strict';

function checkIfLoginExists(logins, login){  
  return  logins.includes(login);
}

function checkLoginValidity(login){
  return login.length >= 4 && login.length <= 16;
}

function addLogin(logins, login){
  if(!checkLoginValidity(login)){
    console.log('Такой логин не валиден!');
    return;
  }

  if(checkIfLoginExists(logins, login)){
    console.log('Такой логин уже есть!');
    return;
  }

  logins.push(login);
  console.log('Логин успешно добавлен!');

  return logins;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt('Введите логин для регистрации:');
addLogin(logins, login);
console.log(logins);