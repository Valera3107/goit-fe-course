'use strict';

function checkIfLoginExists(logins, login){  
  return  logins.includes(login);
}

function checkLoginValidity(login){
  let checkLogin;
  if(login.length >= 4 && login.length <= 16){
      checkLogin = true;
  }
  else{
    checkLogin = false;
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
  return checkLogin;
}

function addLogin(logins, login){
  if(checkLoginValidity(login)){
    if(!checkIfLoginExists(logins, login)){
      logins.push(login);
      console.log('Логин успешно добавлен!');
    }
    else{
      console.log('Такой логин уже есть!');
    }
  }
  return logins;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt('Введите логин для регистрации:');
addLogin(logins, login);
console.log(logins);