const accountId = 123
let accountEmail = "abc@gmail.com"
var accountPassword = "ABC123"
accountCity = "Kathmandu"
let accountState;

// accountId = 2  // const variables cannot be modified

accountEmail = "def@gmail.com"
console.log(accountId);

/*
Prefer not to user var
because of issue in block scope and functional scope (if conditions and for loops)
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);