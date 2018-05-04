//================(1)
'use strict';

function getPx(pixel){
  let result;
 if(typeof pixel === 'string'){
   result = Number.parseFloat(pixel);
 }
 else{
   result = null;
 }
  return result;
}

// Вызовы функции для проверки
console.log( getPx("10px") === 10 ); // должно быть:  true
console.log( getPx("10.5") === 10.5 ); // должно быть:  true
console.log( getPx("0") === 0 ); // должно быть:  true
console.log( getPx(-1) ); // должно быть:  null
console.log( getPx(10) ); // должно быть:  null

//===================(2)
function findLongestWord(str){
  let arr = [];
  arr = str.split(' ');
  let longestWord = 0;
  let maxItem;
  for(let item of arr){
    if(item.length > longestWord){
      longestWord = item.length;
      maxItem = item;
    }
  }
  return maxItem;
}

console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
  findLongestWord("Google do a roll")
); // вернет 'Google'

console.log(
  findLongestWord("May the force be with you")
); // вернет 'force'


//=====================(3)


function titleCase(str){
  let additionalStr = str.toLowerCase();
  let finalString = "";
  let newArr = additionalStr.split(' ');
   for(let item of newArr){
    let newWord = item[0].toUpperCase() + item.slice(1);
    finalString +=newWord + " ";
   }
   return finalString;
}

console.log( 
  titleCase("I'm a little tea pot")
); // вернет "I'm A Little Tea Pot"

console.log(
  titleCase("sHoRt AnD sToUt")
); // вернет "Short And Stout".

console.log(
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
); // вернет "Here Is My Handle Here Is My Spout".

//===================(4)
function findLargestNumber(arr){
  let largestNumber = 0;
  for (let item of arr){
    if(item > largestNumber){
      largestNumber = item;
    }
  }
  return largestNumber;
}


console.log(
  findLargestNumber([1, 2, 3])
); // вернет 3

console.log(
  findLargestNumber([27, 12, 18, 5])
); // вернет 27

console.log(
  findLargestNumber([31, 128, 14, 74])
); // вернет 128

//===================(5)
function addUniqNumbers(){
  let arr = Array.from(arguments);
  for(let item of arr){
     if(!uniqNumbers.includes(item)){
      uniqNumbers.push(item);
    }
  }
  return uniqNumbers;
}


const uniqNumbers  = [2, 1, 4, 9];

// Вызовы функции для проверки
addUniqNumbers(1, 2, 3);
console.log(
  uniqNumbers
); // будет [2, 1, 4, 9, 3]

addUniqNumbers(12, 2, 3, 19);
console.log(
  uniqNumbers
); // будет [2, 1, 4, 9, 3, 12, 19]

addUniqNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
  uniqNumbers
); // будет [2, 1, 4, 9, 3, 12, 19, 5, 8]

//====================(6)
function removeFromArray(arr, ...numbers){
  let indexArr =[];
  let additionalArr = Array.from(numbers);
    for(let item of arr){
      if(!additionalArr.includes(item)){
        indexArr.push(item);
      }
    }
  return indexArr;
}


console.log(
  removeFromArray([1, 2, 3, 4, 5], 2, 4)
); // вернет [1, 3, 5]

console.log(
  removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
); // вернет [12, 8, 17]