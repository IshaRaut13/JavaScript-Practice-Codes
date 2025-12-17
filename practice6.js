// create a game where you start with any random game number. 
// Ask the user to keep gussesing the game number until the user enters correct value.

let gameNum = 25
let userNum = prompt("Guess the number")        
while (userNum != gameNum){
    userNum = prompt("You entered wrong number. Guess it again")
    // prompt takes the input as string so thats y we have to used != in the condition
}
console.log("Hurrryyyyy!!!!!! you guessed the correct number", userNum)