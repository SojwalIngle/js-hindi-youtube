
// when we define varibale with var if it is decleared in a perticular scope then also 
// we can access it out of scope thats  why we are not prefer to use "var"
// use let , const
// demo here

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

// // console.log(a);
// // console.log(b);
// console.log(c);


// ------------------------------------------------

//gobal scope
// var c = 300

// if(true){
//     //local scope
//     let a = 10
//     const b = 20
//     var c = 30
// }

// // console.log(a);
// // console.log(b);
// console.log(c);




// ----------------------------------------------------

let a  = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("inner" , a);
}

console.log("outside " , a);
// console.log(b);
console.log(c);



// in browser console global scope is different
// in code envirenment when you run through  node global scope is different


function one(){

    const username = "sojwal"

    function two(){
        const website = "youtube"
        console.log(username);

    }
    // console.log(website);
    two()
}

one();



if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// +++++++++++++++++++++++++++++++++ interesting +++++++++++++++++

console.log("++++++++++++++++++++++++++++=intresting=++++++++++++++++=");
//mini hoisting

addone(5); // it will not give error because it is calling function 
function addone(num){
    return num + 1;
}


addTwo(5); // it wwill give error because function is assigned to an varibale and
          // we are accsessing it before its inintialization
const addTwo = function(num){
    return num + 2;
}

//   this concept is known as hositing
