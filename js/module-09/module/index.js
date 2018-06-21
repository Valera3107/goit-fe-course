'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const clockface = document.querySelector(".js-time");
    const startBtn = document.querySelector(".js-start");
    const resetBtn = document.querySelector(".js-reset");

    startBtn.addEventListener('click', startTimer);
    resetBtn.addEventListener('click', resetTimer);

    let countClick = 0; 
    let isActive = false;
    let startTime = null;
    let id = null;
    let deltaTime = null;
    let isStart = false;
    let time = null;
    let fixedTime = null;
    let isReset = false;

    function pauseTimer() {
      fixedTime = time;
      startBtn.textContent = 'Continue';
      clearInterval(id);
      updateClockface(clockface, fixedTime);
    }

    function startTimer(){
      countClick += 1;
      console.log(countClick);
        if(countClick < 4){
          if(!isActive && countClick === 1){
             isActive = true;
             isStart = true;
             startBtn.textContent = 'Pause';
             startTime = Date.now();
             id = setInterval(()=>{
                 const currentTime = Date.now();
                 deltaTime = currentTime - startTime;
                 time = new Date(deltaTime);
                 updateClockface(clockface, time);
             }, 100)
          }
          else {
            if(isStart && countClick === 2){
              pauseTimer();
            }
            else {
              deltaTime = fixedTime;
              startBtn.textContent = 'Pause';
              countClick = 1;
               startTime = Date.now();
               id = setInterval(()=>{
                  const currentTime = Date.now();
                  deltaTime = currentTime - startTime;
                  console.log(deltaTime);
                  time = new Date(deltaTime);
                  updateClockface(clockface, time);
              }, 100);
            }
          }
        }
    }

    function resetTimer(){
       countClick = 0;
       startBtn.textContent = 'start';
       isReset = true;
       isActive = false;
       clearInterval(id);
       id = null;
       startTime = null;
       deltaTime = null;
       time = new Date(deltaTime);
       updateClockface(clockface, time);
    }


    // const timer = {
    //     startTime: null,
    //     deltaTime: null,
    //     id: null,
    //     isActive: false,
    //     isStart: false,
    //     startTimer() {
    //       if(!this.isActive){
    //         this.isStart = true;
    //         this.startTime = Date.now();
    //         this.isActive = true;
    //         this.id = setInterval(()=>{
    //         const currentTime = Date.now();
    //         this.deltaTime = currentTime - this.startTime;
    //         const time = new Date(this.deltaTime);
    //         updateClockface(clockface, time);
    //         }, 100);
    //       }
    //     },
    //     pauseTime() {
    //       if(this.isStart){  
    //         this.isStart = false;
    //         startBtn.textContent = 'Pause';
    //         const fixedTime = new  Date(this.deltaTime);
    //         updateClockface(clockface, fixedTime);  
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
  
    function getFormattedTime(time) {
      const min = time.getMinutes();
      const sec = time.getSeconds();
      const ms = Number.parseInt((time.getMilliseconds())/100);
      if(min < 10 && sec < 10){
        return `0${min}:0${sec}.${ms}`;
      }

      if(min < 10){
        return `0${min}:${sec}.${ms}`;
      }
    }
   
    function updateClockface(elem, time) {
      elem.textContent = getFormattedTime(time);
    }

    function setActiveBtn({target}) {
      if(target.classList.contains('active')) {
        return;
      }
      
      startBtn.classList.remove('active');
      resetBtn.classList.remove('active');
      
      target.classList.add('active');
    }

    // startBtn.addEventListener('click', timer.startTimer.bind(timer));
    // resetBtn.addEventListener('click', timer.stopTimer.bind(timer));

    // startBtn.addEventListener('click', timer.pauseTime.bind(timer));

    startBtn.addEventListener('click', setActiveBtn);
    resetBtn.addEventListener('click', setActiveBtn);

});
