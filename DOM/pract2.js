// Create a new button element.
// Give it a text "Click me".
// bg=red, text color= white.

let newBtn = document.createElement("button")
newBtn.innerText = 'Click me'
newBtn.style.backgroundColor = 'red'
newBtn.style.color = 'white'

// insert the button as the first element inside the body tag.
document.querySelector("body").prepend(newBtn)

// create a <p> tag in html, it a class & some styling.
// Now create a new class in css and try to append this class to the <p> element. --> if used setAttribute()
// did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.
let para = document.querySelector("p")
para.classList.add("myClass")
para.classList.remove("myClass")