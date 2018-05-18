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
// const setGuestState = (userArr, num) => {return guests.map(user => !user.isActive)};

// const guests = [
//   {name: 'Mango', inactiveDays: 15, isActive: true},
//   {name: 'Poly', inactiveDays: 8, isActive: false},
//   {name: 'Ajax', inactiveDays: 32, isActive: false},
//   {name: 'Chelsey', inactiveDays: 85, isActive: true}
// ];

// // Вызовы функции для проверки
// console.log(
//   setGuestState(users, 10)
// ); // Объекты Mango, Ajax, Chelsey получит isActive false, а Poly наоборот true

// console.log(
//   setGuestState(users, 20)
// ); // Объекты Ajax, Chelsey получит isActive false, а Mango и Poly наоборот true

// console.log(
//   setGuestState(users, 50)
// ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

//=========(7)
const allGuestsActive = (arr) => {return arr.filter(user => !user.isActive? false : true)};

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