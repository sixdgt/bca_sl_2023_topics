// defining array
let places = ["Kathmandu", "Lalitpur", "Pokhara", "Butwal"]
const gender = ["Male", "Female", "Others"]

// accessing array elements with indexing
console.log(places[0])
console.log(places[1])
console.log(places[3])

// since array is an object so we can define it using array()
let lakes = new Array("Phewa", "Begnas", "Rara", "Tilicho")

// array properties and methods
// properties

// length - return the length of an array
// example
console.log(places.length)
console.log(gender.length)
console.log(lakes.length)

// methods
// 1. push - append an element in an array
// example
let days = ["Sunday", "Monday"]
console.log("Push Example")
console.log(days)
days.push("Friday")
console.log(days)
days.push("Wednesday")
console.log(days)

// 2. pop - removes last index element from an array
let capital = ["Kathmandu", "New Delhi", "Beijing", "Dhaka"]
console.log("Pop example")
console.log(capital)
capital.pop()
console.log(capital)
capital.pop()
console.log(capital)

// 3. shift() - removes element of first index
let movies = ["Animal", "The Marvels", "Dimag Kharab", "Batman"]
console.log("Shift Example")
console.log(movies)
movies.shift()
console.log(movies)
movies.shift()
console.log(movies)

// 4. unshift() - add an element at the beginning of the array
let kings = ["Mahendra", "Birendra", "Gyanendra"]
console.log("Unshift Example")
kings.unshift("Prithvi")
console.log(kings)
kings.unshift("Gehendra")
console.log(kings)

