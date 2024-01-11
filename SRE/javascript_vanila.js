// Practice for vainall js
/*
// Functions

let arrow_function = ((e) => console.log(e))
arrow_function("arrow_function")

let arrow_function_return = ((e) => {
    e = e + "return"
    return e
})
console.log(arrow_function_return("arrow_function_"))

let this_function = function (element) {
    return "this_function"
}
console.log(this_function())

// loops

let for_loop_array = ["for ","loop ","array"]
let for_loop_array_function = ((e) => {
    let word = ""
    for (i in e) {
        
        word = word + e[i] 
        
    }
    
    
})
console.log(for_loop_array_function(for_loop_array))

let for_each_array = ["for ","each ","array"]
let the_word = ""
let for_each_array_function = for_each_array.forEach((e) => console.log(e))



// Global methods
// String() makes anything into a string

let data_types = [1.3,5,true,"string"]
data_types.forEach((e) => {
    let word = String(e)
    console.log(word)
})
*/

// objects

let person = {
    "name" : "John",
    "age" : 45,
    "human" : true
}

console.log("name is : ",person["name"])
console.log("age is : ",person.age)

for(element in person) {
    console.log("KEY",element,"VALUE",person[element])

}
