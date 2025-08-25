function user() {
let name = 'Hatim';
function displayName() {
    console.log(name); // it can access name directly beacuse it is present in it's lexical scope
}
displayName();
}
user();

function user() {
    let name = 'Hatim';
    function displayName() {
        console.log(name);
    }
    return displayName; // not only function is returning but along with it it's lexical scope also get return
}
const myFunc = user(); // at this line outer function gets executed and it return's a inner function
myFunc();// now outer function returns inner function that we are using here and even after outer function get's executed it will remember the varibale 'name' from lexical scope that is what closure is.



