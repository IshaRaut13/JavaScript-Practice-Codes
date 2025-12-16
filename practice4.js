let num = prompt("Enter the number")

if (num >= 80 && num <= 100){
    console.log("The number scored is ", num)
    console.log("Grade A")
} else if (num >= 70 && num < 80){
    console.log("The number scored is ", num)
    console.log("Grade B")
} else if (num >= 60 && num < 70){
    console.log("The number scored is ", num)
    console.log("Grade C")
} else if (num >= 50 && num < 60){
    console.log("The number scored is ", num)
    console.log("Grade D")
} else {
    console.log("The number scored is ", num)
    console.log("Grade F")
}