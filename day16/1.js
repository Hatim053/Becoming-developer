// events in js
// types of event : click , double click , keyword event , mouse events

myContainer = document.querySelector('.container');
myBox = document.querySelector('.item');
myLink = document.querySelector('a');
// ways to listen an event
// myContainer.onclick = function() {
//     console.log("I Was Clicked");
// } 
// event object
myContainer.addEventListener('click' , function(e){
     e.stopPropagation();
    console.log("Red Box Clicked");
} , false)

// event bubbling and capturing
myBox.addEventListener('click' , function(e) {
    e.stopPropagation();
console.log("Yellow Box Clicked");
} , false)

myLink.addEventListener('click' , function(e) {
    e.preventDefault();
    console.log("I Was Clicked");
} , false)

let x = setTimeout(() => {
console.log("Hello");
} , 2000);
let y = setInterval(() => {
    console.log("World");
} , 3000);
clearTimeout(x);
clearInterval(y);