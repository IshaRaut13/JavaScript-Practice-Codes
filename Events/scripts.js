// Event handling in js
// Node.event = () => {
//     code
// }

let btn1 = document.querySelector("#btn1")

// btn1.onclick = () => {
//     console.log("Button was clicked")
//     alert("Hello!!!!!!!")
// }

let btn2 = document.querySelector("#btn2")

btn2.ondblclick = () => {
    console.log("Button was clicked twice")
}
 
let box = document.querySelector("div")
box.onmouseover = () => {
    console.log('Your inside div')
}

// --------------------------------Event Object--------------------------------
//  its a special object that has details about the event.
//  all event handlers have access to the event object's properties and methods.
/*
    node.event = (e) => {
        code
    }
*/

// btn1.onclick = (e) => {
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX, e.clientY) // tells at what position horizontally and vertically the click is performed
// }


//-----------------------------------Event Listeners-------------------------------
/*
    node.addEventListener(event, callback)
    node.removeEventListener(event, callback)

    *Note: the callback reference should be same to remove

*/

btn1.addEventListener("click", (e) => {
    console.log("button was clicked handler1")
    console.log(e.type)
})

btn1.addEventListener("click", (e) => {
    console.log("button was clicked handler2")
    console.log(e.type)
})


// to remove handlers the arrow function should be kept in separate variable
const handler3 = () => {
    console.log("button was clicked handler3")
    console.log(e.type)
}

btn1.removeEventListener("click", handler3) 