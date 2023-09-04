const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn:true,

    getUserDetails: function(){
        // console.log("GOt user details from db");
        // console.log(`username: ${this.username} `)
        console.log(this);
    }
}

const user2 = {
    username: "hitesh",
    loginCount: 8,
    signedIn:true,

    getUserDetails: function(){
        // console.log("GOt user details from db");
        // console.log(`username: ${this.username} `)
        console.log(this);
    }
}
// console.log(user["username"]);
// console.log(user.getUserDetails());

// console.log(this);

function User(username , loginCount , isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this; // it is not mandatory it by default returns
}

const UserOne = new User("hitesh " , 12 ,true);
console.log(UserOne);

const userTwo = new User("chaiAurCode" ,11 , false)
console.log(UserOne);
console.log(userTwo);

console.log(userTwo.constructor);