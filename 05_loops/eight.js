// reduce


const myNums = [1 ,2 , 3]

let myTotal = myNums.reduce(function (acc , currval) {
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
},0)

 

myTotal = myNums.reduce( (acc , currval) => (acc + currval), 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "HTML course",
        price : 999
    },
    {
        itemName : "css course",
        price : 1999
    },
    {
        itemName : "java course",
        price : 3999
    }
]

const finalTotal = shoppingCart.reduce(( acc ,val) => (acc + val.price) , 0)

console.log(finalTotal);


