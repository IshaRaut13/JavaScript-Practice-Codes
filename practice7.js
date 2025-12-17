/*
Prompt the user to enter their full name.
Generate a username for them based on the input.
start username with @, followed by their full name without space and ending with fullname length
*/

let str = prompt("Enter your full name") //fullname with space:- Isha Raut

console.log("Full Name is", str) // print it:- Isha Raut

noSpaceStr = str.replace(/ /g, '') //remove the spaces from the full name:- isharaut

console.log(`The username will be @${noSpaceStr.toLowerCase()}${noSpaceStr.length}`) // @isharaut8


//name without space
let fullname = prompt("Enter your full name")
let userName = "@" + fullname + fullname.length
console.log(userName)   // but here the username will not be in lower case also no space will be removed