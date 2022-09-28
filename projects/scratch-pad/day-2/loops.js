// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //Use a for loop to iterate over the array parameter
  for(var i = 0; i < array.length; i++){
    //use the console.log() function to print each iteration to the console
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
   //Use a for loop to iterate backwards over the array parameter
   for(var i = array.length - 1; i >= 0; i--){
    //use the console.log() function to print each iteration to the console
    console.log(array[i]);
   }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //Initialize an empty array variable
  let array = [];
  //Iterate through the object parameter with a for-in loop
  for(var key in object){
    //Use the .push() method to place the object's keys into the array variable
    array.push(key);
  }
  
  //return the array
  return array;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //Iterate through the object parameter with a for-in loop
  for(var key in object){
    //Use console.log() to print the keys
    console.log(key);
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
    //Initialize an empty array variable
    let array = [];
    //Iterate through the object parameter with a for-in loop
    for(var key in object){
      //Use the .push() method to place the object's values into the array variable
      array.push(object[key]);
    }
  //return the array
  return array;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
   //Iterate through the object parameter with a for-in loop
   for(var key in object){
    //Use console.log() to print the values
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
    //Initialize an empty array variable
    let array = [];
    //Iterate through the object parameter with a for-in loop
    for(var key in object){
      //Use the .push() method to place the object's keys into the array variable
      array.push(key);
    }
    
    //return the array
    return array.length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  //Initialize an empty array variable
  let array = [];
  //Iterate through the object parameter with a for-in loop
  for(var key in object){
    //Use the .push() method to place the object's values into the array variable
    array.push(object[key]);
  }
  //use a for loop to iterate backwards over the array
  for(var i = array.length -1; i >= 0; i--){
    //print the array's elements to the console using the console.log() method
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
