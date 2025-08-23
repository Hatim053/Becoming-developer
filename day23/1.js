// Call() - lets you run a function with a specific this value and arguments in simple words  it helps to you tranfer the context of one object into  another function

function setUsername(username) {
this.username = username;
}

function createUser(username , email , age) {
  //setUsername(username); // in this case username won't set because we are not holding the reference
    setUsername.call(this , username); // now we passed our own context into setUsername so this keyword in setUsername will refer to createUser
    this.email = email;
    this.age = age;
}

createUser.prototype.printMe = function() {
    console.log(`Hello ${this.username}`);
}
const user1 = new createUser('Hatim' , 'abc@gmail.com' , 22);
console.log(user1);
user1.printMe();

class User {
    constructor(username , email , age) {
        this.username = username;
        this.email = email;
        this.age = age;
    }

    logMe() {
        console.log(`Hello ${this.username}`);
    }
}

const user2 = new User('Hatim' , "abc@gmail.com" , 22);
user2.logMe();

class Admin extends User {
    constructor(username , email , age , password) {
        super(username , email , age);
        this.password = password;
    }
    encryptPassword() {
        this.password  = this.password+"Abc";
    }
    static print() {
        console.log(`Hello World`);
    }
}

const admin1 = new Admin('Hatim' , 'abc@gmail.com' , 22 , '123');
admin1.encryptPassword();
console.log(admin1);
admin1.print(); // not accesible by instances beacuse staic methods are only accesible by class itself
Admin.print(); // accessible
console.log(admin1 instanceof User); // true
console.log(admin1 instanceof Admin); // true
console.log(user2 instanceof Admin); // false
console.log(user2 instanceof User); // true
