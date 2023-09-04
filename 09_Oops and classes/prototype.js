// let myName = "hitesh        "

// console.log(myName.trueLength);



let myHero = ["thor" , "spiderMan"]

let heroPower = { 
    thor : "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}


Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
}

myHero.hitesh()
// heroPower.hitesh()

myHero.heyHitesh()
// heroPower.heyHitesh()


//inharitence

const User = {
    name : "chai",
    email : "chai@google.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvalible: false
}

const TASupport = {
     makeAssiegnment: "js assignment",
     fulltime : true,
     __proto__: teachingSupport // it is refrencing to teaching support by using __proto__
}

teacher.__proto__ = User 


//moderen syntax

Object.setPrototypeOf(teachingSupport , teacher)


let anotherUsername = "chaiAurCide      "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"sojwal".trueLength()
"iceTea".trueLength()
