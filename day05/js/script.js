// ternary statements

// var age = prompt('How old are you?');

// syntax is-----  exp ? ifTrue : iffalse;
// var movierestriction = age > 18 ?
  // console.log('Old enough') :
  // console.log('Too young');
//same as
// if (age >18) {
  // console.log('Old enough');
// } else {
  // console.log('Too young');
// };
// another exercise
// var age = prompt('How old are you?');
//
// var url = age >= 18 ?
//   (
//     alert('okay, you may proceed'), 'proceed.html'
//   ) :
//   (
//     alert('sorry, you\'re not old enough for rated R movies'), 'stop.html'
//   );
// window.location.assign(url);

// Switch statements
// var today = new Date().getDay();
// var list = [
//   'left',
//   'right',
//   'straight'
// ]
//
// switch(today) {
//   case 0:
//     console.log("Happy Sunday!");
//     break;
//   case 1:
//     console.log("Sounds like a case of the Mondays");
//     break;
//   case 2:
//     console.log("Tuesday Morning");
//     break;
//   case 3:
//     console.log("Wednesday Afternoon");
//     break;
//   case 4:
//     console.log("Thursday is this day");
//     break;
//   case 5:
//     console.log("It's Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
// }
//
// switch(today) {
//   case 1:
//     console.log("It's Monday");
//     break;
//   case 2:
//     console.log("It's Tuesday")
// }

// cluttering the global namespace, BAD!
// var coffee = 'Dutch Bros';
//
// function mycoffee(){
//   var coffee = 'Starbucks';
//   console.log(coffee);
//
//   coffee = 'Peets';
//   console.log(coffee);
//
//   otherCoffe = 'Dunkin';
// }
// mycoffee();
// console.log(coffee);
// console.log(otherCoffee);

//for loop
// for(let i = 0; i < 5; i++){
//   console.log(i);
// }
// console.log('loop 1', i);
// let coffee;
//
// function myCoffee(){
//   let coffee = 'Dutch Bros';
//   console.log(coffee);
// }
// myCoffee();
// coffee = 'Dunkin';
// console.log(coffee);

//var is function scope

//let is block scope

// Const
// const newCoffee = 'Lanna';
// const newCoffee = 'mcDs';
//
// console.log(newCoffee);
//
// newCoffee = "Peets";
// console.log(newCoffee);

//Variable Hoisting

console.log(x);
var x = 1;
let y = 2;
const z = 3;
console.log(y);
console.log(z);
console.log(myFunc);
var myFunc = function() {
  //stuff and things
  console.log('stuff and things')
}
console.log(x);
x = 1;
console.log(x);


switch(designation){
  case 'mr':
  case 'mr.':
  case 'mister':
  case 'ms':
  case 'ms.':
  case 'missus':
}
