// Create a function to count the number of vowels in a string

const vowel =  (string) => {
    console.log(`String is ${string}`)
    count = 0
    for (let str of string) {
        if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
            count++
        } 
    }
    console.log("Number of vowels are",count)
}

vowel("oozi")