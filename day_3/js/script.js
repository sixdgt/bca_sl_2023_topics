// Control Statement
// if statement
let num_one = 12
let num_two = 23

if (num_one + num_two == 35){
    console.log("Correct Answer")
    console.log("The result is: " + (num_one + num_two))
}

if (num_one > num_two) {
    console.log(num_one + " is greater than " + num_two)
}

if (num_one < num_two){
    console.log(num_one + " is smaller than " + num_two)
}

// exercise
// define two variable country and country code
// check if the value and type of variable is same or not
// value -> "Nepal" for country and "NP" for code
// type -> String
let country = "Nepal"
let country_code = "NP"
let number_code = 977
let country_status = true
if (country === country_code){
    console.log("Only type is match")
}

if (country === "Nepal"){
    console.log("Match")
}
let password = "dav"
// to check type of variable we can use typeof operator
console.log(typeof country)
console.log(typeof number_code)
console.log(typeof country_status)
console.log(typeof password)
if(typeof password !== String){
    console.log("Incorrect input")
}

// if else statement
let college_name = "dav"
let college_location = "lalitpur"
if (college_name == "dav" & college_location == "lalitpur"){
    console.log("Correct information provided")
} else {
    console.log("Incorrect information")
}

let username = "mark"
let pin_code = 1234
if (username == "martin" | pin_code == 1234){
    console.log("Username or pin is valid")
} else {
    console.log("Invalid credentials")
}

// if else if statement
let marks = 89
if (marks >= 0 & marks <= 39.99){
    console.log("Fail")
} else if (marks >= 40 & marks <= 59.99){
    console.log("Third Division")
} else if (marks >= 60 & marks <= 64.99){
    console.log("Second Division")
} else if (marks >= 65 & marks <= 84.99){
    console.log("First Division")
} else if (marks >= 85 & marks <= 100){
    console.log("Distinction")
} else if (marks > 100 | marks < 0){
    console.log("Please enter value between 0-100")
}

// nested if else statement
let acc_no = "AC-001"
let pin = 5588
let acc_type = "savings"

if (acc_no !== "AC-001"){
    console.log("Welcome to NIC Asia Bank")
    if(pin === 5588){
        console.log("Have a nice day")
        if (acc_type === "savings"){
            console.log("Your account type is: savings")
        } else {
            console.log("Please contact at bank for your account type")
        }
    } else {
        console.log("Invalid account number or pin code")
    }
} else {
    console.log("Account not available at the moment")
}

// switch statement
let day_number = 5

switch(day_number){
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("Thursday")
        break
    case 6:
        console.log("Friday")
        break
    case 7:
        console.log("Saturday")
        break
    default:
        console.log("Invalid day number")
        break
}