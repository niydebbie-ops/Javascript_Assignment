
// Day 3 Exercises: Part 1

// 1.Tonnage Validation

// Task:

// Declare a variable procurementTonnage (in kg).

// Use the >= operator to check if it meets the minimum 1000 kg requirement.

// Log the boolean result.

let procurementTonnage = 1200; // you can change this value
let meetsRequirement = procurementTonnage >= 1000;
console.log(meetsRequirement); // true or false



// 2. Strictness Check
//Task:

//Compare cost as a string vs number.

// let costStr = "5000";
// let costNum = 5000;
// //Test with == and ===

let costStr = "5000";
let costNum = 5000;

// Using loose equality (==)
console.log(costStr == costNum); // true

// Using strict equality (===)
console.log(costStr === costNum); // false


// why is === safer for KGL?

//.=== checks both value and type, avoiding unexpected results.

//.== does type coercion, which can lead to bugs.




// Day 3 Exercises: Part 2

// 3. Complex Validation

// Write an expression to validate a record using the && operator.

// dealerName length must be ≥ 2

// costUgx must be ≥ 10000 (5 digits)

let dealerName = "KGL";
let costUgx = 15000;

let isValidRecord = dealerName.length >= 2 && costUgx >= 10000;

console.log(isValidRecord); // true or false



// 4.Date Logging

// Create a new Date() object.

// Use getters (.getDate, .getMonth,etc.) to 

// Print a human-readable sales receipt timestamp.


let saleDate = new Date();

let day = saleDate.getDate();
let month = saleDate.getMonth() + 1; // months start from 0
let year = saleDate.getFullYear();

console.log(`Sale on: ${day}/${month}/${year}`);

























