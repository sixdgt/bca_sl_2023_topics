// defining objects in javascript
const item = {
    "item_code": "002",
    "item_title": "Wireless Mouse",
    "item_price": 1200,
    "item_quantity": 5,
    "item_category": "Computer Accessories"
}

const bike = {
    model: "Yamaha R7",
    category: "Sports",
    brand: "Yamaha",
    price: 40000.00,
    year: 2023,
    color: "Blue"
}

console.log(bike)
console.log(item)

// accessing properties of object
// method one
console.log("Bike Model: " + bike.model)
console.log("Brand: " + bike.brand)
console.log(bike.price)
console.log("Item Category: " + item.item_category)

// method two
console.log("Item Category: " + item["item_category"])
console.log("Item Price: " + item["item_price"])
console.log(item["item_quantity"])
console.log("Bike Brand: " + bike["brand"])

// defining function inside object
// using this keyword - indicates the properties belong to 
// that particular object
const movie = {
    movieName: "12th Fail",
    movieGenre: "Drama",
    productionHouse: "H2 Productions",
    origin: "India",
    budget: "20 Cr",
    releasedYear: 2023,
    platform: "OTT",
    movideDetails: function(){
        return "Name: " + this.movieName + " Genre: " + this.movieGenre
    }
}
// accessing function inside object
console.log("Movie Origin: " + movie.origin)
console.log("Movide Details: " + movie.movideDetails())

// exercise
// Lets asume a system: Social Post
// define possible objects with their properties of the system
const author = {
    authorName: "Sushil Rayamajhi",
    authorRegNo: "AUTH-002",
    authorEmail: "sushil@gmail.com",
    authorPasskey: "sushil234_123"
}
const category = {
    catId: 1,
    catName: "General Post"
}
const post = {
    postId: 12,
    postCategory: "General Post",
    postDesc: "This is my general post.",
    postDate: "2024-01-02",
    postStatus: true
}
const postFile = {
    postFileId: 1,
    postFileName: "img123.jpg",
    postFileConfig: "JPEG",
    postFileStatus: true
}

// date objects
// year - must be in proper format
const d1 =  new Date("2024")
console.log(d1)

// year and month -> YYYY and MM
const d2 = new Date("2023", "01")
console.log(d2)

// year, month and day -> YYYY, MM and DD
const d3 = new Date("2024", "01", "24")
console.log(d3)

// if we define date object in the following way then we get
// undefined date format
const d4 = new Date("2023-02-12")
const d5 = new Date("2023/02/12")
const d6 = new Date("12/10/2023")
const d7 = new Date("12-10-2023")

console.log(d4)
console.log(d5)
console.log(d6)
console.log(d7)

// we can also pass hours, min and sec
const d8 = new Date("2023", "12", "24", "12", "25", "58")
console.log(d8)

// we can also create js object using new keyword
// example
// defining Place
function Place(pName, pType, code){
    // here "this" keyword is use to indicate properties of Place
    this.placeName = pName // assigning value of "pName" to property "placeName"
    this.placeType = pType
    this.zipCode = code
}
// creating Place object
const place = new Place("Kathmandu", "Capital", 44600) // passing values
console.log(place)
console.log("Name: " + place.placeName)
console.log("Type: " + place.placeType)
console.log("Zip Code: " + place.zipCode)
