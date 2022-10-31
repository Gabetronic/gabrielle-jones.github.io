// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

var factorial = function(n){
  //base: if iteration reaches 0, stop at 1 (b/c factorial stops at 1, not 0)
  if(n === 0){
    return 1;
  }

  //recursion: As long as n is not hitting a negative num, 
  if(n >= 1){
    //iterate the func's param - 1, & multiply by the new param
    return n * factorial(n - 1);
    //if n dips below 0, return null
  }else if(n <= 0){
    return null;
  }
   
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

var sum = function(array, arr = 0 ) {

//base - when array's length is 0, return the default param.
if(array.length === 0){
  return arr;
}
//recursion - how to update arr? use operator w/ each iteration to add to arr
arr += array[0];
//after updating arr, return func w/ transformed array (use .slice to slice off array[0]) + default param updated
return sum(array.slice(1), arr);
};


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};


// 4. Check if a number is even.
//should return a boolean,
// should evaluate positive & neg #s

var isEven = function(n) {
  //base - what's the stopping condition?  reaching 0 or 1
  //recursion -- how are you updating n? subtracting 2 from n

  //if number is 0, it's even so,
  if(n === 0){ 
    //return true
    return true;
    //if number is 1, it's odd so,
  }else if(n === 1){
    //return false
    return false;
    //if the number is greater than 0, 
  }else if(n > 0){
    //iterate w/ each iteration subtract 2 til it reaches 0 or 1,
    return isEven(n - 2);
    //else, if n is negative, 
  }else{
    //start over with that negative num
    return isEven(-n);
  }
};


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45 - do not sum input param!
// sumBelow(7); // 21

function sumBelow(n){
  let sum;
  //if n = 1, stop counting --- base
  if(n === 0){ 
    //return n
    return 0;
    //if n is a positive num, 
  }else if(n > 0){
    // return (n-1) + the (iteration - 1) 
    return n - 1 + sumBelow(n - 1);
    //if n is a negative num,
  }else if(n < 0){
    //add 1 to n instead
    return n + 1 + sumBelow(n + 1);
  
  }  
}

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

// should accept neg integers
//should be ok w/ a x being larger than y & vice versa
//should return an arr or an empty arr if x = y

