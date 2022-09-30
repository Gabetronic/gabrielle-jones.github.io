// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
    //Initialize an empty array variable
    let array = [];
    //If start is greater than end - use if statement
    if(start > end){
        //Iterate backwards over the range of numbers between the start parameter & end parameter - use a while loop
            //while start parameter is greater than or equal to end parameter, 
        while(start >= end){
            //push the number starting with the start parameter into the empty array
            array.push(start);
            //at each iteration, decrement - use decrement operator
            start--;
        }
    //Else,the end parameter is greater than start parameter.
    }else{ 
        //Use a while loop to iterate forwards from the start parameter to the end parameter - 
        while(start <= end){
            //push each number starting with the start parameter into the empty array
            array.push(start);
            //at each iteration, increment -- use increment operator
            start++;
        }
    }
    //return array variable
    return array;
    
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
