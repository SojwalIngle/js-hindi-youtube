let score = "33"

console.log(typeof score);

let valInNumber = Number(score)

console.log(typeof valInNumber);

let score1 = "33abc"
let valInNumber1 = Number(score1)
console.log(valInNumber1);


let temp = null
let valInNumber2 = Number(temp)
console.log(valInNumber2);


//"33" => 33
//"33abc" => NaN
//"true" => 1 ;
//false => 0;
//"null" => 0;

let temp1 = undefined
let valInNumber3 = Number(temp1)
console.log(valInNumber3);



// 1 => true ; 0 => false
 // "" => false
 // "hitesh" => true


 let somNumber = 33
 let stringNumber = String(somNumber);
 console.log(typeof stringNumber);