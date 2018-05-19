'use strict';

//============(1)
const getPropValues = (arr, key) => {return guests.map(user => user[key])};

const guests = [
  {name: 'Mango', age: 20, isActive: true},
  {name: 'Poly', age: 18, isActive: false},
  {name: 'Ajax', age: 30, isActive: true},
  {name: 'Chelsey', age: 45, isActive: false}
];

// Вызовы функции для проверки
console.log(
  getPropValues(guests, 'name')
); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

console.log(
  getPropValues(guests, 'age')
); // [20, 18, 30, 45]

console.log(
  getPropValues(guests, 'isActive')
); // [true, false, true, false]

//==================(2)
const setGuestState = (userArr, num) => {return userArr.map(user => {
  if(user.inactiveDays < num){
    return {
      ...user,
      isActive: false,
    };  
  }
  else{
      return {
        ...user,
        isActive: true,
      };
  }
})};

const users = [
  {name: 'Mango', inactiveDays: 15, isActive: true},
  {name: 'Poly', inactiveDays: 8, isActive: false},
  {name: 'Ajax', inactiveDays: 32, isActive: false},
  {name: 'Chelsey', inactiveDays: 85, isActive: true}
];

// Вызовы функции для проверки
console.log(
  setGuestState(users, 10)
); // Объекты Mango, Ajax, Chelsey получит isActive false, а Poly наоборот true

console.log(
  setGuestState(users, 20)
); // Объекты Ajax, Chelsey получит isActive false, а Mango и Poly наоборот true

console.log(
  setGuestState(users, 50)
); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

//============(3)
const getActiveGuests = (guests) => {return guests.filter(user => user.isActive)};

const getGuestsOlderThan = (guests, num) => {return guests.filter(user => user.age > num)};

const guests3 = [
  {name: 'Mango', age: 20, isActive: true},
  {name: 'Poly', age: 18, isActive: false},
  {name: 'Ajax', age: 30, isActive: true},
  {name: 'Chelsey', age: 45, isActive: false}
];

// Вызовы функции для проверки
console.log(
  getActiveGuests(guests3)
); // массив из 2-х объектов Mango и Ajax

console.log(
  getGuestsOlderThan(guests3, 25)
); // массив из 2-х объектов Ajax и Chelsey

console.log(
  getGuestsOlderThan(guests3, 35)
); // [{name: 'Chelsey', age: 45, isActive: false}]

console.log(
  getGuestsOlderThan(guests3, 55)
); // []

//==========(4)
const getGuestById = (arrUsers, num) => {return arrUsers.find(user => user.id === num)};

const guests4 = [
  {id: 1, name: 'Mango', age: 20},
  {id: 2, name: 'Poly', age: 18},
  {id: 3, name: 'Ajax', age: 30},
  {id: 4, name: 'Chelsey', age: 45}
];

// Вызовы функции для проверки
console.log(
  getGuestById(guests4, 3)
); // {id: 3, name: 'Ajax', age: 30}

console.log(
  getGuestById(guests4, 1)
); // {id: 1, name: 'Mango', age: 20}

console.log(
  getGuestById(guests4, 5)
); // undefined
//===========(5)
const getAllCosts = (obj) => {
  const arrOfValues = Object.values(obj);
  const totalCost = arrOfValues.reduce((sum, current) => sum + current, 0);
  return totalCost;
};

const order = {
  bread: 10,
  apples: 25,
  chicken: 60,
  milk: 15,
  cheese: 40
};

console.log(getAllCosts(order)); // 150

//=============(6)

const getTotalPrice = (products, order) => {};


const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  cheese: 30,
  chicken: 40,
};

const orderA = {
  bread: 2,
  apples: 4,
  chicken: 1,
};

const orderB = {
  bread: 1,
  milk: 2,
  cheese: 3
};


// Вызовы функции для проверки
console.log(
  getTotalPrice(products, orderA)
); // 140

console.log(
  getTotalPrice(products, orderB)
); // 130
//=========(7)
const allGuestsActive = (arr) => {
  if(arr.find(user => user.isActive? false : true)){
    return false;
  }
  return true;
};

const guestsA = [
  {name: 'Mango', isActive: true},
  {name: 'Poly', isActive: false},
  {name: 'Ajax', isActive: true},
];

const guestsB = [
  {name: 'Mango', isActive: true},
  {name: 'Poly', isActive: true},
  {name: 'Ajax', isActive: true},
];

// Вызовы функции для проверки
console.log(
  allGuestsActive(guestsA)
); // false

console.log(
  allGuestsActive(guestsB)
); // true