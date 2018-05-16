'use strict';

let sharm = 15;
let hurgada = 25;
let taba = 6;
let userChoice;

let userNumber = prompt('Введите количество мест:', '');
const counterPlace = Number(userNumber);

const checkAnswer = !Number.isNaN(counterPlace) && userNumber !== null;

if(!checkAnswer){
  alert("Ошибка ввода!");
}
else if(checkAnswer && counterPlace < hurgada){
  userChoice = Number(prompt('Выберите группу 0 - taba, 1 - sharm, 2 - hurgada', ''))
  switch (userChoice) {
      case 0: 
        if(counterPlace <= taba){
          userChoice = confirm('Вы согласны быть в группе \'taba\' ?');
          if(userChoice){
            alert( 'Приятного путешествия в группе \'taba\'');
            taba-=counterPlace;
          }
          else if(!userChoice){
            userChoice = confirm('Вы согласны быть в группе \'sharm\' ?');
            if(userChoice){
              alert( 'Приятного путешествия в группе \'sharm\'');
              sharm-=counterPlace;
            }
            else{
              userChoice = confirm('Вы согласны быть в группе \'hurgada\' ?');
                if(userChoice){
                  alert( 'Приятного путешествия в группе \'hurgada\'');
                  hurgada-=counterPlace;
                }
                else
                  alert('Групп больше нет.');
            }
          }
        }
        else if(counterPlace > taba){
          userChoice = confirm('Увы но у \'taba\' нет мест. Вы согласны быть в группе \'sharm\' ?');
            if(userChoice){
              alert( 'Приятного путешествия в группе \'sharm\'');
              sharm-=counterPlace;
            }
            else{
              userChoice = confirm('Увы но в группе \'taba\' нет мест.Вы согласны быть в группе \'hurgada\' ?');
                if(userChoice){
                  alert( 'Приятного путешествия в группе \'hurgada\'');
                  hurgada-=counterPlace;
                }
            }
        }
        else{
            alert('Простите, но туров больше ничего нет.');  
        }
        break;

      case 1:
        if(counterPlace <= sharm){
          userChoice = confirm('Вы согласны быть в группе \'sharm\' ?');
          if(userChoice){
            alert( 'Приятного путешествия в группе \'sharm\'');
            sharm-=counterPlace;
          }
          else if(!userChoice){
            userChoice = confirm('Вы согласны быть в группе \'hurgada\' ?');
            if(userChoice){
              alert( 'Приятного путешествия в группе \'hurgada\'');
              hurgada-=counterPlace;
            }
            else{
              alert('Простите, но больше туров нет.');
            }
            }
        }
        else{
          userChoice = confirm('Увы но в группе \'sharm\'.Вы согласны быть в группе \'hurgada\' ?');
            if(userChoice){
              alert( 'Приятного путешествия в группе \'hurgada\'');
              hurgada-=counterPlace;
            }
            else{
              alert('Простите, но туров больше ничего нет.');
            }
            };
        break;

      case 2: 
        if(counterPlace <= hurgada){
          userChoice = confirm('Вы согласны быть в группе \'hurgada\' ?');
          if(userChoice){
            alert( 'Приятного путешествия в группе \'hurgada\'');
            hurgada-=counterPlace;
          }
          else{
            alert('Простите, но больше туров нет.');
          }
        }
        else{
        alert('Увы но мест в \'hurgada\' нет.');
        };
        break;

       default: alert('Ошибка. Повторите попытку.');
    }
}
else{
 alert('Стольки мест нет.');
}


console.log(`Sharm - ${sharm}`);
console.log(`Taba - ${taba}`);
console.log(`Hurgada - ${hurgada}`);