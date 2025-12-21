// let modeBtn = document.querySelector("#mode")

// let mode = "light" //then change it to dark and vice versa

// modeBtn.addEventListener("click", () =>{
//     if (mode === "light"){
//         mode = "dark"
//         document.querySelector("body").style.backgroundColor = "black"
//     } else {
//         mode = "light"
//         document.querySelector("body").style.backgroundColor = "white"
//     }
//     console.log(mode)
// })



//-------------by using classList()--------------------------------
let modeBtn = document.querySelector("#mode")
let body = document.querySelector("body")
let mode = "light" //then change it to dark and vice versa

modeBtn.addEventListener("click", () =>{
    if (mode === "light"){
        mode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    } else {
        mode = "light"
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(mode)
})