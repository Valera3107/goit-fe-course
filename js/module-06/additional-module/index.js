'use strict';

//=============(1)
// function Account(login, email, friendsCount) {
//   this.login = login;
//   this.email = email;
//   this.friendsCount = friendsCount;
// };

// Account.prototype.getAccountInfo = function() {
//   console.log(`Your account has ${this.login} login, ${this.email} email and ${this.friendsCount} friendsCount.`);
// };

// const mango = new Account('mango', 'mango@ss.com', 234);

// const maximus = new Account('maximus', 'maximus@ai.com', 364);
// mango.getAccountInfo();
// maximus.getAccountInfo();

// //===============(2)
Array.prototype.getLast = function(){
  return this.pop();
};

const numbers = [1, 3, 5];

console.log(numbers.getLast());

//  //=============(3)
//  function Clock(time) {
//    this.time = time;
//  }
  
//  Clock.prototype.showTime = function() {console.log(`showTime - ${this.time}`)};



//  function Timer(time, interval) {
//    Clock.call(this, time);
//    this.interval = interval;
//  };
//  Timer.prototype = Object.create(Clock.prototype);
//  Timer.prototype.constructor = Timer;

//  Timer.prototype.countTimer = function() {console.log(`countTimer - ${this.interval}`)};


//  const getTimeValue = new Timer(2, 10);

// getTimeValue.showTime();
// getTimeValue.countTimer();

//================(4)

// class Account {

//   constructor (login, email, friendsCount){
//     this.login = login;
//     this.email = email;
//     this.friendsCount = friendsCount;
//   };

//   getAccountInfo(){
//     console.log(`Your account login: ${this.login}, 
//     email: ${this.email}, 
//     friendsCount: ${this.friendsCount}`);
//   }
// };

// const ajax = new Account('ajax', 'ajax@x.com', 47);
// ajax.getAccountInfo();

// const valley = new Account('valley', 'valley@vv.ua', 2354);
// valley.getAccountInfo();

//===================(5)

class Clock {
  constructor(time){
    this.time = time;
  }

  showTime(){
    console.log(`Time - ${this.time}`);
  }

  static convertTime(ms){
    return new Date(ms);
  }
};

class Timer extends Clock{
  constructor(time, interval){
    super(time);
    this.interval = interval;
  };

  countTime(){
    console.log(`Interval - ${this.interval}`);
  }
}

const valueOfTimer = new Timer(232121, 32);
valueOfTimer.showTime();
valueOfTimer.countTime();

const valueOfClock = new Clock(123);
valueOfClock.showTime();

console.log(Clock.convertTime(45453));