// Immediately Invoked Function Expressions(IIFE)


(function chai(){
    //named IIFE
    console.log("DB connected");
})();


// when you are using IIFE always end with ; after invoking

//arrow function


(() =>{
    //unnamed IIFE
    console.log("inside arrow function ");
}) ();

((name) =>{
    console.log(`inside arrow function ${name}`);
}) ("sojwal");
//global scope ke pollution se problem hoti hai to usko hatane ke liye IIFE use kiya







