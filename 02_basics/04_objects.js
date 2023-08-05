
// const tinderUser = new Object() // singleton object
const tinderUser =  {} //non singleton object


 tinderUser.id = "123abc"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname : {
            firstname : "Sojwal",
            lastname: "Ingle"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a" , 2:"b"}
const obj2 = {3: "c" , 4:"d"}
const obj5 = {5: "e" , 6:"f"}

//merge objects

// const obj3 = {...obj1 , ...obj2, ...obj5}  
const obj3 = Object.assign(obj1 , obj2)
const obj4 = Object.assign({}, obj1 , obj2, obj5) //{} optional but good practice

console.log(obj3)
console.log(obj4)


const users = [
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 2,
        email : "xyz@gmail.com"
    },
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 1,
        email : "abc@gmail.com"
    },
]


//how to access values from array of objects
//basically when we get data from db in the form of array of objects

// console.log(users[1].email);



console.log(tinderUser);
console.log(Object.keys(tinderUser));   // return type is Array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //convert every key value into array
//  [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));



// Object de-structure

const course = {
    name : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// console.log(course["name"]);

// const {courseInstructor} = course   //new way to extract value from object

const {courseInstructor: instructor} = course

console.log(instructor);





