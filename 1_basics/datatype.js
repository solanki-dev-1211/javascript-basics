"use strict";//treate all Js code as a newer version 
// alert(10+6) we are using node js so we are not using alert becuse it is used in browser
console.log(10+11)

console.log("dev")


// primitive data types in js
// string
let name = "dev"
console.log(name)

// number
let age = 21
console.log(age)

// boolean
let isMarried = false
console.log(isMarried)

// undefined
let city
console.log(city)

// null
let country = null
console.log(country)

// symbol
let id = Symbol("id")
console.log(id)

// bigInt
let bigNumber = 1234567890123456789012345678901234567890n
console.log(bigNumber)

// nonprimitive data types in js
// object
let person = {
    name: "dev",
    age: 21,
    isMarried: false
}
console.log(person)

// array
let numbers = [1, 2, 3, 4, 5]
console.log(numbers)

// function
function greet() {
    console.log("Hello")
}