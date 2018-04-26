'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let userPassword;
let checkPassword;
let userChoice;
let count = 3;

userPassword = prompt('Hello. Input your password:');

while(count > 0 && userPassword !== null){
  checkPassword = passwords.includes(userPassword);
    if(checkPassword){
      alert('Добро пожаловать!');
      break;
    }
    else{
      alert('Неверный пароль!');
      count--;
      if(count > 0){
        alert(`У вас осталось ${count} попытки!`);
        userPassword = prompt('Input your password:');
      }
      else{
        alert('У вас закончились попытки, аккаунт заблокирован.');
      }
    }
}