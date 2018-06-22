'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const clockface = document.querySelector(".js-time");
    const startBtn = document.querySelector(".js-start");
    const resetBtn = document.querySelector(".js-reset");
    const list = document.querySelector('.js-laps');

   
    // const timer = {
    //   countClick: 0,
    //   isActive: false,
    //   startTime: null,
    //   id: null,
    //   deltaTime: null,
    //   isStart: false,
    //   time: null,
    //   isPause: false,
    //   fixedTime: null,
    //   isLap: false,
    //   startTimer(){
    //     this.countClick += 1;
    //       if(this.countClick < 4){
    //         if(!this.isActive && this.countClick === 1){
    //            this.isActive = true;
    //            this.isStart = true;
    //            startBtn.textContent = 'Pause';
    //            this.startTime = Date.now();
    //            this.continueTimer();
    //         }
    //         else {
    //           if(this.isStart && this.countClick === 2){
    //             this.pauseTimer();
    //           }
    //           else {
    //             startBtn.textContent = 'Pause';
    //             this.countClick = 1;
    //              this.startTime = Date.now();
    //              this.startTime -= this.fixedTime;
    //              this.continueTimer();
    //           }
    //         }
    //       }
    //   },
    //   pauseTimer() {
    //     this.isPause = true;
    //     this.fixedTime = this.time;
    //     startBtn.textContent = 'Continue';
    //     clearInterval(this.id);
    //     updateClockface(clockface, this.fixedTime);
    //     if(this.isPause){
    //       resetBtn.textContent = 'Lap';
    //       resetBtn.addEventListener('click', this.makeLap());
    //     }
    //   },

    //   continueTimer(){
    //     this.isPause = false;
    //     this.isLap = false;
    //     this.id = setInterval(()=>{
    //         const currentTime = Date.now();
    //         this.deltaTime = currentTime - this.startTime;
    //         this.time = new Date(this.deltaTime);
    //         updateClockface(clockface, this.time);
    //     }, 100);
    //   },

    //   makeLap() {
    //     if(!this.isLap){
    //       this.isLap = true;
    //       const li = document.createElement('li');
    //       li.textContent = getFormattedTime(this.fixedTime);
    //       list.appendChild(li);
    //       resetBtn.textContent = 'reset';
    //     }
    //   },

    //   resetTimer(){
    //     if(!this.isPause){
    //       this.countClick = 0;
    //       clearInterval(this.id);
    //       startBtn.textContent = 'start';
    //       this.isActive = false;
    //       this.id = null;
    //       this.startTime = null;
    //       this.deltaTime = null;
    //       this.time = new Date(this.deltaTime);
    //       updateClockface(clockface, this.time);
    //     }
    //   }
    // };

      let countClick = 0;
      let isActive = false;
      let startTime = null;
      let id = null;
      let deltaTime = null;
      let isStart = false;
      let time = null;
      let isPause = false;
      let fixedTime = null;
      let maxLap = 0;

    function startTimer(){
      isPause = false;
      countClick += 1;
        if(countClick < 4){
          if(!isActive && countClick === 1){
             isActive = true;
             isStart = true;
             startBtn.textContent = 'Pause';
             startTime = Date.now();
             continueTimer();
          }
          else {
            if(isStart && countClick === 2){
              pauseTimer();
            }
            else {
              startBtn.textContent = 'Pause';
              countClick = 1;
               startTime = Date.now();
               startTime -= fixedTime;
               continueTimer();
            }
          }
        }
    };



  function pauseTimer() {
    isPause = true;
    fixedTime = time;
    startBtn.textContent = 'Continue';
    clearInterval(id);
    updateClockface(clockface, fixedTime);
    if(isPause){
      resetBtn.textContent = 'Lap';
      resetBtn.addEventListener('click', makeLap);
    }
  };

    function continueTimer(){
      isPause = false;
      if(!isPause){
        resetBtn.textContent = 'reset';
        resetBtn.addEventListener('click', resetTimer);
      }
      id = setInterval(()=>{
          const currentTime = Date.now();
          deltaTime = currentTime - startTime;
          time = new Date(deltaTime);
          updateClockface(clockface, time);
      }, 100);
    };

    function makeLap() {
      if(maxLap < 10){
        maxLap += 1;
        isPause = false; 
        const li = document.createElement('li');
        li.textContent = getFormattedTime(fixedTime);
        list.appendChild(li);
      }
    }

    function resetTimer(){
        countClick = 0;
        clearInterval(id);
        startBtn.textContent = 'start';
        isActive = false;
        id = null;
        startTime = null;
        deltaTime = null;
        time = new Date(deltaTime);
        updateClockface(clockface, time);
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