//================(1)
'use strict';

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

const userUpdate = {
  mood: "happy",
  hobby: "javascript",
}

delete user.premium;

const newUser =Object.assign( {},user, userUpdate);
console.log(newUser);

//================(2)
function isObjectEmpty(obj){
let objLength = 0;
let objCheck = false;
  for (const key in obj) {
    objLength+=1;
  }
  if(objLength === 0){
    objCheck = true;
    return objCheck;
  }
  return objCheck;
}

console.log(
  isObjectEmpty({})
); // true

console.log(
  isObjectEmpty({a: 1})
); // false

//==========(3)
function countOwnProps(obj){
  let objCount = 0;
  for(const key in obj){
    objCount+=1;
  }
  return objCount;
}

console.log(
  countOwnProps({})
); // 0

console.log(
  countOwnProps({a: 1, b: 3, c: 'hello'})
); // 3

//=================(4)

function countTotalSalary(obj){
  const listOfMoney = Object.values(obj);
  let totalMoney = 0;
  for(let item of listOfMoney){
    totalMoney += item;
  }
  return totalMoney;
}

console.log(
  countTotalSalary({})
); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

//====================(5)

function getAllPropValues(prop){
  let arrOfValue = [];
  for(let item of users){
      arrOfValue.push(item[prop]);
  }
  return arrOfValue;
}

const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful'},
  { name: 'Ajax', age: 3, mood: 'tired' }
];

console.log(
  getAllPropValues('name')
); // ['Poly', 'Mango', 'Ajax']

console.log(
  getAllPropValues('mood')
); // ['happy', 'blissful', 'tired']

console.log(
  getAllPropValues('active')
); // []

//================(6)
 function User(name, isActive, age, friends){
   this.name = name;
   this.isActive = isActive;
   this.age = age;
   this.friends = friends;

   this.getUserInfo = function(){
     console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
   }
 }

 const poly = new User('Poly', true, 13, 34);
 const max = new User('Max', false, 41, 37);

 console.log(poly);
 poly.getUserInfo();

 console.log(max);
 max.getUserInfo();
 //==============(7)

 const store = {
  products: ['bread', 'cheese', 'milk', 'apples'],
  managers: ['poly', 'mango', 'ajax'],
  addManager(manager) {
    this.managers.push(manager);
    
    console.log(this.managers);
  },
  removeManager(manager) {
    const idx = this.managers.indexOf(manager);
    
    this.managers.splice(idx, 1);
    
    console.log(this.managers);
  },
  getProducts() {
    console.log(this.products);
    
    return this.products;
  }
}

store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

store.removeManager('mango'); // ['poly', ajax', 'chelsey']

store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']
//=================(8)

function Account({ login, password, type = 'regular' }) {
  this.login = login;
  this.password = password;
  this.type = type;
  
  this.changePassword = function (newPassword) {
    password = newPassword;
    
    console.log(this.password);
  };
  
  this.getAccountInfo = function() {
    console.log(`
      Login: ${this.login}, 
      Pass: ${this.password}, 
      Type: ${this.type}
    `);
  };
};

const account = new Account({
  login: 'Mango',
  password: 'qwe123', 
  type: 'premium'
});

console.log( account.login ); // 'Mango'
console.log( account.password ); // 'qwe123'
console.log( account.type ); // 'premium'

console.log( account.changePassword('asdzxc') ); // 'asdzxc'

console.log( 
  account.getAccountInfo() 
); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
