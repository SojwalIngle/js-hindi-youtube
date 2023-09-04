const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter)

const chai = {
    name: 'ginger',
    price : '250',
    isAvalible : true,

    orderChai : function(){
        console.log('chai nai banegi')
    }
}




console.log(Object.getOwnPropertyDescriptor(chai , "name"));

Object.defineProperty(chai , "name" , {
    writable: false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));


for (let [key , value] of Object.entries(chai)) {

    if(typeof value != 'function'){
        console.log(`key : ${key} and value : ${value}`);
    }
}