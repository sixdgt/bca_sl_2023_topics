// Variables in JS
// to define variable in JS we use 'var' or 'let'
// 'const' is use to define constant variable
// constant variable are unchangeable

// example
var num = 12
let user_status = true

// to print data in console 
console.log(num)
console.log(user_status)

// Note
// 1. var is use for global scope and let is use for block scope
// 2. variable defined with var can be re-declared and update
// 3. variable defined with let can be updated but can't re-declare

// variable re-declaration
// note: variable can't be access before it is define so whenever variable is
// re-declared it depends upon the scope it is being declared

let msg = "Hello All!"

function getMessage(){
    console.log(innerMsg) // can't access before assigned
    console.log(innerMsgOne) // undefined
    var innerMsgOne = "Variable of var"
    let innerMsg = "Wow"
    console.log(innerMsg) // will print 'Wow'
}

getMessage()
console.log(msg)
console.log(innerMsg) // can't access outside the scope