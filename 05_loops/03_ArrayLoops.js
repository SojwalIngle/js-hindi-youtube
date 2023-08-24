// for of

// ["", "" , "" ]
// [{} , {} , {}]


const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i);
}

const greetings = "Hello world!"

for (const i of greetings) {
    console.log(i);
}

// Maps - unique values

const map = new Map()
map.set('IN', "India");
map.set("USA" , "United state of America")
console.log(map);


for (const [key , value] of map) {
    console.log(key);
    console.log(value);
}


//object 

const myObj = {
    "Game1" : "NFS",
    "Game2" :"Spiderman"
}

// Note : Map can be iteratable via forOf loop but Object can not

// for (const [key , value] of myObj) {
    
// }



