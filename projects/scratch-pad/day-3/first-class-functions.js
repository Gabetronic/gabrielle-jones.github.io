// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //return an anonymous function with 1 parameter
    return function(value){
        //use the greater than comparison operator in an expression that contains the 2 parameters to return a Boolean value
        return value > base;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
     //return an anonymous function with 1 parameter
     return function(value){
        //use the less than comparison operator in an expression that contains the 2 parameters to return a Boolean value
        return value < base;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    //return a function that uses the strictly equal operator to test if its parameter starts with the startsWith parameter
      //equalize the cases so as to not produce a erroneous result
    return function(string){
        if(startsWith.toLowerCase() === string[0].toLowerCase()){
            return true;
        }else{
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    //return a first class function that takes in a string parameter,
    return function(string){
        //if the outer function's parameter matches the inner function's parameter,
            //will be case sensitive, use .toLowerCase() method
            //will need to access last character of the string parameter, use .length property - 1 & bracket notation
        if(endsWith.toLowerCase() === string[string.length - 1].toLowerCase()){
            //return true, 
            return true;
            //else, return false
        }else{
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //

    //Initialize an empty array variable
    var result = [];
    //Iterate over the strings parameter with a for loop
    for(var i = 0; i < strings.length; i++){
        //Use each iteration as a parameter for the modify callback function, & push it into the result array variable
        result.push(modify(strings[i]));
    }
    //return the modified strings/result array
    return result;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //

    //Iterate over the strings parameter with a for loop
    for(var i = 0; i < strings.length; i++){
        //Use each iteration as a parameter for the test callback function, 
        //use a conditional to determine if any strings fail the test - this only tests each individual string
        if(test(strings[i]) === false){
            //if any strings fail, return false
            return false;
        }
    }
//if the conditional doesn't return false, return true
return true;
     
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
