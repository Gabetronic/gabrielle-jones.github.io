// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    //Initialize a variable to 1
    let num = 1;
    //use a while loop to iterate over a range of numbers (1 - 100)
    while(num <= 100){
        //use a conditional chain to print each number to the console, with the following exceptions,
        //print "FizzBuzz" for every number that's a multiple of 3 & 5
        if(num % 3 == 0 && num % 5 == 0){
            console.log("FizzBuzz");
        //print "Fizz" for every number that's a multiple of 3
        }else if(num % 3 == 0){
            console.log("Fizz");
        //print "Buzz" for every number that's a multiple of 5
        }else if(num % 5 == 0){
            console.log("Buzz");
        //print every number besides the conditions listed above, as it's appropriate number value
        }else{
            console.log(num);
        }
        num++;
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}