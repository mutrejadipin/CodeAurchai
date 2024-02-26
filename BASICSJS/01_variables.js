const accountID=1122
let accountEmail="mutreja@google.com"
var accountPassword="12Ab" /**not used frequetly because of its issue in block scope and functional scope */
accountCity="Gurgaon"
let accountState; //undefined


console.log(accountID)
//accountID=1112
//console.log(accountID) -> because const cant change
console.table([accountID,accountEmail,accountPassword,accountCity]) //console.table is useful when print multiple values at a time in tabular format
accountEmail="dipin@microsoft.com"
accountPassword="12aB"
accountCity="Noida"

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])

