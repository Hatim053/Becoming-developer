// Nesting 
let obj1 = {
    email:"Hatimabc@gmai.com",
    name : {
    userName : "Abc_23",
    fullName : {
        firstName : "Ab",
        lastName : "C"
    }
    }
}
// optional chaining
console.log(obj1.name.userId?.firstName);
console.log(obj1.hasOwnProperty('fullName'));
// Merging 
let obj2 = {
    1:"a",
    2:"b"
}
let obj3 = {
    3:"c",
    4:"d"
}
// let obj4 = Object.assign({} , obj2 , obj3);
//let obj4 = Object.assign(obj2 , obj3);
// using spread operator
let obj4 = {...obj2 , ...obj3};
console.log(obj4);
// destructuring
let {email : id} = obj1;
console.log(id);

// functions
function addTwoNumbers(num1 , num2) {
    console.log(num1 + num2);
}
addTwoNumbers(3,4);
// using rest operstor
function addNumbers(val1 , val2 , ...num1) {
    console.log(num1);
}
addNumbers(3,4 , 36 , 8);

function welcomeUser(userName ="New User") {
    console.log(`${userName} Just LoggedIn`);
}
welcomeUser();

function newUser(arr) {
    console.log(arr[2]);
}
newUser([1,2,3,4,5]);

// arrow function
let add = (num1 , num2) => {
    console.log(num1+num2);
}
add(10,10);