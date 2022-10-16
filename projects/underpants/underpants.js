// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

//const { arrayOrObject } = require("../function-master/function-master");

var _ = {}; // Project begins here. Assigned a var called _ & set to an empty obj. 
                //Each func below will be added to this obj (console.log(_); //=> { _.identity: function(){} })


/**
* START OF OUR FUNCTIONAL LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){ 
    //return the parameter
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    //returns the type of <value> as a string

    //Use a conditional to determine if the parameter is a string
    if(typeof value === "string"){
        //return a string named string
        return "string";
    //else if parameter is an array
    }else if(Array.isArray(value) === true){
        return "array";
    //else if parameter is an object
    }else if(Object.prototype.toString.call(value) === "[object Object]"){
        return "object";
    //else if parameter is undefined
    }else if(typeof value === "undefined"){
        return "undefined";
    //else if value is a number
    }else if(typeof value === "number"){
        return "number";
    //else if value is a boolean
    }else if(typeof value === "boolean"){
        return "boolean";
    //else if value is null
    }else if(Object.prototype.toString.call(value) === "[object Null]"){
        return "null";
    //else if value is a function
    }else{
        return "function";
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
    //if, the array parameter is not an array, & if the number parameter is less than zero - Use a conditional, array.isArray method & a logical operator
    if(Array.isArray(array) === false || number < 0){
        //return []
        return [];
   //else if, the number !== a number value OR(--use logical operator) the num parameter === NaN -- use the Number.isNaN method,
    }else if(typeof number !== "number" || Number.isNaN(number) === true){
        //return the 1st indexed element of the array
        return array[0];
    //else of tje number parameter is > array's length,
    }else if(!number > array.length){
        //return the whole array
        return array;
    }else{
        //return the 1st <number> of indexed array elements -- use .slice method
        return array.slice(0, number);
    }
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){

    //if, the array parameter is not an array, & if the number parameter is less than zero - Use a conditional, array.isArray method & a logical operator
    if(Array.isArray(array) === false || number < 0){
        //return []
        return [];
    //else if, the number parameter isn't a number -- use typeof & comparison operators -- OR(--use logical operator) the parameter is a data value of NaN -- use the Number.isNaN method,
    }else if(typeof number !== "number" || Number.isNaN(number) === true){
        //return the 1st indexed element of the array
        return array[array.length - 1];
    //else of tje number parameter is > array's length,
    }else if(number > array.length){
        //return the whole array
        return array;
    }else{
        //return the last <number> of indexed array elements - use .slice with a negative sign in front of the number parameter
       return array.slice(-number);
    }
};



/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    //initialize an empty array variable
    let newArr = [];
    //iterate through array parameter
    for(let i = 0; i < array.length; i++){
        //if any array elements match the value parameter, 
        if(array[i] === value){
        //push every occurrence of array[i] by its indexed value - use .push method - into the empty array variable
        newArr.push(i);
        //return the index of the array's element 
        return i;
        }
    }
//else, return -1
return -1;
}



/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){

    //If array contains value, return true; if not, return false --- use ternary operator => (return conditon ? expression if true : expression if false) & .includes method
    return array.includes(value) ? true : false;  
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func){

    //Use conditonal & array.isArray to determine if collection param is an array
    if(Array.isArray(collection) === true){
        //For each array element -- iterate through the collection array
        for(let i = 0; i < collection.length; i++){
            //call func(element, index, collection) param
            func(collection[i], i, collection);  //often callback func in a func aren't using all of these parameters
        }
    //if not an array, must be an object
    }else{
        //iterate through the collection object
        for(let key in collection){
            //for each item in the collection, call func(prop's value, it's key, collection)
            func(collection[key], key, collection);
        }
    }
};



                                        
/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array) {
    //Create an empty array variable
    let outputArr = [];
    //Iterate through array parameter
    for (let i = 0; i < array.length; i++) {
      //If an iteration tested with .indexOf returns -1 (i.e. has no occurrences),
      if(outputArr.indexOf(array[i]) === -1){
        //push that iteration into the new array
        outputArr.push(array[i]);
      }
    }
//return output array variable 
return outputArr;
}

           

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
*               Extra Credit:
*                   use _.each in your implementation
*/

