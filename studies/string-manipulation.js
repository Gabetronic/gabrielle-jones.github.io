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
// .Concat() has the same effect as the concatenation and assignment operator combo.

// 3. .Substr() and .substring() //
// Both use their arguments to grab a portion of a string: .substr()'s arguments reference a starting position 
// and the specified number of characters to return; .substring()'s arguments reference indices, and return the characters between them.

// 4. .Slice() //       
// .Slice does the same thing as .substring(), but it can take in negative indices.

// 5. .Split() and .join() //
// .Split() splits a string into a set of substrings and deposits them into an array; .join() does the opposite. Depending on the
// the argument, thes two methods can split a string with characters or spaces.

// 6. .Replace() //


// 7. .toUpperCase() and .toLowerCase() //

// 8. .Trim() //





