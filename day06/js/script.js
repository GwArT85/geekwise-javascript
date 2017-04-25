//Named function declaration
/*
function myName() {
  // all my cool code
  console.log('not cool');
}

myName();
*/
//Anonymous function declaration
/*
function() {
  //stuff and things
}
*/
/*
//Function Expression
var myName = function() {
  console.log('hello from the other side');
}();

// Immediately Invoked Function Expression (IIFE)

(
  function() {
    var test = 'this is a test';
    alert('This will run IMMEDIATELY!!!!!');
  }());
*/
/* --------------------! Parameters*/
// function myName(firstname, lastname){
//   console.log(firstname + ' ' + lastname);
// }
/* --------! Arguments */
// myName('Chris', 'Lopez');
/*
function mathletes(x){
  console.log(x*5);
}
mathletes(5);
*/
/*
function userColors(c1, c2, c3, c4, c5, c6){

}
var myName = function() {
  console.log(arguments[0] + ' ' + arguments[2]);
  //arr.forEach();

  for(let i = 0; i < arguments.length; i++){
    console.log(arguments [i]);
  }

  for(args in arguments) {
    console.log(arguments[args]);
  }
};

myName('Chris', true, 'Lopez', 'turing', ['red', 'green', 'blue'], 'Tekken', 'Reserve');
*/
// Return statement
/*
var myName = getName(prompt('What is your last name?'));

function getName('Davis'){
  return 'Chris' = lastname; // == 'Lopez'
}
console.log(myName);
*/

/*
userCity = prompt('what city were you born in?');
userState = prompt('what state were you born in?');

function setBirthplace(city, state) {
  return city + ', ' + state;
}
console.log(
  setBirthplace(userCity, userState)
)
*/
/*
var userName = modUserName( prompt('what is your name?') ); //Scooby
var lastName = modUserName( prompt('What is your last name?'));
// var cappedUserName = userName.charAt(0).toUpperCase +
// userName.substr(1).toLowerCase();
// console.log(cappedUserName);
function modUserName(name) {
  return name.charAt(0).toUpperCase + name.substr(1).toLowerCase();
}

console.log(userName + ' ' + lastName);
*/
// DOM Manipulation
// .getElementById()

// var btn = document.getElementById('myBtn');
//
// console.log(btn);
// // .getElementsByTagName()
//
// var links = document.getElementsByTagName('a');
//
// console.log(links);
//
// // .getElementsByClassName()
//
// var dropdownLinks = document.getElementsByClassName('dropdown');
//
// console.log (dropdownLinks);
//
// //.querySelector()
//
// var turkey = document.querySelector('#turkey');
//
// console.log(turkey);
//
// var oneLink = document.querySelector('ul li:last-child a');
//
// console.log(oneLink);
//
// // .querySelectorAll()
//
// var allDropdowns = document.querySelectorAll('.dropdown');
//
// console.log(allDropdowns);
//
// var allSubLinks = document.querySelectorAll('ul li li a');
//
// console.log(allSubLinks);

// Event Listeners
var btn = document.getElementById('myBtn');
//click
/*
btn.addEventListener('click', function() {
  btn.style.backgroundColor = 'red';
});
*/
// mousedown
btn.addEventListener('mousedown', function(){
  btn.style.backgroundColor = 'green';
});

// mouseup
btn.addEventListener('mouseup', function(){
  btn.style.backgroundColor = 'blue';
})

//mousemove
window.addEventListener('mousemove', function(e){
  console.log(e);
  console.clear();
  console.log(e.screenX + ":" + e.screenY);
});
// mouseenter
var btn = document.querySelector('#myBtn');

btn.addEventListener('mouseenter', function() {
  btn.style.fontSize = '2em';
  btn.style.color = "white";
  btn.styke.backgroundColor = "black";
})

// mouseleave
btn.addEventListener('mouseleave', function(){
  btn.style.fontSize = '1em';
  btn.style.color = 'black';
  btn.style.backgroundColor = "gray";
})

// scroll
// window.addEventListener('scroll', function(e){
//   console.log(e);
// });

// keypress
window.addEventListener('keypress', function(e){
  console.log(e);
})

//keydown
window.addEventListener('keydown', function(e){
  console.log(e);
});
// keyup
window.addEventListener('keyup', function(e){
  console.log(e);
})
