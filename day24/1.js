// Basically it helps us to parmanently attach the  context of any object to a particular function , no matters where and how many times it is called it will refer to that attached context.
const obj1 = {
    name : 'Hatim',
    age : 22,
    welcomeUser: function() {
        console.log(`Hello ${this.name}`);
    }
}

const obj2 = {
    name : 'Ayush',
    age : 22,
}
const newUser = obj1.welcomeUser.bind(obj2);
newUser();


// customizing properties inside objects
Object.defineProperty(obj2 , 'name' , {
    writable : false, // now we can't overwrite "name" the property
    enumerable : false, // it stops the iteration over the "name" property
})
obj2.name = "Abhay";
for(let [key , value] of Object.entries(obj2)) {
    console.log(key , value);
}


//Getters and setters are used to add encapsulation / securing our data from direct access
class user {
    constructor(email , password) {
        this.email = email;
        this. password = password;
    }
    get password() {
        return this._password.toUpperCase()+'3908JHfbibb';
       // return this.password.toUpperCase()+'3908JHfbibb'; // this will lead to stack overflow because we are password functiion inside password function so that's why we have to differentiate the names
    }
    set password(value) {
        this._password = value;
    }
}
const user1 = new user('abc@gmail.com' , 'abc123');
user1.password = 'Hatim';
console.log(user1.password);