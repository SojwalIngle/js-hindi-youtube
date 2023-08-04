// # primitive data type


// all primitive are call by value
// 7 types : String , Number , Boolean , null , undefined , Symbol, BigInt





// Reference type data type Non-Primitive...all are call by reference

//Array , Objects , Functions


/*

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/


/*

javascript is dynamicly type language  n dynamically typed language, the type of a variable is checked during run-time whereas...
In statically typed language, the type of a variable is checked during compile-time.

*/

const score = 100
const scoreVal = 100.3

const isLoggedIn = false
const temp = null

let userEmail ; //unddefined

const id = Symbol('123')   // symbol
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 223248294892424242n; // bigInteger



// Array . objects , Functions

const heros = ["shaktiman" , "naagraj" , "doga"] 

let myObj = {
       name : "sojwal",
       age : 22
}

const myFunction = function(){      
       console.log("Hello world");
}


console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);  //function but commnly says object function



