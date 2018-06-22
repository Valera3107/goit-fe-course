'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // ==========(1)
//   const startBtn = document.querySelector('.js-start');
//   const stopBtn = document.querySelector('.js-stop');
//   const background = document.querySelector('body');

//   startBtn.addEventListener('click', changeBackground);
//   stopBtn.addEventListener('click', stopChangeBackground);

//   let timerId;

//   function changeBackground() {
//     timerId = setInterval(()=>{
//       background.style.backgroundColor = getRandomItem(colors);
//     }, 1000);
//   }

//   function stopChangeBackground() {
//      clearInterval(timerId);
//   }


//   const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

//   function getRandomItem(list){
//     return list[Math.floor(Math.random() * (list.length))];
// }


    // ======(2)
    // function getFormattedTime(time) {
    //     let date = new Date(time);
    //     const min = date.getMinutes();
    //     const sec = date.getSeconds();
    //     const ms = Number.parseInt((date.getMilliseconds()) / 100);
        
    //     return `${min}:${sec}.${ms}`;
    //   }
      
    //   console.log(
    //     getFormattedTime(1523621052858)
    //   ); // 04:12.8
      
    //   console.log(
    //     getFormattedTime(1523621161159)
    //   ); // 06:01.1
      
    //   console.log(
    //     getFormattedTime(1523621244239)
    //   ); // 07:24.2


    //    ===================(3)
    // const clockface = document.querySelector(".js-clockface");
    // const startBtn = document.querySelector(".js-timer-start");
    // const stopBtn = document.querySelector(".js-timer-stop");


    // const timer = {
    //     startTime: null,
    //     deltaTime: null,
    //     id: null,
    //     isActive: false,
    //     startTimer() {
    //       if(!this.isActive){
    //       this.startTime = Date.now();
    //       this.isActive = true;
    //       this.id = setInterval(()=>{
    //       const currentTime = Date.now();
    //       this.deltaTime = currentTime - this.startTime;
    //       const time = new Date(this.deltaTime);
    //       updateClockface(clockface, time);
    //       }, 100);
    //       }
    //     },
    //     stopTimer() {
    //       this.isActive = false;
    //       clearInterval(this.id);  
    //       this.id = null;
    //       this.startTime = null;
    //       this.deltaTime = null; 
    //       const time = new Date(this.deltaTime);
    //       updateClockface(clockface, time);
    //     }
    // };
  
    // function getFormattedTime(time) {
    //   const min = time.getMinutes();
    //   const sec = time.getSeconds();
    //   const ms = Number.parseInt((time.getMilliseconds())/100);
    //   if(min < 10 && sec < 10){
    //     return `0${min}:0${sec}.${ms}`;
    //   }

    //   if(min < 10){
    //     return `0${min}:${sec}.${ms}`;
    //   }
    // }
   
    // function updateClockface(elem, time) {
    //   elem.textContent = getFormattedTime(time);
    // }

    // function setActiveBtn({target}) {
    //   if(target.classList.contains('active')) {
    //     return;
    //   }
      
    //   startBtn.classList.remove('active');
    //   stopBtn.classList.remove('active');
      
    //   target.classList.add('active');
    // }

    // startBtn.addEventListener('click', timer.startTimer.bind(timer));
    // stopBtn.addEventListener('click', timer.stopTimer.bind(timer));

    // startBtn.addEventListener('click', setActiveBtn);
    // stopBtn.addEventListener('click', setActiveBtn);

    // ===============(4)
    const DELAY = 1000;

    let goodsAmount = 100;

    const processOrder = amount => {
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          if(goodsAmount >= amount && !Number.isNaN(amount)){
            goodsAmount -= amount;
            resolve('Ваш заказ готов!');
          }

          if(!Number.isNaN(amount) && goodsAmount < amount){
              resolve('К сожалению на складе недостаточно товаров!');
            }
                      
            reject('Некоректный ввод!');
          
        }, DELAY / 2)
      });
    }
    
    // Вызовы функции для проверки
    processOrder(50)
      .then(x => console.log(x)) // Ваш заказ готов!
      .catch(err => console.log(err));
    
    processOrder(50)
      .then(x => console.log(x)) // Ваш заказ готов!
      .catch(err => console.log(err));
    
    processOrder(50)
      .then(x => console.log(x)) // К сожалению на складе недостаточно товаров!
      .catch(err => console.log(err));
    
    processOrder("qwe")
      .then(x => console.log(x))
      .catch(err => console.log(err)); // Некоректный ввод!
    
});
