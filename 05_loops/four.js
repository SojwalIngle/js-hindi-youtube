const myObject = {
    js  : "javascript",
    cpp : "c++",
    rb  : "ruby",
    swift: "Swift by apple"
}

// for in loop object

for (const key in myObject) {
   console.log(myObject[key]);
   console.log(`key of obj: ${key} && value of obj: ${myObject[key]}`);
}



//for in loop Array

const arr =["js" , " java" , "cpp" , "python"] 

for(const i in arr){
    console.log(arr[i]);
}

for(const i in arr){
    console.log(i);
}

for(const i of arr){
    console.log(i);
}

// const map = new Map()
// map.set('IN', "India");
// map.set("USA" , "United state of America")

// for(const i in map){
//     console.log(i);
// }

// note : map is not iterable through for in loop

// console.log(map);




