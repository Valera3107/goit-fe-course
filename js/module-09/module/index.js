'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const clockface = document.querySelector(".js-time");
    const startBtn = document.querySelector(".js-start");
    const resetBtn = document.querySelector(".js-reset");
    const list = document.querySelector('.js-laps');

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
               startBtn.textContent = 'Pause';
               this.startTime = Date.now();
                this.id = setInterval(()=>{
                    const currentTime = Date.now();
                    this.deltaTime = currentTime - this.startTime;
                    this.time = new Date(this.deltaTime);
                    updateClockface(clockface, this.time);
                }, 100);
            } else {
              if(!this.isPause){
                this.isContinue = false;
                this.isPause = true;
                this.fixedTime = this.time;
                resetBtn.textContent = 'lap';
                startBtn.textContent = 'Continue';
                clearInterval(this.id);
                updateClockface(clockface, this.fixedTime);
              } else {
                this.isContinue = true;
                resetBtn.textContent = 'reset';
                startBtn.textContent = 'Pause';
                this.startTime = Date.now();
                this.startTime -= this.fixedTime;
                this.isPause = false;
                  this.id = setInterval(()=>{
                      const currentTime = Date.now();
                      this.deltaTime = currentTime - this.startTime;
                      this.time = new Date(this.deltaTime);
                      updateClockface(clockface, this.time);
                  }, 100);
              }
            }
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
          const items = document.querySelectorAll('li');
          items.forEach(item => {
            item.remove();
          });
          this.time = new Date(this.deltaTime);
          updateClockface(clockface, this.time);
        } 

        if(!this.isContinue && !this.isReset){
          if(this.countLap < this.maxLap){
            this.countLap += 1;
            const li = document.createElement('li');
            li.textContent = getFormattedTime(this.fixedTime);
            list.appendChild(li);
            this.isContinue = true;
            resetBtn.textContent = 'reset';
          } 
        }
    }
  }
    

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


    startBtn.addEventListener('click', timer.startTimer.bind(timer));
    resetBtn.addEventListener('click', timer.resetTimer.bind(timer));


    startBtn.addEventListener('click', setActiveBtn);
    resetBtn.addEventListener('click', setActiveBtn);

});