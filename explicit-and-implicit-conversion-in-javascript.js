/*Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


/* let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

 */


// FIX 1: No real bug here, but explain behavior
// "5" - 2 triggers implicit type conversion (string → number)
let result = "5" - 2;
console.log("The result is: " + result); // Output: 3

// Explanation: "-" forces numeric conversion automatically in JS

// FIX 2: Boolean("false") is TRUE (important bug!)
let isValid = Boolean("false");

// "false" is a non-empty string → always truthy → becomes true
if (isValid) {
    console.log("This is valid!");
}

// FIX 3: String + number causes string concatenation bug
let age = "25";

// FIX: convert age to number before adding
let totalAge = Number(age) + 5;

console.log("Total Age: " + totalAge);
// Output: 30
// Explanation: Number("25") converts string → number before addition

//Task 2: Examples of Type Conversion

// Example 1: Implicit type conversion
console.log("10" * 2); // Output: 20


console.log("10" + 2); // Output: "102" (string concatenation)

// Edge case:
console.log("hello" * 2); // Output: NaN


// Example 2:Explicit Type Conversion
let value1 = "42";
console.log(Number(value1)); // 42 (number)


console.log(typeof Number(value1)); // "number"


// Edge case
console.log(Number(undefined)); // NaN

console.log(Number(null)); // 0