_.filter = function(array, func) {
    //Create an empty array variable
    let newArray = [];
    //For each - iterate thru array
    for(let i = 0; i < array.length; i++){
      //if func call tested on each iteration = true,
      if(func(array[i], i, array) === true){
        //push that iteration into the empty array variable
        newArray.push(array[i]);
      }
    }
//return output array
return newArray;
}

                     

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
    //Create an empty array variable
    let output = [];
    //For each - iterate through array
    for(let i = 0; i < array.length; i++){
      //call the func on each iteration w/ 3 arguments
        // if result of func call === false,
      if(func(array[i], i, array) === false){
        //push that iteration into the empty array variable
        output.push(array[i]);
      }
    }
//return a new array w/ each element that fails the test
return output;
}



/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
//Create 3 empty array variables - 2 for the sub-arrays, 1 for the parent array
let output = [];
let arr = [];
let arr2 = [];
//Declare a variable for holding the function call
let callResult;
    //Iterate through array
    for(let i = 0; i < array.length; i++){
        //Call func w/ given args & assign to the declared variable
       callResult = func(array[i], i, array);
        //Use a conditional to determine if the result of the function call is a truthy or falsey value:
         //for each iteration that's true, push it the 1st sub-array
        if(callResult === true){ 
            arr.push(array[i]);
        //for falsy iterations, push to the other sub-array
        }else if(callResult === false){
            arr2.push(array[i]);
        }
    }
//Push both sub-arrays to the parent array & return the parent array    
output.push(arr, arr2);
return output;
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
//Create an empty array variables to hold function call results
let output= [];
      //Use conditonal & array.isArray to determine if collection param is an array,
    if(Array.isArray(collection) === true){
        //For each array element -- iterate through the collection array
        for(let i = 0; i < collection.length; i++){
            //push function call to the empty array variable
            output.push(func(collection[i], i, collection));
        }
    //if not an array, must be an object
    }else{
        //iterate through the collection object
        for(let key in collection){
            //push function call to the empty array variable
            output.push(func(collection[key], key, collection));
        }
    }
return output;
}



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arrayOfObjs, prop){
//Declare an output variable hold values to be returned
let result;
    //Assign output variable to the map function -- params should be the collection, and a func that returns each obj's value aka "prop"
    result = _.map(arrayOfObjs, function(object){ //this is func declaration --- use params, not args
            return object[prop];
    });
//return output variable    
return result;
}




/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
    //determine if func isn't provided
    //"think of func as a function-scoped variable - so if it doesn't have a value, it will show undefined"
    if(func === undefined){
      //determine if collection is an arr
      if(Array.isArray(collection) === true){
        //For each array element -- iterate through the collection array
        for(let i = 0; i < collection.length; i++){
          //Determine if each element is a falsy value
          if(collection[i] === false){
            //return false
            return false;
          }
        }
        //Else, it must be an object
      }else{
        //iterate through the collection object
        for(let key in collection){
          //For each iteration, determine if it's a falsy value
          if(collection[i] === false){
            //return false
            return false;
          }
        }
      }
      //else, the func exists w/ params, so continue forward
    }else{
      //determine if collection is an arr
      if(Array.isArray(collection) === true){
        //For each array element -- iterate through the collection array
        for(let i = 0; i < collection.length; i++){
          //Determine if each element is a falsy value
          if(func(collection[i], i, collection) === false){
            //return false
            return false;
          }
        }
    //Else, it must be an object
      }else{
        //iterate through the collection object
        for(let key in collection){
          //For each iteration, determine if it's a falsy value
          if(func(collection[key], key, collection) === false){
            //return false
            return false;
          }
        }
      }
    }
//If all else fails, it must be true
  return true;
}



//** 2 left! -  see ES6 Lecture Recording (date= 10.12.22) for demo of .reduce ** //


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func){

}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

/*
_.reduce = function(array, func, seed){

}
 */



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

/*
_.extend(object, object2){

}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
