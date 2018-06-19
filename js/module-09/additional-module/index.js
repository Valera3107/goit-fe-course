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
        id: null
    };



    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);

    function startTimer({timer}) {
      let min;
      let sec;
      let ms;
      setInterval(()=>{
      const currentTime = Date.now();
      deltaTime = startTime - currentTime;
      let date = Date.now(deltaTime);
      min = date.getMinutes();
      sec = date.getSeconds();
      ms = Number.parseInt((date.getMilliseconds())/1000);
      updateClockface(clockface,(getFormattedTime({min, sec, ms})));
      },100);

    }

    function stopTimer() {}
    
    function getFormattedTime({min, sec, ms}) {
        return `${min}:${sec}.${ms}`;
    }
 
   
    function updateClockface(elem, time) {
      elem.textContent = getFormattedTime(time);
    }

    function setActiveBtn(target) {
      if(target.classList.contains('active')) {
        return;
      }
      
      startBtn.classList.remove('active');
      stopBtn.classList.remove('active');
      
      target.classList.add('active');
    }


});