var range = function(x, y, arr = []) {
  //base -- if [], return arr || where (8, 12), if 8 === (9-1), ret arr || where (12, 8), if 12 === (11 + 1), ret arr
  if(x === y - 1 || x === y + 1 || x === y){ 
    return arr;
  //recursion 
  }else if(x < y){
    arr.push(x + 1); //(8, 12) => [(8 + 1)]
    return arr.concat(range(x + 1, y)); // [8 + 1].concat(range(9, 12)), [9, 10].concat(range(10, 12)), etc.
  
  }else if(x > y){
    arr.push(x - 1); //(12, 8)=> [11]
    return arr.concat(range(x - 1, y)); // [11].concat(range((11 - 1), 8))...
  }
}


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

  var exponent = function(base, exp){
    //Initialize a variable to a boolean false, to be changed later depending on exp being neg or pos
    let negativeQ = false;

    //base -- if exp is a negative num
    if(exp < 0){
      negativeQ = true;
      //make it positive: -num * -1 = num
      exp *= -1;
    }
    // base^0 is always = 1
    if(exp === 0){
      return 1;
    }

    //recursive bit --- when all else is resolved, 
    var result = base * exponent(base, exp - 1);
    //if num is negativeQ, divide result of func call by 1 & return it, else return result
    return negativeQ ? 1/result : result;
};


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n){
  //base --- if n is 0, OR if the remainder of n isn't 0, then it's false
  if(n === 0 || !n % 2 !== 0){
    return false;
  // if n = 1, return true
  }else if(n === 1){
    return true;
  }
  
  //recursion -- find & return the power of 2;
  return powerOfTwo(n/2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string){
//base
  if(string === ""){
    return "";
  }else{

//recursion -- 
//.substring takes everything btw its params, so start at 1 index w/ no ending index. string.charAt(0) holds the 0-indexed item in the string
// => reverse("ello") + "H".  Keeps running til there's nothing left for substring to grab onto
return reverse(string.substring(1)) + string.charAt(0);
  }
}


// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {

  let copy = string.trim().toLowerCase();
//base -- if 1 or 0 char left, then it's true,
      //if stringCopy.length <= 1
    if (copy.length <= 1){
      //return true
      return true;
    //if the first char of string isn't equal to the last char,
    }else if(copy[0] !== copy[copy.length - 1]){
      //return false
      return false;
    }
  //recursion - invoke the func with 2 char sliced off the ends of the string & repeat til only 1 char left
    return palindrome(string.slice(1, -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};


// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  let negative = false;
  if (x < 0) {
    negative = !negative;
    x = -x;
  }

  if(y < 0){
    negative = !negative;
    y = -y;
  }

  if(y === 1){
    return x;
  } 

  if(y === 0 || x === 0){
    return 0;
  } 

let result = x + multiply(x, y - 1);
return negative ? -result : result;
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

var compareStr = function(str1, str2){
// base - 
  //if length of both is 0, return true 
  if(str1.length === 0 && str2.length === 0){ 
      return true;
   //else if both strings's first index chars !== equal, ret false 
  }else if(str1[0] !== str2[0]){ 
    return false;
//recursion -- 
  //else if both strings's first index chars are equal,
  }else if(str1[0] === str2[0]){ 
    return compareStr(str1.slice(1), str2.slice(1)); //cut off first index char of each string & start over
  }
};


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //base -- if 1 item in string left
  if(str.length === 1){
    //return that 1 char into an empty arr
    return [str[0]];
  }

  //recursion -- slice char off string & push it to an default param 
  let result = createArray(str.slice(1)); 
  //push reverses the string, use .unshift; then return the result
  result.unshift(str[0]);
  return result;
};

// 17. Reverse the order of an array
var reverseArr = function(array){
  if(array.length === 1){
    return [array[0]];
  }
  let result = reverseArr(array.slice(1)); 
  //.push reverses the array's first element into result, then return the result
  result.push(array[0]);
  return result;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length){
  //base -- stop iterating if length is 0
  if(length === 0){
   return [];
 } 
 //let list = [];
 //recursion -- need to return the length - 1 to get to the stopping position; also need to ret new array
 let list = buildList(value, length - 1);
 //for each iteration, push the value param into arr & then return arr + func
 list.push(value);
 return list;
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value){
  //base --- if array's length = 0, stop looping
  if(array.length === 0){
    return 0;
  }
  //recursion --- if the 0 index value = the value param, 
  if(array[0] === value){
    //add 1 to the return tally + continue looping
      //use .slice to return the rest of the arr 
    return countOccurrence(array.slice(1, array.length), value) + 1;
  }
  //if array[0] !-- value, keep looping without adding to the tally
  return countOccurrence(array.slice(1, array.length), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback){
  //if arr param's length = 0, stop
  if(array.length === 0){
    return [];
  }
  //Initialize a variable to the recursive func call
  let transformed = rMap(array.slice(1, array.length), callback);
  //for each callback func call on arr element, deposit into arr, starting at 0 index
  transformed.unshift(callback(array[0]));
  //return the recursive func/looped arr
  return transformed;
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n){
//should return the arr element at the nth index in sequence:
  //base --- if n = 0. no loops required, ret 0
  if(n === 0){
    return 0;
  } 
  //Fib sequence moves forward, if 1(at the 1 index), ret 1
  if(n === 1){
    return 1;
  }
  //"return null for any negative integers"
  if(n < 0){
    return null;
  }
  //recursion --
    //Fib seq moves forward by adding the last 2, so recursive call should take off 1 from n & then take off 2 & add them to test next
  return nthFibo(n-1) + nthFibo(n-2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input){
    //base -- stop iterating if length is 0
    if(input.length === 0){
      return [];
    } 
    //recursion -- func call should return a decrementing array.length to stop looping at 0
    let arr = capitalizeWords(input.slice(1, input.length));
    //for each iteration, deposit the array[0] w/ upperCase into arr & then return arr
    arr.unshift(input[0].toUpperCase());
    return arr;
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array){
  //base -- stop iterating if length is 0
  if(array.length === 0){
    return [];
  } 
  //recursion -- func call should return a decrementing array.length to stop looping at 0
  let arr = capitalizeFirst(array.slice(1, array.length));
  //for each iteration, deposit the array[0][0] w/ upperCase into arr & then return arr
  arr.unshift(array[0][0].toUpperCase()+ array[0].slice(1));
  return arr;
 };

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  //Initialize an empty array variable
  var arr = [];
  //base -- if arr param's length = 0, stop looping
  if(arrays.length === 0){
    return [];
  }
//recursion -- need to add each element to each other(use concat OR spread operator)
  for(let i = 0; i < arrays.length; i++){
  //if element is nested -- use instanceof operator
    if(arrays[i] instanceof Array){
    //use spread operator to push  each nested element into new arr, creating 1 whole array
      arr.push(...flatten(arrays[i]));
    //if not nested, still push but no func call necessary
    }else{
      arr.push(arrays[i]);
    }
  }
  //return new array
  return arr;
}

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) { // <= default param
  //base -- if string param's length = 0, stop looping
  if (str.length === 0){
    return obj;
  }
  //recursion -- for every func call, return the string - 1st letter
  letterTally(str.slice(1), obj);
  /*
  str = "potato" => if no key/value(key being the 1st letter of the string input) pair in obj, make one using 1 as it's value. Add pairs to default param 
  no "p"? -> add p: 1, no "o"? add o: 1, no "t", add t: 1, no a? add a: 1, no t? yes, add 1 to t:1, no o? yes, add 1 to o: 1
  */
  //if key's first element in obj = undefined, start a tally of 1
  if (obj[str[0]] === undefined) {
    obj[str[0]] = 1;
  //else, add to the tally
  } else {
    obj[str[0]] += 1;
  }
  //return obj w/ tallies
  return obj;
}

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  //base -- if length = 0, return empty array
  if (list.length === 0){
    return [];
  }
let output = compress(list.slice(1));
  //recursion -- if first element doesn't equal the func call's first element, use unshift to push first element into arr
  if (list[0] !== output[0]) {
    output.unshift(list[0]);
  }
  //return new array
  return output;
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //base -- if length = 0, return empty array
  if(array.length === 0){
    return [];
  } 
let arr = minimizeZeroes(array.slice(1));
  //recursion -- if either the input arr or the output arr aren't both true or false OR if the input arr !== 0, --- use xor operator

  if((array[0] === 0 ^ arr[0] === 0) || array[0] !== 0){
    //deposit the input's first element into arr
    arr.unshift(array[0]);
  }
return arr;
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
//base -- if length = 0, return empty arr
if(array.length === 0){
  return [];
} 
//recursion -- create new variable to hold recursive func call -- slices input arr from first to last index
let arr = alternateSign(array.slice(0, array.length - 1));
//initialize a variable to input param's length
var inputLength = array.length;
//if input's length is even, 
if(inputLength % 2 === 0){
  // if the last value in input is greater than 0
  if(array[inputLength - 1] > 0){
    //that item should become negative
    array[inputLength - 1] = -array[inputLength - 1];
  }
//else, vice versa
}else{ 
  if(array[inputLength - 1] < 0) {
    array[inputLength - 1] = -array[inputLength - 1];
  }
}
//push each item into new array & return it s
arr.push(array[inputLength - 1]);
return arr;
}

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  //base -- if length - 0, return empty string
  if(str.length === 0){
    return "";
  }

  //recursively retrun the input sliced from 0 to last index
  let string = numToText(str.slice(0, str.length - 1));
  //Initialize a variable 
let replace;
  //Use a switch statement w/ single digits to repace num with string naming the num 
  switch(str[str.length - 1 ]) {
    case "1": replace = "one";
      break;
    case "2": replace = "two";
      break;
    case "3": replace = "three";
      break;
    case "4": replace = "four";
      break;
    case "5": replace = "five";
      break;
    case "6": replace = "six";
      break;
    case "7": replace = "seven";
      break;
    case "8": replace = "eight";
      break;
    case "9": replace = "nine";
      break;
    default: replace = str[str.length - 1];
      break;
  }//return the string w/ replaced num values inside it
  return string + replace;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
};
