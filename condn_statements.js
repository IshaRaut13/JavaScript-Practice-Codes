let age = 4

// if statement
if (age >= 18) {
    console.log("Can have license")
}

// if-else statement
if (age >= 18) {
    console.log("Can have license")
} else {
    console.log("Not eligible")
}


//else-if statement
if (age < 18) {
    console.log("Minors")
} else if (age > 60) {
    console.log("Senior citizen")
} 
else {
    console.log("Middle age citizen")
}

// ternary operator
let result = age < 18 ? "Minor" : "Adult";
console.log(result)