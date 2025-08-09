String - 
let name = "Hello";
let city = new String("Bhopal");
let str1 = `${name} Is Currently Staying In ${city}`;
let url = "https://www.devcode.com";
let str2 = "  Hello World   ";
console.log(name.length);
console.log(str2.trim());
console.log(name[0] , name.charAt(0));
console.log(name.indexOf('H'));
console.log(str2.replace("o" , '-'));
console.log(str2.replaceAll('o' , '-'));
console.log(name.startsWith('H'));
console.log(name.endsWith('o'));
console.log(name.concat(" " + city));
console.log(url.split('/'));
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(str1.includes("In"));
console.log(name.slice(0,2));
console.log(name.substring(0,2));
console.log(num.toString());



//Date and Time
let myDate = new Date();
console.log(myDate.toLocaleString());

let curTime = Date.now();
console.log(curTime);


// Maths and Number
let num = 100;
let num2 = new Number(200);
let num3 = 123.4555;
console.log(num.toFixed(2));
console.log(num3.toPrecision(4));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Math.random() , Math.round(4.4), Math.abs(5-10) , Math.min(2,3,4) , Math.max(6,4,3,2) , Math.PI());
const min = 10;
const max = 20;
console.log(Math.floor((Math.random() * (max-min+1)) + min));






