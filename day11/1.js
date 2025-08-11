// global and local scope
var a = 10; // globally accessible
if(true) {
    var  b = 10; // globally accesible
    let c = 5; // locally accessible
    console.log(a , b);
}
// Hoisting
console.log(d); // undefined - reference get's hoisting
var  d = 10;
console.log(sum(4,6)); // not hoisted beaucse trated as varibale
var sum = function(num1 , num2) {
    return num1 + num2;
}
console.log(add(4,5)); // get's hoisted
function add(num1 , num2) {
    return num1+num2;
}
// closures 
function user () {
    let username = "Hatim";
    function welcomeUser() {
        console.log(username);
    }
    welcomeUser();
}
user();
// arrow functions
let sum = () => {
    console.log("hellow");
}
sum();
// implicit return type
let add = (num1 , num2) => num1 + num2;
let obj = () => ({name : "Hatim"});
console.log(add(5,6));
console.log(obj());
// this keyword
const obj = {
    name : "Hatim",
    welcomeUser : () => {
        console.log(this);
    }
}
function scope() {
    console.log(this);
}
let scope = () => {
    console.log(this);
}
 scope();
obj.welcomeUser();

// IIFE
(function (){
    console.log("Hello");
}) ();
(() => {
    console.log("Worldd");
}) ()