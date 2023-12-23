// basic function

// Rule:
// 1. must invoke in order to execute the code inside function
// 2. follow naming convention to define function name

// Type of user defined function
// 1. without parameter and without return type

// defining function
function showMessage(){
    let message = "Have a nice day!!!"
    console.log("Message: " + message)
}

// invoking function
showMessage()

// 2. with parameter and no return type
function checkUserType(userType, department){
    let user_type = "ADMIN";
    let user_department = "HEADQUARTER";
    if (user_type === userType.toUpperCase() && 
    user_department === department.toUpperCase()){
        console.log("Welcome to DAV Admin Panel")
    } else {
        console.log("Message: Access Forbidden")
    }
}

// passing arguments to function with parameters
let ut = "admin"
let dept = "Headquarter"
checkUserType(ut, dept);

// 3. with parameter and return type
function checkResult(checked_value){
    let result = "Message: ";
    switch(checked_value){
        case 1:
            return result.concat(result, "You're under average")
        case 2:
            return result.concat(result, "You'are average")
        case 3:
            return result.concat(result, "You're good")
        case 4:
            return result.concat(result, "You're best")
        case 5:
            return result.concat(result, "You're excellent")
        default:
            return result.concat(result, "You've no record available")
    }
}

console.log("Checking user status:" + checkResult(3))

// 4. without parameter and with return type
function showUserGoal(){
    let goal = 45
    let goal_status = ""
    if(goal >= 0 && goal <= 39.99){
        goal_status = "Beginner Level"
    } else if (goal >= 40 && goal <= 64.99){
        goal_status = "Intermediate Level"
    } else if (goal >= 65 && goal <= 89.99){
        goal_status = "Advanced Level"
    } else if (goal >= 90 && goal <= 100){
        goal_status = "Expert Level"
    } else {
        goal_status = "Please set your goal between 0-100"
    }
    return goal_status
}

console.log("User goal checker: " + showUserGoal())

    
}