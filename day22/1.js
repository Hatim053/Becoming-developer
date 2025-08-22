function createUser(name , age) {
    this.name = name;
    this.age = age;
}
const user1 = new createUser("Hatim" , 22);

// every new object that is initialized using this construcotr function has acces to this prototype method / function
createUser.prototype.printMe = function() {
    console.log(`Hey my name is ${this.name} and i am ${this.age} years old`);
}
user1.printMe();

let arr = [1,2,3,4];
// creating our own prototype method / function to swap first and last element of array
// this prototype function / method is accessible by all the arrays
Array.prototype.swap = function() {
    let nums = this;
    if(nums.length == 1 || nums.length == 0) {
    console.log(-1);
    return;
    } 
    let temp = nums[0];
    nums[0] = nums[nums.length-1];
    nums[nums.length-1] = temp;
    console.log(nums);
}

arr.swap();

let str = "  HelloWorld   ";
// this prototype function / method is accessible by all the strings
String.prototype.validLength = function() {
    console.log(this.trim().length);
}
str.validLength();
// this prototype method / function is used by all the objects and also by arrays , strings and functions because at the end evrything takes refrence from object
Object.prototype.print = function() {
    console.log(this);
}

arr.print();
str.print();

const obj1 = {
    name : "Hatim"
}
const obj2 = {
    age : 22
}
// ways to inherit properties
// (1) 
console.log(obj1.age);
obj1.__proto__ = obj2;
console.log(obj1.age);

// (2)
console.log(obj2.name);
Object.setPrototypeOf(obj2 , obj1);
console.log(obj2.name);
