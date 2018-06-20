'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // ======(1)
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


    //    ===================(2)
    const clockface = document.querySelector(".js-clockface");
    const startBtn = document.querySelector(".js-timer-start");
    const stopBtn = document.querySelector(".js-timer-stop");


    const timer = {
        startTime: null,
        deltaTime: null,
        id: null,
        isActive: false,
        startTimer() {
          if(!this.isActive){
          this.startTime = Date.now();
          this.isActive = true;
          this.id = setInterval(()=>{
          const currentTime = Date.now();
          this.deltaTime = currentTime - this.startTime;
          const time = new Date(this.deltaTime);
          updateClockface(clockface, time);
          }, 100);
          }
        },
        stopTimer() {
          this.isActive = false;
          clearInterval(this.id);  
          this.id = null;
          this.startTime = null;
          this.deltaTime = null; 
          const time = new Date(this.deltaTime);
          updateClockface(clockface, time);
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
      stopBtn.classList.remove('active');
      
      target.classList.add('active');
    }

    startBtn.addEventListener('click', timer.startTimer.bind(timer));
    stopBtn.addEventListener('click', timer.stopTimer.bind(timer));

    startBtn.addEventListener('click', setActiveBtn);
    stopBtn.addEventListener('click', setActiveBtn);

});
