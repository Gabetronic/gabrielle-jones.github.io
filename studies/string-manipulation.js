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
// The concatenation and assignment operators combined allow you to combine strings
let string = "example";
let string2 = "This is an ";
let result = string2 + string; //prints => This is an example
result += "!";
console.log(result); //prints => This is an example!

// 2. concat() //
// Has the same effect as the concatenation and assignment operator combo
result = string.concat(string2); 
console.log(result) //prints => This is an example

// 3. substring() //
// Its parameters reference a starting & ending index; the method grabs all the characters between those indices
let substringExample = result.substring(0, 4); 
console.log(substringExample) //prints => This

// 4. slice() //
// Has the same logic as .substring, but it can also take in negative indices as parameters
let sliceExample = result.slice(-3); 
console.log(sliceExample) //prints => ple

// 5. split() //
// Divides a string into a set of substrings and deposits them into an array; depending on the
// the parameter provided, it can split a string at characters or spaces
let text = "AC / DC"
let splitsAtWhiteSpaces = text.split(" ");
let splitsByChar = text.split("");
let wholeString = text.split();
console.log(splitsAtWhiteSpaces); //prints => ["AC", "/", "DC"]
console.log(splitsByChar); //prints => ["A", "C", "/", "D", "C"]
console.log(wholeString); //prints => ["AC / DC"]

// 6. join() //
// Does the opposite of .split: it combines substrings into a single string; it can also manipulate 
//the substrings through the provided parameter.
let reunited = splitsByChar.join(""); 
let symbolsAsParameters = splitsAtWhiteSpaces.join("?");
let symbolsReplacingSpace = splitsByChar.join("??");
console.log(reunited); //prints => AC / DC
console.log(symbolsAsParameters); //prints => AC?/?DC
console.log(symbolsReplacingSpace); //prints => A??C?? ??/?? ??D??C

// 7. replace() //
// Non-destructively replaces a part or parts of a string, with a replacement string parameter
let sentence = "Hola senor!";
let replace = sentence.replace("senor!", "senora.");
console.log(replace); //prints => Hola senora.
console.log(sentence); //prints => Hola senor!

// 8. toUpperCase() and toLowerCase() //
// Both of these methods change the case of any alphabetical characters within the string
let title = "hope";
let updatedCampaignStrategy = title.toUpperCase(); 
let revised = updatedCampaignStrategy.toLowerCase();
console.log(updatedCampaignStrategy, revised); //prints => HOPE hope

// 9. trim() //
// Removes out all whitespace that exists before and after the string's text
let original = "      what?!      ";
let noWhiteSpace = original.trim();
console.log(original); // prints=>       what?!  
console.log(noWhiteSpace) // prints=> what?!





