// for of loop
let nums = [1,2,3,4,5];
for(const num of nums) {
    console.log(num);
}
let str = "Hello Wolrd";
for(const char of str) {
    console.log(char);
}
  const myMap = new Map();
  myMap.set("In" , "India")
  myMap.set("Fr" , "France");
  for(const [key , value] of myMap) {
    console.log(key , " :-" , value);
  }
// for in loop
let nums = [1,2,3,4,5];
for(const key in nums) {
console.log(key);
}

const obj = {
    name : "Hatim",
    age : 21
}
for(const key in obj) {
    console.log(obj[key]);
}
let str = "Hello Wolrd";
for(const key in str) {
    console.log(key);
}

// for each loop
let arr = [1,2,3,4];
arr.forEach( function(val , idx , arr)  {
   console.log(val , idx , arr)
})
function printMe(val ,idx , arr) {
    console.log(val , idx , arr);
}
arr.forEach(printMe);
filter
let nums = [1,2,3,4,5];
const arr = nums.filter((val) => {
return val>=3;
})
console.log(arr);

// map
let nums = [1,2,3,4,5];
const arr = nums.map((val) => val * 10);
console.log(arr);

// reduce
let nums = [1,2,3,4,5];
const total = nums.reduce((acc , curVal) => {
return acc*curVal;
} , 1)
console.log(total);

// function chaining
let nums = [1,2,3,4,5];
const arr = nums.map((val) => val*10).map((val) => val+1).filter((val) => val >=30);
console.log(arr);
