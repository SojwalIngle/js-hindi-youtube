// date

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString()); //Sat Aug 05 2023 10:13:56 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString()); //8/5/2023, 10:13:56 AM
console.log(myDate.toDateString()); //Sat Aug 05 2023
console.log(typeof myDate);


// let SpecificDate = new Date(2023, 0 , 23)
// console.log(SpecificDate.toDateString()); //Mon Jan 23 2023


// let SpecificDate = new Date(2023, 0 , 23 , 5, 3)
// console.log(SpecificDate.toLocaleString()); //1/23/2023, 5:03:00 AM


// let SpecificDate = new Date("2023-01-14")
// console.log(SpecificDate.toLocaleString()); //1/14/2023, 12:00:00 AM

let SpecificDate = new Date("02 / 11 / 2023")
console.log(SpecificDate.toLocaleString()); //1/14/2023, 12:00:00 AM



let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(SpecificDate.getTime());

console.log(Math.floor(Date.now()/1000)); // convert into miliseconds


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); //start form 0

console.log(newDate.getDay());


console.log(`${newDate.getDate()} and the time is ${newDate.getTime()}`);


newDate.toLocaleString('default' , {
    weekday: "long",
})


