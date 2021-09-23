"use strict"
 
const prompt = require('prompt-sync')();
const  accountBalance  = require('./account');
const atm = require('./atm');

let validated = false;  
while(validated=== false){ 
validated = atm.validatePin()
    let atmOption = prompt("Hello! what would you like to do? 'Check Balance', 'Witdraw', 'deposit', 'restart', 'quit' ")
switch (atmOption) {
    case 'Check Balance':
        console.log(account.accountBalance)
        break;
    case 'deposit': 
    console.log(atm.depositAmount)
    break; 
     case 'Withdraw':
     console.log(atm.withdrawAmount)
     break; 
     case 'restart':
     mainMenu()
     break; 
     case 'quit': completeTranaction = true
     break; 
     default: 
    
    }
}

mainMenu();
console.log("Transaction Complete"); 