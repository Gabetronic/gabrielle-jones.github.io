/**
 * STRING MANIPULATION:
 * 
 * 0. Strings store and change text -- they are an important part of computer programming. As such,
 * there are various tools available to manipulate the value of a string.
 * 
 * 1. There are a few operators that can help you re-assign strings: the assignment,
 * concatenation, and a combination of the assignment and concatenation operators.  
 * 
 * 2.  There are several functions, or methods used on strings; some take in arguments and 
 * others don't. 
 */

// 1. operators //
// The concatenation and assignment operators combined allow you to combine strings.
let string = "example";
let string2 = "This is an ";
let result = string2 + string; //=> This is an example
result += "!";
console.log(result); //=> This is an example!

// 2. methods that transform characters in strings //
// Concat has the same effect as the concat and assignment operator combo.

// Substr and substring both use their arguments to grab a portion of a string: substr's arguments reference a starting position and 
// the specified number of characters to return; substring's arguments reference indices, and return the characters between them.

// Slice

/*
Transformation:
.concat()
.substr(a, b)
.substring(a, b) - b  
.slice()


Transformation of Characters:
.toUpperCase() & .toLowerCase()
.trim()
.replace(c, v)

Search:
.includes(c)
.search()
.charAt(index#)
.indexOf() & .lastIndexOf()
.startsWith() & .endsWith()

Array/String Transformation:
.split(" ")
.join("")

*/


