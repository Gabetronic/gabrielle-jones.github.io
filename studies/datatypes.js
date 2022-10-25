/**
 * DATA TYPES:
 * 
 * 0. Data types are pieces of information that a computer program reads in order to execute tasks. Data types are held by, or 
 * stored in variables. Each type of data has different traits and roles. The following are a list of data types:
 * 1. Numbers
 * 2. Strings
 * 3. Boolean
 * 4. Arrays 
 * 5. Objects
 * 6. Functions
 * 7. Undefined
 * 8. Null
 * 9. NaN, aka Not-a-Number
 * 10. Infinity & -Infinity
 * 11. Data types are divided between two groups: primitive(aka simple), & complex. Primitive types include strings, boolean, 
 * numbers, null & undefined; functions, array & objects are complex types.
 * 12. Another difference between primitive and complex types is the way they are stored by a computer.  Primitive types can be 
 * stored in the same location(referred to as a stack) one by one: even when a programmer assigns the same value to a new 
 * variable, the stack has enough memory to simply add it 'on top' of the original variable. Complex values must be stored in 
 * their own spaces to allow for their potential for dynamic growth: their stack-stored variables can only reference these 
 * storage spaces. If a programmer wanted to assign this storage space to a new variable, the new variable would also, only be 
 * able to point to the actual storage space.  The terms copy by value and copy by reference describe what happens when a 
 * programmer creates variables that copy the data from variables lower on the stack. Because an original primitive type-holding 
 * variable is still accessible in memory, a copy can not change the original value; whereas, if you tried to copy a variable 
 * whose complex data is not readily accesible on the stack, any changes you make to the copy will inadvertently change the 
 * original as well.
 */

// 1. numbers //
// The number data type includes numbers with or without decimals
let number = 4;
console.log(number); //prints=> 4

// 2. strings //
// Strings, or strings of text, hold characters and are bound by single or double quotations
let string = "You win!";
console.log(string); //prints=> "You win!"

// 3. Boolean //
// Boolean values represent the result(either true, or false) of a logical evaluation of a statement -- usually a conditional
let boolean = 50 < 184; 
console.log(boolean); //prints=> true

// 4. arrays //
/* Arrays can hold multiple data types, each seperated by a comma.  They are often referred to as lists. are capped by brackets, 
   and their items are referenced by an index beginning at 0
*/
let array = ['a', 1, true, null];
console.log(array); //prints=> "a", 1, true, null

// 5. objects //
/* Objects also hold lots of data, each seperated by a comma.  They are bound by curly braces, and their items are not 
   listed, but paired into keys(usually a description or name) and values(the value being named)
*/
let object = {
    bookName: "1984",
    author: "George Orwell",
    yearPublised: 1949
}
console.log(object); /* prints=> 
{
    bookName: "1984",
    author: "George Orwell",
    yearPublised: 1949
}
*/

// 6. functions //
/* Functions are built with certain syntax rules in order to execute a set of instructions collated into a block of code: 
   once created, they can be invoked for use at any time within the life of their environment
*/
let printNasRhyme = function(string){
    string += " cause, sleep is the cousin of death";
}
console.log(printNasRhyme("I never sleep,")); // prints=> "I never sleep, cause, sleep is the cousin of death."

// 7. undefined //
// Undefined is the signifier of a variable with a missing value; it's used to represent variables that haven't been assigned
let mistake;
console.log(mistake); //prints=> undefined

// 8. null //
/* Null represents an empty value. Developers like to use null to indicate that a variable is intentionally invalid, awaiting 
   deletion, and/or unimportant
*/
let xS = null;
console.log(xS); //prints=> null

// 9. NaN //
// NaN, or not-a-number, represents any value whose return value can not be numerically defined.
let notNum = 0 * Infinity;
console.log(notNum); //prints=> NaN

// 10. Infinity & -Infinity //
/* Infinity & -Infinity, represent numeric values that increase without limit (positive Infinity) or decrease without limit 
   (negative Infinity); as such, the literal definition of such a value cannot be held, or contained by a variable
*/
let neverEndingStory = 1 / 0;
console.log(neverEndingStory); //prints=> Infinity

// 11. primitive vs. complex data types //
/* Complex types are dynamic -- they can store vast collections of information &/or instructions. Primitive types are 
   static -- only able to represent one thing at a time
*/
let complex = [{
    Greens: ["Alicent", "Aegon", "Otto"],
    Blacks: ["Rhaenyra", "Daemon", "Jace"],
}, 
{
    AlicentDragon: false,
    DaemonDragon: "Caraxes"
}, 
["King's Landing", "Dragonstone", 3, Infinity], [ 2, "The Stepstones", ["Fire & Blood", "Dunk & Egg"]]];

let simple = true;

// 12. Copy by Value vs. Copy by Reference //
/* Primitive types are copied by value -- a copy cannot change the original variable copied; complex types are copied by 
   reference - a copy will change the original variable
*/
let apple = 50;
let apples = apple;
apples = 10;
console.log(apple, apples); //prints=> 50 10

let arrayCopy = array;
arrayCopy = ["this is just a placeholder"];

console.log(array);  //prints=> ['a', 1, true, null]
console.log(arrayCopy); //prints=> ["this is just a placeholder"]