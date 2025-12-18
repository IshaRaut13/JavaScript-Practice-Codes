// Functions --> Block of code that performs a specific task, can be invoked whenever needed
// Methods are like functions which are binded/associated with some data structure(object) 
// (eg:- "abc".toUpperCase() is a method that is binded with string)
//Fucntion definition and Call
// syntax
/* 
    function functName(parameters) {
        task/work
        params are block scope -> local variables
    }

    functName(arguments); //function call
*/


function myFunction() { //function definition
    console.log("hey!!!! How are you")
}

myFunction() // functionn call


// Arrow Function --> Compact way of writing a function
// Part of Modern JS
/*
    const functName = (param1, param2) => {
        work/task
    }
    
    functName(arg1, arg2)
*/

//sum function
const sum = (a, b) => {
    console.log(`Sum of ${a} and ${b} is`, a+b)
}

sum(2,3)