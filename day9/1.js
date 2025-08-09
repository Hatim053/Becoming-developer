//Arrays 
let arr = [1,2,3,4];
let num1 = [];

arr.length;
arr.push(1);
arr.pop(); // return the element
arr.unshift(3);
arr.shift(); // return the element
arr.sort();
arr.reverse();
delete arr[3]; // it will delete the value but length remains same
slice()  // return elements from selected range
splice() // return elements from selected range and also remove's them from the orignal array
.concat() 
let nums = [3,4,5,6];
let res = [...arr , ...nums];
res.join();
Array.isArray("Hatim");
Array.from("Hatim");
Array.of("Hatim" , "Hello");
Array.from({name : "Hatim"}); // return empty array
const obj = {
    name : "Hatim",
    age : 21
}
const newArr = Object.keys(obj);
const myArr = Object.values(obj);
const pairs = Object.entries(obj);
console.log(newArr)
console.log(myArr)
console.log(pairs)
let arr5 = [1,2,[4,5] , 4 , [4,[5,6]]];
console.log(arr5.flat(2));

console.log(Array.from({age:21}))//empty
let num2 = new Array(5);
num2[2] = 9;
console.log(num2[2]);
console.log(num2)

// Object
let user = new Object({name : "Hello"});
let mySym = Symbol('Key1');
let newUser = {
    name : "Hatim",
    "full name" : "Hatim Hussain",
    [mySym] : "MyKey1",
    isLoggedIn : true,
    leaves : ["Monday" , "friday"]
}
// accessing object values
console.log(newUser[mySym]);

