'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const clockface = document.querySelector(".js-time");
    const startBtn = document.querySelector(".js-start");
    const resetBtn = document.querySelector(".js-reset");
    const list = document.querySelector('.js-laps');

    // class Stopwatch{
    //     constructor(){
    //       this.countClick = 0;
    //       this.isActive = false;
    //       this.startTime = null;
    //       this.id = null;
    //       this.deltaTime = null,
    //       this.isStart = false;
    //       this.time = null;
    //       this.fixedTime = null;
    //     }

    //     startTimer(){
    //         this.countClick += 1;
    //           if(this.countClick < 4){
    //             if(!this.isActive && this.countClick === 1){
    //                this.isActive = true;
    //                this.isStart = true;
    //                startBtn.textContent = 'Pause';
    //                this.startTime = Date.now();
    //                this.continueTimer();
    //             }
    //             else {
    //               if(this.isStart && this.countClick === 2){
    //                 this.pauseTimer();
    //               }
    //               else {
    //                 startBtn.textContent = 'Pause';
    //                 this.countClick = 1;
    //                  this.startTime = Date.now();
    //                  this.startTime -= this.fixedTime;
    //                  this.continueTimer();
    //               }
    //             }
    //           }
    //       }

    //       pauseTimer() {
    //         this.fixedTime = this.time;
    //         startBtn.textContent = 'Continue';
    //         clearInterval(this.id);
    //         updateClockface(clockface, this.fixedTime);
    //       }

    //       continueTimer() {
    //          this.id = setInterval(()=>{
    //             const currentTime = Date.now();
    //             this.deltaTime = currentTime - this.startTime;
    //             this.time = new Date(this.deltaTime);
    //             updateClockface(clockface, this.time);
    //         }, 100);
    //       }


    //       resetTimer(){
    //         this.countClick = 0;
    //         clearInterval(this.id);
    //         startBtn.textContent = 'start';
    //         this.isActive = false;
    //         this.id = null;
    //         this.startTime = null;
    //         this.deltaTime = null;
    //         this.time = new Date(this.deltaTime);
    //         updateClockface(clockface, this.time);
    //       }

    // };

    const timer = {
      countClick: 0,
      isActive: false,
      startTime: null,
      id: null,
      deltaTime: null,
      isStart: false,
      time: null,
      fixedTime: null,
      startTimer(){
        this.countClick += 1;
          if(this.countClick < 4){
            if(!this.isActive && this.countClick === 1){
               this.isActive = true;
               this.isStart = true;
               startBtn.textContent = 'Pause';
               this.startTime = Date.now();
               this.continueTimer();
            }
            else {
              if(this.isStart && this.countClick === 2){
                this.pauseTimer();
              }
              else {
                startBtn.textContent = 'Pause';
                this.countClick = 1;
                 this.startTime = Date.now();
                 this.startTime -= this.fixedTime;
                 this.continueTimer();
              }
            }
          }
      },
      pauseTimer() {
        this.fixedTime = this.time;
        startBtn.textContent = 'Continue';
        clearInterval(this.id);
        updateClockface(clockface, this.fixedTime);
      },

      continueTimer(){
        this.id = setInterval(()=>{
            const currentTime = Date.now();
            this.deltaTime = currentTime - this.startTime;
            this.time = new Date(this.deltaTime);
            updateClockface(clockface, this.time);
        }, 100);
      },

      resetTimer(){
        this.countClick = 0;
        clearInterval(this.id);
        startBtn.textContent = 'start';
        this.isActive = false;
        this.id = null;
        this.startTime = null;
        this.deltaTime = null;
        this.time = new Date(this.deltaTime);
        updateClockface(clockface, this.time);
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

    startBtn.addEventListener('click', timer.startTimer.bind(timer));
    resetBtn.addEventListener('click', timer.resetTimer.bind(timer));


    startBtn.addEventListener('click', setActiveBtn);
    resetBtn.addEventListener('click', setActiveBtn);

});