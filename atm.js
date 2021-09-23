
const prompt = require('prompt-sync')();
const account = require('./account');


function getBalance(){
    return account.accountBalance 
}


function getDeposit(){
   let depositAmount = parseInt(prompt("How much would you like to deposit?")); 
account.accountBalance = account.accountBalance + depositAmount; 
return account.accountBalance; 
}


function validatePin(){
let userInput = parseInt(prompt("Please enter your pin"))
if(userInput != account.pin){ 
    console.log("Pin invalid, please try again")
    validatePin()
    return false; 
 } else {
     return true; 

 }
} 

function getWithdraw() {
    let withdrawAmount = parsInt(prompt("How Much would you like to withdraw?")); 
    account.accountBalance = account.accountBalance - withdrawAmount; 
    } 
    
module.exports = {
    getBalance, 
    getDeposit, 
    getDeposit

}; 



