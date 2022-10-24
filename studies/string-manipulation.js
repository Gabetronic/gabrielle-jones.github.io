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

// 2. concat() //
// Has the same effect as the concatenation and assignment operator combo.
result = string.concat(string2); 
console.log(result) //prints => This is an example

// 3. methods that grab a portion of a string //
// .substring()'s parameters reference a starting & ending index; the method grabs all the characters between those indices
let substringExample = result.substring(0, 4); 
console.log(substringExample) //prints => This

// slice() has the same logic as .substring, but it can also take in negative indices.
let sliceExample = result.slice(-3); 
console.log(sliceExample) //prints => ple

// 5. split() and join() //
// .Split() splits a string into a set of substrings and deposits them into an array; .join() does the opposite. Depending on the
// the argument, thes two methods can split a string with characters or spaces.

// 6. replace() //


// 7. toUpperCase() and toLowerCase() //
// Both of these methods change the case of any alphabetical characters within the string

// 8. trim() //
// Trim will take out all whitespace that exists before and after the string's text





