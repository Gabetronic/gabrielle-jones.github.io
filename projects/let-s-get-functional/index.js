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

var oldestCustomer = (customers) => {
  //Initialize a variable to a func call -- use Math object & spread operator to determine the youngest customer's age.Used .map to this to return the age.
  let oldest = Math.max(...customers.map(function(customer){
      return customer.age;
  }));
    //if new variable(oldest age) === customer's age (used .filter to find this), return that customer's name by transforming the arr from age to name(i.e. use .map)
  let name = customers.filter(function(customer){
    return oldest === customer.age; 
  }).map(function(customer){
      return customer.name;
  });
    
//Use .toString() to return the name as a string
return name.toString();
}

var youngestCustomer = function(customers){
  //Initialize a variable to a Math.max func call to find oldest age, & it also takes in .map func to return oldest customer age
  let youngest = Math.min(...customers.map(function(customer){
    return customer.age;
  }));
  //Use .filter to match youngest age to customer's age, 
  let name = customers.filter(function(customer){
    return youngest === customer.age; 
  //Use .map to return that customer's name
  }).map(function(customer){
    return customer.name;
  });
  
//Use .toString() to return the name as a string
return name.toString();
}


var averageBalance = (customers) => {
  //Initialize a variable that adds each customer's balance to an accumulator variable (using .reduce):
  let average = customers.reduce((acc, customer, index, array) => {
  //Initialize a variable that converts the balance value from a string with non-numerical chars to a string with just nums
  let conversion = customer.balance.slice(1).split(",").join("");
  //Convert the numerical string to numbers inside the conversion variable -- use Number() Constructor  
  let num = Number(conversion);
  // Add together each balance to the accumulator variable
  acc += num;
  //return the total bal
  return acc;
}, 0);
 //Find the average balance by dividing the result of the func call in average variable by the total # of customers
  //total # -> use .length 
 return average / customers.length;
}




var firstLetterCount = (array, letter) => {
  //iterate over array input to grab customer's first name's first letter & match it to the letter input ==> equalize case plz:
    //use .filter 
    let matches = array.filter((value, index, array) => {
      if(value.name[0].toLowerCase() === letter.toLowerCase()){
        return value.name; //[]
      }
    //for every cx match, add a tally of 1 to an acc variable
      //use .reduce
    }).reduce((acc, current, index, array) => {
        if(/*value.name*/current){
          acc += 1;
        }
      //return acc
      return acc;
    }, 0);
    //return that num
    return matches;
  };


var friendFirstLetterCount = function(array, customer, letter){
  //Create output variable & set to 0
  let output = 0;
  //Use .each(forEach) to iterate over every customer in customers arr,
   _.each(array, function(element){
    //if customer.name = customer param,
    if(element.name === customer){   
      //Iterate over the customer's friends array, &
      for(var i = 0; i < element.friends.length; i++){
        //if a friend's first name[0] = the letter param
        if(element.friends[i].name[0].toLowerCase() === letter.toLowerCase()){
          //add to the output tally
          output++;
        }
      }
    }
  });
//return output
return output; 
};
  
var friendsCount = (array, name) => {   //"find the cx's names that have a given cx's name in their friends list":
//Initialize a variable to .pluck to "extract a list of a given prop", that being the friends list array
  //Filter through the friends array to find any( use .some() ) instance of list names that match the name param 
let count = _.pluck(_.filter(array, element =>_.some(element.friends, friend =>
  friend.name === name)), "name");
//return count 
return count;
};


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


var genderCount = (customers) => {
  //Initialize an empty obj variable
  let tallyObj = {}; 
  //create a variable to hold the result of calling the reduce func:
  let genderTrouble = customers.reduce((tallyObj, customer) => {
    //if customer's gender exists, 
    if( tallyObj[customer.gender]){
      //add 1 to the tally
      tallyObj[customer.gender] += 1;
    //else -- 
    }else{
      //create the customer's gender
      tallyObj[customer.gender] = 1;
    }
  //return obj variable 
  return tallyObj;   
  }, {});
//return the result
return genderTrouble;
};


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
