////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(x, y, def = 1) {  //add default param of 1 to determine the movement btw the range
//Initialize an empty array variable
let array = [];
//If default param > 0,
  if(def > 0){
    //Determine which param is greater,
    if(x > y){ 
      //Iterate in reverse,
      for(let i = x; i >= y; i += def){
        //push each iteration into the array
        array.push(i); 
      }
    }else if(x < y){ 
      //Else, iterate forwards, & push result to array
      for(var i = x; i <= y; i += def){
        array.push(i);
      }
    }
  }
//return array
return array;  
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr){
  //Create a variable assigned to 0
  let sum = 0;
  //Iterate through array param, 
  for(let i = 0; i < arr.length; i++){
    //add each array iteration(num) to the previous tally inside the sum variable
    sum += arr[i];
  }
  //return variable;
  return sum;
  }

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array){  
//Iterate in reverse and push the result into a new array variable -- aka use a pure f(x) to reverse:
let newA = [];
  for(let i = array.length - 1; i >= 0; i--){
    newA.push(array[i]);
  }
  return newA;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
//Iterate in reverse, destructively:

//iterate forward, 
for(let i = 0; i < array.length; i++){
  //splice the iteration & replace it with the last element of the array by using .pop()
  array.splice(i, 0, array.pop());
}


}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Array of items => "list" of nested objs
function arrayToList(array) {
  //create a rest value and initialize to null.
  let rest = null;
  //Then, iteration backwards, to
  for(var i = array.length -1; i >= 0; i--){
  //add an array to the list
    rest = {value: array[i], rest: rest};
  }
  //return the list
  return rest;
  }

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output = []) {
//don't know how nested this list is, so use recursion.  Outputs a complex data type, so use a def. param

//base --
if(list.rest === null){
  //push the next value to the arr
  output.push(list.value);
  //once done, return output array
  return output;
}
//recursion --
output.push(list.value);

/* first iteration:
list.value === null // false
output.push(list.value);
return listToArray(list.rest & output) -- b/c list.rest holds the next list.value
*/


//func call 
return listToArray(list.rest, output);
}
/*
list = {
  value: 1,
    rest: {
      value: 2,
      rest: null
    }
}
*/

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
//this f(x) should "insert value into list at first position": ret an obj w/ a value that points to the rest of the list
  return {value, rest: list}; 
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {

  //base -- stop if list doesn't exist,
  if(!list){ 
    //return undefined
    return undefined; 
  // or else if, num = first value
  }else if(num === 0){
    return list.value;
   
//recursion - iterate until nth value is found
  }else{
    return nth(list.rest, num - 1);
  } 
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
//If invoking the args, this f(x) will be able to determine if the data deeply/strictly equals each other aka does the work of the strictly equals operator:

//determine if both x & y aren't objs
if(typeof x !== "object" && typeof y !== "object"){ //if they aren't objects, they must be simple data types: how do you determine if data IS NOT an opj ...!typeof doesn't work
  return x === y;
}
//determine if either x or y isn't an obj
if(typeof x !== "object" || typeof y !== "object"){
  return false; 
}

//Now, determine if values inside the objs are ===; create arrs of each obj's keys
let xKeys = Object.keys(x);
let yKeys = Object.keys(y);

//determine if the length of the obj.keys arrs are equal
if(xKeys.length !== yKeys.length){
  return false;
}
  //determine if each key matches each other - iterate through the keys arrs
  for(let i = 0; i < xKeys.length; i++){
    if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[yKeys[i]])){ ////invoke the func itself on the value of the prop to see if each key pairs with the right value
      return false;
    }
  }
  return true;
}
/*  
console.log(deepEqual[2, 3]); // => true
console.log(deepEqual({a: 1, b: 2},{a: 1, b: 2})); // => true
// invoke deepEqual
  //x = {a: 1, b: 2}, y = {a: 1, b: 2}
    //diff lengths? =>
      //for loop: does yKeys includes {"a"} // => false; !deepEqual x[xKeys[i]] i.e. does the key in xKeys pair with the value in x?// 
                                                                    // = object[key] aka the object's value
*/
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
