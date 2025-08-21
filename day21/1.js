function user(name , age) {
    this.name = name;
    this.age = age;
}

const student1 =  new user("Hatim" , 21); // this creates a new object and sets value there
const student2 =  user("Hussain" , 21); // this set value to the global object 
console.log(student1.name);



function get() {
    console.log(this.name);  // student2 values are axtually set to global object 
}
get();


console.log(student1 instanceof user);