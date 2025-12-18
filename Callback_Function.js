//----------------- forEach loop in Arrays------------------------

/* A callBack Function is a function which is passed as an
argument to another function*/

let arr = [1,2,3,4,5]

arr.forEach(function printVal(val) { 
    //forEach will take each elements from arr and pass it to the callback function's val one by one
    console.log(val)
})  

// callback functions are generally written in arrow function form
let arr1 = ["Isha", "Sanket", "Siddhi", "Udit"]
arr1.forEach((val, id, arr1) => { 
    console.log(val.toUpperCase(), id, arr1)
})

// In call back function there are 3 parameters that can be used
// value --> gives exact values, id --> gives index of item, arr --> whole array

// Q. what are higher order functions/Methods (HOF)/(HOM)
// ans. HOF/HOM are the funct that either takes other functions as a parameter inside 
// or return them as an output