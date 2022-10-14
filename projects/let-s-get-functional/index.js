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

var maleCount = function(array) {

};

var femaleCount;

var oldestCustomer;
/*
- **Objective**: Find the oldest customer's name
- **Input**: `Array`
- **Output**: `String`
- **Constraints**:*/

var oldestCustomer = (array) => {
    //use .filter to return an arr of every array[i].age
      //initialize a new variable to a .filter func call
    let old = _.filter(array, function(array) {
      //return all of the customer's ages in an array
      return array[i].age;
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

var youngestCustomer;
/*### 4: `youngestCustomer`
 - **Objective**: Find the youngest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:*/

var averageBalance; // convert string to a num 1st - use RegEx, rubular.com
/*### 5: `averageBalance`
 - **Objective**: Find the average balance of all customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**:*/

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

var topThreeTags;
/*### 9: `topThreeTags`
 - **Objective**: Find the three most common tags among all customers' associated tags
 - **Input**: `Array`
 - **Output**: `Array`
 - **Constraints**:*/

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
