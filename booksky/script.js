//Selecting popup box and popup overlay button

let popupoverlay = document.querySelector(".popup-overlay")
let popupbox = document.querySelector(".popup-box")
let addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//Select cancel button
let cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//Select Container,add-book,book-title-input,Book-author-input,book-description-input

let container = document.querySelector(".container")
let addbook = document.getElementById("add-book")
let booktitleinput = document.getElementById("book-title-input")
let bookauthorinput = document.getElementById("book-author-input")
let bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    let div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})



function deletebook(event){
    event.target.parentElement.remove()
}