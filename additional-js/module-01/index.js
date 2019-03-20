"use strict"

// const ADMIN_PASSWORD = 'password';
// let message = prompt("Input password", "password");

// if(message == null){
//     alert('User canceled!');
// } else if(ADMIN_PASSWORD !== message){
//     alert('Access is error!');
// } else {
//     alert('Wellcome');
// }

//=======================

// const pricePerDroid = 3000;
// let credits = 23580;
// let quantity = parseInt(prompt("Input amount of the droids:", "10"));
// let totalPrice = quantity*pricePerDroid;

// if(totalPrice > credits){
//     alert("You jave not enoght of money!");
// } else {
//     credits -= totalPrice;
//     alert("You have bought " + quantity + ", your credits is " + credits);
// }

//=====================

let country = prompt("Input country:", "China");

switch(country) {
    case "Chine": alert("Sending to the Chine cost 340$");break;
    case "USA": alert("Sending to the USA cost 789$");break;
    case "Russia": alert("Sending to the Russia cost 1200$");break;
    case "OAE": alert("Sending to the OAE cost 534$");break;
    case "Turkey": alert("Sending to the Turkey cost 573$");break;
    case "UK": alert("Sending to the UK cost 213$");break;
    case "France": alert("Sending to the France cost 987");break;
    default: alert("Sorry, but we can't send you any goods!");break;
}