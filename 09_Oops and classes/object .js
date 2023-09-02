function multipleBy5(num){
    return num*5
}


multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`pricee is ${this.score}`)
}

const chai = new createUser("Chai" , 25)
const tea  = new createUser("tea" , 250)

 chai.printMe()

//  const chai = createUser("Chai" , 25)
// const tea  =  createUser("tea" , 250)

// if you run without new keyword then eror comes cannot read properties of undefined
// (reading "printME") if you see prototype object you will see new properties 
// has already injected but when we have transfer values form fucntion to variable
// we didnt told him that we have injected new properties so we have to tell them
// that new properties has been added by "new" keyword  

//  const chai = new createUser("Chai" , 25)
//  const tea  =  new createUser("tea" , 250)

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/