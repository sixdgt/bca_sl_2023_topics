// income amount
let salary = 30000
let share = 3000
let fd_interest = 300

let total_income = [salary, share, fd_interest]

// returns total income
function getTotalIncome(){
    let sum = 0
    for(let i = 0; i < total_income.length; i++){
        sum += total_income[i]
    }
    return sum
}

// expense amount
let pf = salary * (10/100)
let tds = salary * (1/100)
let insurance = 700
let vehicle_exp = 1000
let fooding_exp = 2000
let extra_exp = 1000

let total_expense = [pf, tds, insurance, vehicle_exp, fooding_exp, extra_exp]

function getTotalExpense(){
    let exp = 0
    for(let i = 0; i < total_expense.length; i++){
        exp += total_expense[i]
    }
    return exp
}

function getGrossIncome(){
    
}
