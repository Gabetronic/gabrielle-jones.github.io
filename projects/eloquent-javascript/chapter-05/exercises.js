// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//let arrays = [[1, 2, 3], [4, 5], [6]];
/* Use the reduce method in combination with the concat method to “flatten” an array
 of arrays into a single array that has all the elements of the original arrays.

*/
function flatten(arrays) {
  //use reduce on input to create 1 large, unnested array: seed should be an empty arr.
    //must use .concat...for pure reasons?
  let reduction = arrays.reduce((callback, current) =>
    callback.concat(current), seed = []);
    //return new array
  return reduction;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(startPos, test, update, body) {
/* Write a higher-order function loop that provides something like a for loop statement. 
It takes a value, a test function, an update function, and a body function. Each iteration, 
it first runs the test function on the current loop value and stops if that returns false. 
Then it calls the body function, giving it the current value. Finally, it calls the update function 
to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
*/

//iterate: 1: runs test on value[i] & stop if false; 
  //2: runs body on value[i]; 
    //3: runs update to create a new value; 
      //4: repeat loop

  
  for (let value = startPos; test(value); value = update(value)) {
    body(value);
    }
  }

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
Implement every as a function that takes an array and a predicate function as parameters. 

 Remember - > every rets true if every element = true
*/
function every(array, test) { //Since already know it's an arr, bypass testing if obj or if arr is undefined
  //loop forward,
  for(let i = 0; i < array.length; i++){
    //testing every element with the test function for falsity
    if(test(array[i], i, array) === false){
        return false;
    }
}
//if all ret true, ret boolean value of true
return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
//keep track of how many ltr vs rtl chars there are
  //Initialize empty array variables to store these chars by ltr & rtl
  let ltr = [];
  let rtl = [];
  //Iterate through string
  for(let i = 0; i < string.length; i++){
    //access every char code:
    let code = string.charCodeAt(i);
    //Initialize a variable to the result of the helper func invocation
    let script = characterScript(code);
    //Need to return the script, if no script will return null. So,
    if(script != null){
      if(script.direction === "ltr"){
        ltr.push(script);
      }
    }else{
      rtl.push(script);
// Is there a way you can simplify this conditional chain?
    }
  }
  if(ltr.length > rtl.length){
    return "ltr";
  }else{
    return "rtl";
  // Is there a way you can simplify this conditional chain?
    //return the result of testing this condition...
  }
}
/* helper func from helpers.js --

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
      return script;
    }
  }
  return null;
}
*/

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
