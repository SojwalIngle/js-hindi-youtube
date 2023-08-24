// for each loop in array

const coding = ["js" , "java" , "python" , "cpp" , "c" , "Ruby"]


coding.forEach( function(i){
    console.log(i);
})

coding.forEach((i) => {
    console.log(i);
})


// coding.forEach((i) => {
//     printMe(i);
// })

// function printMe(item){
//     console.log(item)
// }

coding.forEach(printMe);

function printMe(item){
    console.log(item)
}

coding.forEach((item , index , arr) => {
    console.log(item, index , arr);
})



// Array of object

const myCoding = [
    {
        name : "javascript",
        file : "js"
    },
    {
        name : "java",
        file : "java"
    },
    {
        name : "CPP",
        file : "cpp"
    }
]


myCoding.forEach((arr) => {
    console.log("arr val : ", arr);
    console.log(arr.name)
    console.log(arr.file)
    console.log(arr["name"])
    console.log(arr["file"])
})


for(let i = 0 ; i < myCoding.length ; i++){
    console.log(myCoding[i].name);
    console.log(myCoding[i].file);
    console.log(myCoding[i]);
}

console.log("hi")
