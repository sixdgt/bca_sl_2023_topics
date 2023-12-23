// Properties
// 1. length
let actor_name = "Bipin Karki"
let director_name = "Pradeep Bhattrai"

console.log("length example")
console.log(actor_name.length)
console.log(director_name.length)
console.log("")

// Methods
// 1. toUpperCase() - returns all string character in UpperCase
let movie_name = "Jatra Jatra"
console.log("toUpperCase example")
console.log(movie_name.toUpperCase())
console.log(actor_name.toUpperCase())
console.log(director_name.toUpperCase())
console.log("")

// 2. toLowerCase() - returns all string character to lower Case
let genre = "Comedy"
console.log("toLowerCase Example")
console.log(movie_name.toLowerCase())
console.log(actor_name.toLowerCase())
console.log(director_name.toLowerCase())
console.log(genre.toLowerCase())
console.log("")

// 3. trim() - removes the space before and after string
let origin = "    Nepal     "
let budget = "       Rs. 10000000     "
console.log("trim example")
console.log(origin.trim())
console.log(budget.trim())
console.log("")

// 4. replace() - replace old string with new string
// note: original string remains unchanged because of their immutative behavior
// so new reference is created while using this function
let casting_director = "Mohan Lal Pandey"
let dop = "Purshopttam Pradhan"

console.log("replace example")
let result = casting_director.replace("Lal", "Prasad")
console.log("Actual String:" + casting_director)
console.log("Result:" + result)
console.log("")

let result_two = dop.replace("Purshopttam", "Praneshraj")
console.log("Actual String: " + dop)
console.log("Result String: " + result_two)
console.log("")

// 5. substring() - returns the piece of string from primary string
let description = "This movie tells the story about three characters who are poor."
console.log("substring example")
let result_ss = description.substring(5, 10) // returns string from index 5 upto 9
let result_ss_i = description.substring(8) // returns string from 8 upto end
console.log("Actual String:" + description)
console.log(result_ss)
console.log(result_ss_i)
console.log("")

// 6. substr() - same as substring(). this function is already deprecated
let actress_name = "Barsha Raut"
console.log("substr example")
let result_ss_ii = actress_name.substr(4, 7) 
console.log("Actual String: " + actor_name)
console.log(result_ss_ii)
console.log("")

// 7. replaceAll() - replaces all string
let production_house = "Black Horse Production"
console.log("replaceAll example")
console.log(production_house)
let new_production_house = production_house.replaceAll(production_house, "BlueStone Pictures")
console.log(new_production_house)
console.log("")

// 8. concat() - combines one or more string
let production_banner = "Silver Screen"
let cinematography = "Vision Entertainment"
console.log("concat example")

let movie_desc = production_banner.concat(cinematography)
console.log(movie_desc)
console.log("")
// note: we can also contact multiple string
let desc = production_banner.concat(" ", cinematography, " ", production_house)
console.log(desc)
console.log("")

// 9. slice() - return the piece of string - more like substring
let vfx = "Bikesh Entertainment"
console.log("slice example")

let vfx_result = vfx.slice(4, 9)
console.log(vfx_result)
console.log("")

// 10. trimStart() - trim string from start
// 11. trimEnd() - trim string from end
console.log("trimStart example")
let email = "     blackhorse@gmail.com"
console.log("Actual:" + email)
console.log("Result:" + email.trimStart())
console.log("")
console.log("trimEnd example")
let address = "Baneshwor    "
console.log("Actual: " + address)
console.log("Result: " + address.trimEnd())
console.log("")