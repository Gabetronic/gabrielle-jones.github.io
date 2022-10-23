// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./gabrielle-jones.github.io/projects/let-s-get-functional
 *
 *    
 */



/////EVERYTHING W/ INSTRUCTIONS IS NOT DONE!

 var maleCount = (array) => {
  //Declare a variable to hold the intended output 
  let sum;
  //Initialize a variable to the filter method,
  let tally = array.filter(function(value, index, array){
    //if value.gender = male, return it
    if(value.gender === "male"){
      return value.gender;
    };
  //chain the reduce method to the variable to count and return the sum of all values filtered as "male"
  }).reduce((sum, value, index, array) => {
    return sum += 1;
  }, 0);
//return the tally variable
return tally;  
};

 var femaleCount = (array) => {
  //Declare a variable to hold the intended output 
  let sum;
  //Initialize a variable to the filter method,
  let tally = array.filter(function(value, index, array){
    //if value.gender = female, return it
    if(value.gender === "female"){
      return value.gender;
    };
  //chain the reduce method to the variable to count and return the sum of all values filtered as "female"
  }).reduce((sum, value, index, array) => {
    return sum += 1;
  }, 0);
//return the result of these func calls
return tally;  
};

/*### 3: `oldestCustomer`
- **Objective**: Find the oldest customer's name
- **Input**: `Array`
- **Output**: `String`
- **Constraints**:*/

var oldestCustomer = (array) => {
    //use .filter to return an arr of every array[i].age
      //initialize a new variable to a .filter func call
    let old = customers.filter((customer) => {
      //return all of the customer's ages in an array
      return array.age;
    });
    //initialize a new variable to a .sort function call
    let age = old.sort();
    //Iterate through array, 
    for (let i = 0; i < array.length; i++) {
      //if the last element in the age variable = a customer's age
      if (age[age.length - 1] === array[i].age) {
        //log that customer's name
        console.log(array[i].name);
      }
    }
  }

 var youngestCustomer = function(customers){
  //Initialize a variable to a func call -- use Math object & spread operator to determine the youngest customer's age.Used .map to this to return the age.
  let youngest = Math.min(...customers.map(function(customer){
      return customer.age;
  }));
  //if new variable(youngest age) === customer's age (used .filter to find this), return that customer's name by transforming the arr from age to name(i.e. use .map)
  let name = customers.filter(function(customer){
      return youngest === customer.age; 
  }).map(function(customer){
      return customer.name;
  });
  
  //Use .toString() to return the name as a string
  return name.toString();
  }

  


/*### 5: `averageBalance`
 - **Objective**: Find the average balance of all customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**:*/

 var averageBalance = (customers) => {
  let averages = customers.reduce(function(acc, current, index, array){
  //access each obj's balance
  let balances;
  let bals;
    for(let i = 0; i < array.length; i ++){
      //convert all balances from strings to nums
      bals = array[i].balance;
      balances = bals.toNumber();  //error msg: <> not a func
    }
  //reduce all balances
  //push result to seed value
  let result = balances / balances.length;
  }, 0);
return result;
}




var firstLetterCount;
/*### 6: `firstLetterCount`
 - **Objective**: Find how many customer's names begin with a given letter
 - **Input**: `Array`, `Letter`
 - **Output**: `Number`
 - **Constraints**:*/

var friendFirstLetterCount;
/*### 7: `friendFirstLetterCount`
 - **Objective**: Find how many friends of a given customer have names that start with a given letter
 - **Input**: `Array`, `Customer`, `Letter`
 - **Output**: `Number`
 - **Constraints**:*/

var friendsCount;
/*### 8: `friendsCount`
 - **Objective**: Find the customers' names that have a given customer's name in their friends list
 - **Input**: `Array`, `Name`
 - **Output**: `Array`
 - **Constraints**:*/


 var topThreeTags = function(cxs) { //customer = cx, hence cxs

  //Use .reduce to get all tags
    let tags = _.reduce(cxs, function(output, cx) { 
  //Create an empty array variable to hold tags
    let arr = cx.tags;
    
  // Use .each to see if a value exists for each key; if yes, add to output variable, if no, create the tally
    _.each(arr, function(tag) {
      if(output[tag]){ 
        output[tag]++;
      }else{
        output[tag] = 1; 
      }
    });
  //Return output tally
    return output;  
    }, {});
//Put tags in an empty array -- used Object.entries method
let arr2 = [];
arr2 = Object.entries(tags);
//Use .sort to find most used tags && sort by tally, not by name
let ofSorts = arr2.sort(function(a, b) {
  return b[1] - a[1];
  });
//Create variable to hold sliced top 3 key/value paris
let arr3 = ofSorts.slice(0, 3);  
// Remove the tally from arr3 to leave only the tag names -- push names to a new empty arr variable
let topThree = [];
for(var i = 0; i < arr3.length; i++){
  topThree.push(arr3[i][0]);
}
//return result
return topThree;
};


var genderCount;
/*### 10: `genderCount`
 - **Objective**: Create a summary of genders, the output should be:
```javascript
{
    male: 3,
    female: 4,
    non-binary: 1
}
```
 - **Input**: `Array`
 - **Output**: `Object`
 - **Constraints**: Use `reduce`*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
