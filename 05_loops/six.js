// filter 

const coding = ["js" , "java" , "python" , "cpp" , "c" , "Ruby"]

console.log(coding);

const values = coding.forEach( (item) => {
    //   console.log(item);
      return item;
})

console.log(values);


// Note - for each loop not return any thing


const myNums = [1 ,2 , 3, 4, 5, 6];

//filter returns value

// const newNums = myNums.filter((num) => num > 4) 

//if you open scope then you must return
// const newNums = myNums.filter((num) => {
//    return num > 4;
// })

// const newNums = []

// myNums.forEach( (num) =>  {
//     if(num > 4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);



const books = [
{
    title: 'Book one',
    genre: 'Fiction',
    publish: 1978
},
{
    title: 'Book two',
    genre: 'History',
    publish: 1985
},
{
    title: 'Book three',
    genre: 'Science',
    publish: 2009
}

];


let userBooks = books.filter( (bk) => bk.genre === 'History' )

 userBooks = books.filter( (bk) => bk.publish >= 2000 )
 userBooks = books.filter( (bk) =>{return bk.publish >= 2000 && bk.genre === 'Science'})


console.log(userBooks);






