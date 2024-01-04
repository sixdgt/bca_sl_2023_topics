// DOM - Element
// getElementById() - we can access HTML element by attribute i.e id
// example
const title = document.getElementById("title")
const content = document.getElementById("content")
const button = document.getElementById("button")

// changing HTML Content
title.innerHTML = "HTML DOM - JS"
content.innerHTML = "JS DOM | HTML Element property"

// here innerHTML property is use to manipulate data inside
// HTML Element

// style property
button.style.color = "WHITE"
button.style.fontFamily = "open-sans"
button.style.backgroundColor = "BLACK"
button.style.border = "0"
button.style.cursor = "pointer"
button.style.padding = "5px"
button.style.boxShadow = "1px"
button.style.borderRadius = "25px"
button.style.width = "50%"
// button.style.fontSize = "15px"

// classList property
// add() method adds class to element
button.classList.add("button")

// remove() method removes class of element
