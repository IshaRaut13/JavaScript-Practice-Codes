// strings are immutable in js
let str='isha raut'
 console.log(str.length)
 console.log(str[7]) // u

//  Template Literals
const product = {
    item : "Pen",
    price : 10,
}
// when the values of expression/placeholders is coming in realtime thats called string interpolation
console.log(`The cost of ${product.item.toUpperCase()} is ${product.price}/-`)

// Escape Charaters
/*  
    \n --> new line
    \t --> tab
*/

// String Method/Function in JS   --> strings are immutable in js
/*
    str.toUpperCase()
    str.toLowerCase()
    str.trim() --> removes whitespaces only for start and end
    str.slice(start,end) --> returns part of string
    str1.concat(str2) --> joins two strings
    str.replace(oldstr, newstr) --> replaces old with new one word but only first time
    str.replaceAll(oldstr, newstr) --> replaces all repeated values
    str.charAt(index)
*/