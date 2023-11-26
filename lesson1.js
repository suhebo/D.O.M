

/*     Qeybta 1aaad
    const element = document.getElementById("title")
    const text = document.getElementsByTagName("p")[0]
    
    const className = document.getElementsByClassName("btn")[0]

    const universal = document.querySelector("#title")

console.log(element)
console.log(text)
console.log(className)
console.log(universal)
*/

    //qeybta 2aad
// let element = document.querySelector("#title")
// element.innerHTML  = "wa aniga"

// element.style.color =  "red"
//  element.style.backgroundColor = "blue"


//  let see = document.querySelector(".t")
//  see.innerHTML = "fiykjg"
//  see.style.backgroundColor = "black"
//  see.style.color = "white"


const title = document.querySelector(".title")

const button = document.querySelector(".btn")

const suh = document.querySelector(".btn2")

suh.addEventListener("click", function()

{
    title.style.color = "red"
})


button.addEventListener("click", function()
{
    title.style.color = "gray"
})

//classwork
const see = document.querySelector(".see")
see.addEventListener("click", function()
{
    see.style.backgroundColor = "red"
})


const body = document.querySelector("body")
const a = document.querySelector(".march")

a.addEventListener("click", function(){
    body.style.backgroundColor = "gray"
})