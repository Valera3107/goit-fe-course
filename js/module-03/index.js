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
}

function checkLoginValidity(login){
  let newArray = [];
  let checkLogin;
  newArray = login.split("");
  if(newArray.length > 4 && newArray.length < 16){
    checkLogin = true;
  }
  else{
    console.log('Логин не валиден');
    checkLogin = false;
  }
  return checkLogin;
}

function addLogin(logins, login){
  
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];