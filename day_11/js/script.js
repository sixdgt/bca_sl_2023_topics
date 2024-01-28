// defining elements
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const username = document.getElementById("username")
const passkey = document.getElementById("passkey")
const errorMsg = document.getElementById("errorMsg")
const regForm = document.getElementById("regForm")
const showForm = document.getElementById("showForm")

// defining button
const btnReg = document.getElementById("btnReg")

// adding event listener to button
// btnReg.addEventListener("click", function(){
//     console.log("data submitted")
// })

btnReg.addEventListener("click", function(event){
    if(firstName.value === "" || lastName.value === "" ||
    username.value === "" || passkey.value === ""){
        // use while submitting form
        // note: stops form submission and shows
        // error message
        event.preventDefault()
        errorMsg.innerHTML = "All fields are require!!!!"
    }
})

// use submit event on form
regForm.addEventListener("submit", (event) => {
    console.log("Form is submitted")
})

// arrow function example
// shorter form of function

// ordinary function
function showMessage(){
    return "Hello! How are you?"
}

// arrow function
const msg = () => {
    return "Hello! How are you?"
}

// if single return function then
const message = () => "Hello! How are you?"

// displaying form with event and hidden property 
// of element
// showForm.addEventListener("click", () => {
//     regForm.hidden = false
// })

// to toggle form
showForm.addEventListener("click", () => {
    regForm.hidden = !regForm.hidden
})

// exercise 
// 1. make one div
// 2. set its width 100% and height to 400px
// 3. set background color to red
// 4. set text color to white
// 5. change background color with JS Event
// 6. make two button
// first button "random color" and second button "blue"

const btnRandom = document.getElementById("btnRandom")
const btnBlue = document.getElementById("btnBlue")
const myDiv = document.getElementById("myDiv")

// generating random number between 0-255
var randomColor = () => {
    var random = Math.floor(Math.random() * 255)
    return `rgb(${random}, ${random} ,${random})`
}

// for rgb color
btnRandom.addEventListener("click", () => {
    myDiv.style.backgroundColor = randomColor()
})

btnBlue.addEventListener("click", () => {
    myDiv.style.backgroundColor = "blue"
})
