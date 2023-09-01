
const promiseOne = new Promise(function(resolve , reject){
    //Do an async task 
    // DB calls , cryptography , network
    
    setTimeout( () => {
        console.log("Async task is complete");
        resolve()
    } , 1000)
}); 


promiseOne.then(function(d){
  console.log("Promise consumed");
})


new Promise(function(resolve , reject){
    setTimeout(function(){
       console.log("async task two");
       resolve();
    }, 1000)
}).then(function(){
    console.log("async two resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username: "chai" , email: "chai@example.com"});   
    },1000)
})

promiseThree.then(function(d){
   console.log("" , d);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hitesh" ,password:123 });
        }else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() =>{
    console.log("promice is either resolved or rejected");
})


const promiseFive = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javaScript" ,password:123 });
        }else{
            reject('ERROR: javascript went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(resonse);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();


// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((d) => {
    console.log(d);
    return d.json();
})
.then((data) => console.log(data))
.catch((error) => console.log(error));