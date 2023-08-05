// singleton - if object constructor se banega to singleton


//object literals


// Object.create // constructor method to create object

const mySym = Symbol("key1")

const user = {
    name : "sojwal",
    "ful name" : "Sojwal Ingle",
     [mySym] : "MyKey1", //define symobol in objects
    age : 22,
    location : "Akola",
    email : "sojwal@google.com",
    isLoggedIn :false,
    lastLoginDays : ["monday" , "tueesday"]
}


// two ways to access data 

// console.log(user.name);
// console.log(user["location"]);
// console.log(user["ful name"]);

// console.log(user[mySym]);



user.email = "sojwal@Hexaware.com"
// Object.freeze(user) //this method frezz object means can not change
user.email = "sojwal@Cemtium.com"

console.log(user);


user.greeting = function(){
    console.log("hi js User");
}

user.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());




