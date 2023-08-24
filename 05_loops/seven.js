// map

const myNums = [1 ,2 , 3, 4, 5, 6, 7, 8 , 9, 10]



// let newNums = myNums.map( (i) => i + 10);

// newNums =  myNums.map( (i) =>{return  i + 10} );

//chaining
const newNums = myNums
              .map( (num) => num * 10 ) 
                                               //  o/p :  [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
              .map( (num) => num + 1 )  
                                               // o/p :   [ 11, 21, 31, 41, 51, 61, 71, 81, 91, 101 ]
              .filter( (num) => num >= 40 )   // o/p :  [ 41, 51, 61, 71, 81, 91, 101 ]

console.log(newNums);



