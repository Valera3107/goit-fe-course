'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const clockface = document.querySelector(".js-time");
    const startBtn = document.querySelector(".js-start");
    const resetBtn = document.querySelector(".js-reset");
    const list = document.querySelector('.js-laps');
    const items = document.querySelectorAll('li');

   
    let isActive = false;
    let isPause = false;
    let isContinue = false;
    let isReset = false;
    let startTime = null;
    let id = null;
    let deltaTime = null;
    let time = null;
    let fixedTime = null;
    let arrOfLaps = [];
    let maxLap = 10;
    let countLap = 0;


      function startTimer(){
            if(!isActive){
               isActive = true;
               startBtn.textContent = 'Pause';
               startTime = Date.now();
                id = setInterval(()=>{
                    const currentTime = Date.now();
                    deltaTime = currentTime - startTime;
                    time = new Date(deltaTime);
                    updateClockface(clockface, time);
                }, 100);
            } else {
              if(!isPause){
                isContinue = false;
                isPause = true;
                fixedTime = time;
                resetBtn.textContent = 'lap';
                startBtn.textContent = 'Continue';
                clearInterval(id);
                updateClockface(clockface, fixedTime);
              } else {
                isContinue = true;
                resetBtn.textContent = 'reset';
                startBtn.textContent = 'Pause';
                startTime = Date.now();
                startTime -= fixedTime;
                isPause = false;
                  id = setInterval(()=>{
                      const currentTime = Date.now();
                      deltaTime = currentTime - startTime;
                      time = new Date(deltaTime);
                      updateClockface(clockface, time);
                  }, 100);
              }
            }
      };

      function resetTimer(){
        if(isContinue){
          isReset = true;
          clearInterval(id);
          startBtn.textContent = 'start';
          isPause = false;
          isContinue = false;
          isReset = false;
          isActive = false;
          id = null;
          startTime = null;
          deltaTime = null;
          time = new Date(deltaTime);
          updateClockface(clockface, time);
        } 

        if(!isContinue && !isReset){
          if(countLap < maxLap){
            countLap += 1;
            const li = document.createElement('li');
            li.textContent = getFormattedTime(fixedTime);
            list.appendChild(li);
            isContinue = true;
            resetBtn.textContent = 'reset';
          } 
        }
    };

    
  
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

    startBtn.addEventListener('click', startTimer);
    resetBtn.addEventListener('click', resetTimer);

    // startBtn.addEventListener('click', timer.startTimer.bind(timer));
    // resetBtn.addEventListener('click', timer.resetTimer.bind(timer));


    startBtn.addEventListener('click', setActiveBtn);
    resetBtn.addEventListener('click', setActiveBtn);

});