"use strict"

let arr = [];

do{
  const input = parseInt(prompt("Input number:", "100"));
  if(input === null) break;
  else arr.push(input);
}while(true);

let total = 0;

if(arr.length !== 0){
  arr.forEach(element => {
      total+=element;
  });
}

alert("Total sum = " + total);