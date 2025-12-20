// Create h2 heading element with text - "hello javascript".
// Append "from Apna College Students" to this text using JS.

let h2 = document.querySelector("h2")
console.log(h2)
h2.innerText = h2.innerText + ' from Apna College students'
console.log(h2)


// Create 3 divs with common class name - "box".
// Access them & add some unique text to each of them.
let divs = document.querySelectorAll("div")
console.log(divs)

// basic thing
div[0].innerText = 'Hello'
div[1].innerText = 'Isha'
div[2].innerText = 'Raut'
console.log(div)

// instead using for-of loop
id = 0
for (let div of divs) {
    div.innerText = `This is unique text ${id}` //String Interpolation
    id++
}




