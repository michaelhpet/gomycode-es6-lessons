// functions are like machines that optionally takes some input (or data) called parameters, and optionally produce (or return) a value after some operations

// Some types of functions in JavaScript
// 1. Named functions => functions that have names
// 2. Anonymous functions => functions that have no names

// how to declare/define named functions in javascript

// 1. Function declaration/definition with the function keyword

// Example: create a function that determines if a number is even or odd. This function will have one parameter which should be a number and returns true if the number is even, and false otherwise

// a parameter is a variable that exists in a function, it represents an input to that function

// function isEven(number) {
//   // log the number to the console
//   // console.log("number is:", number)

//   // get remainder after number is divided by 2
//   const remainder = number % 2

//   // check if remainder is 0. If so, return true
//   if (remainder === 0) {
//     return true
//   }

//   // check if remainder is 1. If so, return false
//   if (remainder === 1) {
//     return false
//   }
// }

// using a function
// To use, call, or invoke a function, type the name of the function and put its input(s) in parenthesis following the name (if it requires any input). If no input or argument is required/necessary, leave the parenthesis empty
// const numberIsEven = isEven(9)
// console.log(numberIsEven)

// Named functions can also be created by assigning a function definition without a name to a variable
// function (number) {
//   const remainder = number % 2
// }

// const isEven = function (number) {
//   const remainder = number % 2

//   if (remainder === 0) {
//     return true
//   }

//   if (remainder === 1) {
//     return false
//   }
// }

// console.log(isEven(38))

// 2. Function declaration/definition with arrow function
// const isEven = (number) => {
//   const remainder = number % 2

//   if (remainder === 0) {
//     return true
//   }

//   if (remainder === 1) {
//     return false
//   }
// }

// function isEven(number) {
// const remainder = number % 2

// if (remainder === 0) {
//   return true
// }

// if (remainder === 1) {
//   return false
// }
// }

//   function isEven(number) {
//   return number % 2 === 0
// }

// console.log(isEven(100)) // true
// console.log(isEven(101)) // false
// console.log(isEven(7)) // false

// A spin-off example of something we call callback function
// function makeMeGreet(greetingText, functionToRun) {
//   functionToRun(greetingText)
// }

// function runMyFunction(myFunction) {
//   myFunction()
// }

// function greet() {
//   console.log("hello world")
// }

// runMyFunction(greet)

// runMyFunction(function () {
//   console.log("hello world")
// })

// runMyFunction(() => {
//   console.log("hello world")
// })

// More on arrow function

// Example: a function that adds two numbers and returns the result (use arrow function)

// function addNumbers(a, b) {
//   return a + b
// }

// const addNumbers = (a, b) => {
//   return a + b
// }

// console.log(addNumbers(10, 540))

// const addNumbers = (a, b) => a + b

// parameters/arguments to function

// Example: write a function that prints all the properties of an object. This function will have one parameter which should be the object.
function printObject(objectToPrint) {
  // loop over all the keys in the object
  for (const key in objectToPrint) {
    // log the key
    // console.log(key)
    // log the value for that key
    // console.log(objectToPrint[key])
  }
}

const movie = {
  id: 12,
  title: "The way of kings",
  duration: 80,
  releaseDate: "Jan 30, 2011",
  rating: 0.89,
}

// printObject(movie)
