function sayMyName(){
     console.log("S");
     console.log("o");
     console.log("j");
     console.log("w");
     console.log("a");
     console.log("l");
}

// sayMyName();

function addTwoNumber(n1 , n2){
    return n1+n2;
}


const op = addTwoNumber(5, 2);
console.log(op);


function mutiply(a , b){
    console.log(a * b);
}

mutiply(5,4);

function loginUserMesssage(username){
    if(username === undefined){
             console.log("please ennter a username");
             return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMesssage("sojwal"));
console.log(loginUserMesssage());



function hi(name = "sam"){
    console.log(name);
}

hi();

// ---------------------------------------------

// ... - rest or spread operator
//passing multiple values in parameter through one variable

function calculateCartPrice(...num){
   
    return num;
}

console.log(calculateCartPrice(200,300,400,500));



function calculateCartPrice1(val1 , val2 , ...num){
   
    return num;
}

console.log(calculateCartPrice1(200,300,400,500));


// --------------------------------------------------------

const user= {
    username : "sojwal",
    price : 199
} 

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

handleObject(user);
handleObject({username : "sojwal" , price: 399});


const arr = [200 , 300, 400, 500];

function mynew(arr){
    console.log(arr[1]);
}

mynew(arr);

