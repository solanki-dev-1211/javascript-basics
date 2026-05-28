const accountId = 12345
let accontEmail = "dev@example.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2
accontEmail = "dex@gmail.com"
accountPassword = "121805"
accountCity = "Delhi"

console.log(accountId)
// create a table

/*
prefore not use to var
becouse issue in block scope scope means{}
*/
console.table([accountId, accontEmail, accountPassword, accountCity])