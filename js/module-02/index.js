'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let userPassword;
let checkPassword;
let userChoice;
let count = 3;


while(count !== 0){
  userPassword = prompt('Hello. Input your password:');
  if(userPassword !== null){
  checkPassword = passwords.includes(userPassword);
    if(checkPassword){
      alert('Добро пожаловать!');
      break;
    }
    else{
      alert('Неверный пароль!');
      count-=1;
        if(count > 0){
          alert(`У вас осталось ${count} попытки!`);
        }
        else{
          alert('У вас закончились попытки, аккаунт заблокирован.');
        }
    }
  }
  else{
    break;
  }
}