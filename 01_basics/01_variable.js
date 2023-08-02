const accountId = 123456;
let accountEmail = "sojwal@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur"

// accountId = 2 not allowed
accountEmail = "hc@hc.com"
accountPassword = "56789"
accountCity = "mumbai"

let accountState;

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity ,accountState])

/* 
   Prefer not to use var because of issue in block scope and functional scope 
*/