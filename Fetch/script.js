const URL = "https://dogapi.dog/api/v2/facts"
const factPara = document.querySelector("#fact")
const btn = document.querySelector("#btn")

const getData = async () => {
    console.log("Getting data1....")
    let response = await fetch(URL) //fetch returns promise in from of req-res
    console.log(response.status) //JSON format
    let data = await response.json() //json also returns promise thats y we used await
    factPara.innerText = data[0]
}

btn.addEventListener("click", getData)