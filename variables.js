const accountId = 123456789;
let accountEmail = "sonu@gmail.com";
var accountPassword  = "12345";
accountCity = "Gwalior"; // global variable

let accountState; // undefined

// accountId = 2 // not allowed

accountEmail = "sonu@.com"
accountPassword = "12345655"
accountCity = "Delhi"

console.log(accountId);

console.log(accountCity)

/*
prefered not to use var
because of issue in block scope and functional scope
*/

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);