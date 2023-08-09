const user = {
    username : "sojwal",
    price: 999,

    welcomeMesage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// when we are accessing values in current context/values use this keyword 
// context means ye movie haai kis bare main

// user.welcomeMesage()
// user.username = "sam"
// user.welcomeMesage()

// console.log(this);

// brower ke andar jo global object hai wo window object hai


function chai(){
    let username = "sojwal"
    console.log(this);  
    console.log(this.username);  // undifined
    //this can not use in function only use in object
}

chai()

// const coffe = function(){
//     let username = "sojwal"
//     console.log(this);  
//     console.log(this.username);
// }

// coffe()

//arrow function
const coffe = () => {
    let username = "sojwal"
    console.log(this);  
    console.log(this.username);
}

coffe()


// const addTW0 = (num1 , num2) => {
//     return num1 + num2;
// }

// const addTW0 = (num1 , num2) =>   num1 + num2;
// const addTW0 = (num1 , num2) =>  ( num1 + num2 );

const addTW0 = (num1 , num2) =>  ({username : "sojwal"}); //return object in parenthesis

console.log(addTW0(3,4));

// if curly braces used then we have to write return 
// if Parenthesis  used then we dont have to write return 

