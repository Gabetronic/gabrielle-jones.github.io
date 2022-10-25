/**
 * OPERATORS:
 * 
 * 0. An operator performs some action(operation) on a single, or on multiple data values(operands).  Operations produce a result. 
 * There are several groups of operators: arithmetic, assignment, comparison, logical, unary, & ternary.
 * 1. Assignment operators assign values to their left operand, based on the value of the right operand. These operators make 
 * code more coherent.
 * 2. Arithmetic operators are used to perform mathematical operations on numerical operands.
 * 3. Comparison operators compare the left and right operands and return a Boolean value based on whether the comparision is 
 * true or false.
 * 4. Logical operators also evaluate each operand and coerce them to a Boolean value; however, they are limited in scope to 
 * 3 types of logical evaluations: && (aka AND), || (aka OR), and ! (aka NOT).
 * 5. Unary operators only have one operand to evaluate. There are many unary operators, but this project covers only three: 
 * typeof, ! (aka logical NOT), and - (aka unary negation).
 * 6. Ternary operators evaluate three operands & can be used as an alternative to an if-else if conditional statement.
 */

// 1. assignment operators //
// Changes the value of the right operand based on the left operand; these operators can be combined to perform two operations.
let character = {
    firstName: "Amy",
    lastName: "Dunne",
    age: 35,
};

let fullName = "Amy Elliot ";
console.log(fullName += character.lastName); //prints=> "Amy Elliot Dunne"

let divisionAssignment = 6;
divisionAssignment /= 2;
console.log(divisionAssignment); //prints=> 3

// 2. arithmetic operators //
// Performs arithmetic on operands
let math = 5 * 6;
console.log(math); //prints=> 30

// 3. comparison operators //
// Returns the result of comparing its two operands
let x = 34, y = null;
console.log(2 === "2", y === y, x == "34", 2 !=="2", x == 33); //prints false true true true false
console.log(character.age >= 40); //prints=> false

// 4. logical operators //
// Determines the logic between its two operands
console.log(typeof x && typeof math  === "number"); //prints=> true

// 5. unary operators: typeof //
/* Returns a string that describes the type of data value of the operand.  It is limited in its ability to distinguish between 
   the array, objects, null, & Date, and will always return "object" for these data types.
*/
console.log(typeof character); //prints=> object

// 6. unary operators: ! (NOT) //
// Evaluates an operand as true or false, then returns the opposite value; it is also classified as a logical operator
console.log(!false); //prints=> true

//7. unary operators: - (unary negation) //
// Negates the operand; it will attempt to convert all non-numbers to numbers
console.log("-45.5", -false, -true, -6); //prints=> -45.5 -0 -1 -6

// 8. ternary operator //
// This takes a condition as it's first operand, then two expressions to return based on whether the condition is true or false.
var names = character.lastName === "Done" ? true : false; 
console.log(names);   //prints=> true