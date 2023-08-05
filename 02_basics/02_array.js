
const marval_heros = ["thor" , "IronMan" , "SpiderMan"]
const dc_heros = ["Superman" , "flash" , "batman"]

// marval_heros.push(dc_heros);

// console.log(marval_heros);

// console.log(marval_heros[3][1]);

//--------------------------------
//new methods to concat arrays either use concat or SpreadOperator

// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);

// const allnewheros = [...marval_heros, ...dc_heros]
// console.log(allnewheros);

// ----------------------------------


const anotherArray = [1 , 2, 3 , [4, 5, 6], 7 , [6, ,7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);


console.log(Array.isArray("Hitesh"))

console.log(Array.from("Hitesh")) //convert into array [ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name : "sojwal"})) // intresting gives empty array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));


