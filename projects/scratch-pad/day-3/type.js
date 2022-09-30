// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    //Use a conditional statement to see if the value parameter is an array
        //test the value with the Array.isArray() method & the strictly equal operator
        if(Array.isArray(value) === true){
            //if true, return true
            return true;
        }
    //else, return false
    return false;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //

    if(Object.prototype.toString.call(value) === "[object Object]"){ 
        return true;
    }
    //else, return false
    return false;
    //But not, if (typeof item === "object" && !Array.isArray(item) && item !== null   --> ?
    //This also works: if (value && typeof value === "object" && value.constructor === Object  --> why the value by itself?
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    if(Object.prototype.toString.call(value) === "[object Object]" || Object.prototype.toString.call(value) === "[object Array]"){ 
        return true;
    }
    //else, return false
    return false;
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string" *
 *    - "array" *
 *    - "object" *
 *    - "undefined"*
 *    - "number" *
 *    - "boolean" *
 *    - "null"  *
 *    - "function" *
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    //Use a conditional chain to return a string that represents the given value
        //use the typeof operator for primitive data types that erroneously present as objects in JS
    if(typeof value === "string"){
        return "string";
    }else if(typeof value === "number"){
        return "number";
    }else if(typeof value === "function"){
        return "function";
    }else if(typeof value === "boolean"){
        return "boolean";
    }else if(typeof value === "undefined"){
        return "undefined";
        //use Array.isArray method to determine if value is an array
    }else if(Array.isArray(value) === true){
        return "array";
        //use    to determine if value is a collection object, null, or Date
    }else if(Object.prototype.toString.call(value) === "[object Object]"){
        return "object";
    }else if(Object.prototype.toString.call(value) === "[object Null]"){
        return "null";
    }else if(Object.prototype.toString.call(value) === "[object Date]"){
        return "date";
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
