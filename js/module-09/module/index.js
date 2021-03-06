'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const clockface = document.querySelector(".js-time");
    const startBtn = document.querySelector(".js-start");
    const resetBtn = document.querySelector(".js-reset");
    const list = document.querySelector('.js-laps');

    // object timer
    
    const timer = {
      isActive: false,
      isPause: false,
      isContinue: false,
      isReset: false,
      startTime: null,
      id: null,
      deltaTime: null,
      time: null,
      fixedTime: null,
      maxLap: 10,
      countLap: 0,
      
      startTimer(){
        this.isReset = false;
            if(!this.isActive){
               this.isActive = true;
               this.startTime = Date.now();
               this.continueTimer();
            } else {
              if(!this.isPause){
                this.pauseTimer();
              } else {
                this.isContinue = true;
                resetBtn.textContent = 'reset';
                this.startTime = Date.now();
                this.startTime -= this.fixedTime;
                this.isPause = false;
                this.continueTimer();
              }
            }
      },

      pauseTimer(){
        this.isContinue = false;
        this.isPause = true;
        this.fixedTime = this.time;
        resetBtn.textContent = 'lap';
        startBtn.textContent = 'Continue';
        clearInterval(this.id);
        updateClockface(clockface, this.fixedTime);
      },
      
      continueTimer(){
        startBtn.textContent = 'Pause';
        this.id = setInterval(()=>{
          const currentTime = Date.now();
          this.deltaTime = currentTime - this.startTime;
          this.time = new Date(this.deltaTime);
          updateClockface(clockface, this.time);
      }, 100);
      },


      resetTimer(){
        if(this.isContinue){
          this.isReset = true;
          clearInterval(this.id);
          startBtn.textContent = 'start';
          this.isPause = false;
          this.isContinue = false;
          this.isActive = false;
          this.id = null;
          this.startTime = null;
          this.deltaTime = null;
          this.countLap = 0;
          this.deleteItems();
          this.time = new Date(this.deltaTime);
          updateClockface(clockface, this.time);
        } 

        if(!this.isContinue && !this.isReset){
          if(this.countLap < this.maxLap){
            this.makeLap();
          } 
        }
    },

    deleteItems(){
      const items = document.querySelectorAll('li');
      items.forEach(item => {
        item.remove();
      });
    },

    makeLap(){
      this.countLap += 1;
      const li = document.createElement('li');
      li.textContent = getFormattedTime(this.fixedTime);
      list.appendChild(li);
      this.isContinue = true;
      resetBtn.textContent = 'reset';
    }
  };
    
    //additional functions 
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


    // Buttons
    startBtn.addEventListener('click', timer.startTimer.bind(timer));
    resetBtn.addEventListener('click', timer.resetTimer.bind(timer));

    startBtn.addEventListener('click', setActiveBtn);
    resetBtn.addEventListener('click', setActiveBtn);

});