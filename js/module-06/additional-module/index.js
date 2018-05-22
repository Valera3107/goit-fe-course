'use strict';

//=============(1)
function Account(login, email, friendsCount) {
  this.login = login;
  this.email = email;
  this.friendsCount = friendsCount;
};

Account.prototype.getAccountInfo = function() {
  console.log(`Your account has ${this.login} login, ${this.email} email and ${this.friendsCount} friendsCount.`);
};

const mango = new Account('mango', 'mango@ss.com', 234);

const maximus = new Account('maximus', 'maximus@ai.com', 364);
mango.getAccountInfo();
maximus.getAccountInfo();

//===============(2)
 function Array(arr) {
   this.arr = arr;
 };

 Array.prototype.getLastElem = function() {
   console.log(this.arr.pop());
 };

  const randomNumbers = new Array([1, 4, 5, 45, 3]);

 randomNumbers.getLastElem();

 //=============(3)
 function Clock(time) {
   this.time = time;
 }
  
 Clock.prototype.showTime = function() {console.log(`showTime - ${this.time}`)};



 function Timer(time, interval) {
   Clock.call(this, time);
   this.interval = interval;
 };
 Timer.prototype = Object.create(Clock.prototype);
 Timer.prototype.constructor = Timer;

 Timer.prototype.countTimer = function() {console.log(`countTimer - ${this.interval}`)};


 const getTimeValue = new Timer(2, 10);

getTimeValue.showTime();
getTimeValue.countTimer();