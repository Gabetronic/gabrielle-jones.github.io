//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//const { first } = require("lodash");

function objectValues(object) {
    //initialize an empty array variable
    let array = [];
    //Iterate through the object
    for(var key in object){
        //push each iteration into the empty array variable
        array.push(object[key]);  
    }
    //return the array
    return array; 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
 
    //initialize an empty array variable
    let array = [];
    //Iterate through the object
    for(var key in object){
        //push each iteration into the empty array variable
        array.push(key);  
    }
    //Initialize a string variable to the array - Use the .join method with a space btw the quotation marks to create a string seperating each key with a space
    let string = array.join(" ");
    //return the string
    return string; 
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //initialize an empty array variable
    let array = [];
        //Iterate through the object
        for(var key in object){
            //Use a conditional to find if each iteration is a string data value
            if(typeof object[key] === "string"){
            //if it is a string, push the iteration into the empty array variable
            array.push(object[key]);  
            }
        }
    //Initialize a string variable to the array - Use the .join method with a space btw the quotation marks to create a string seperating each key with a space
    let string = array.join(" ");
    //return the string 
    return string; 
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //if the collection parameter is an object
    if(Object.prototype.toString.call(collection) === "[object Object]"){
        //return a string representing that
        return "object";
    //else, if the parameter is an array,
    }else if(Object.prototype.toString.call(collection) === "[object Array]"){
        //return a string named "array"
        return "array";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //Use the charAt method to locate the first indexed character of the string parameter.
        //Capitalize the first character using the toUpperCase() method
            //return the capitalized character with the rest of the string parameter using the .splice() method
    return string.charAt(0).toUpperCase() + string.slice(1);
}


//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var output = string.split(" ");
    var array = [];
        //Iterate through the string parameter
        for(var i = 0; i < output.length; i++){
            //capitalize that indexed value
            array.push(output[i].charAt(0).toUpperCase() + output[i].slice(1));
        }
    return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//Grab the name property in the object parameter by assigning it to a string variable
let string = object.name;

//Return that string with the first letter of the name property capitalized, as well as the given strings to return with the object prop 
 //- use charAt() method, toUpperCase() .slice() to capitalize & operators to attach "Welcome " & "!"
return "Welcome " + string.charAt(0).toUpperCase() + string.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //Grab the values from the object by assigning them to a string variable
    let nameStr = object.name;
    let speciesStr = object.species;

    //return the strings, capitalized & attached to the provided output values - use .charAt(), 
        //.toUpperCase(), .slice(), and operators to attach the provided value " is a "
    return nameStr.charAt(0).toUpperCase() + nameStr.slice(1) + " is a " + speciesStr.charAt(0).toUpperCase() + speciesStr.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//Initialize an empty string variable
//var string = ""
  
      //Iterate through object parameter - use a for-in loop
    for(var key in object){
          //if the iteration is an array with a key of "noises" & its length > 0, - find the type of prop w/ array.isArray method & 
            // use length prop to determine if the value's array is > 0
        if(Array.isArray(object[key]) === true && key === "noises" && object[key].length > 0){
              //return the array's props as a string with a space between each noise - use .join(" ") to create a string w/ a space btw each noise
              return object[key].join(" ");
        }
    }
//else, return a string with the phrase provided - return this statement outside of the loop
return "there are no noises";
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}
/*
 * { QUnit.test("hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.", function(assert){
      var data = "This is a super awesome string of words";
      assert.strictEqual(hasWord(data, "awesome"), true);
      assert.strictEqual(hasWord(data, "words"), true);
      assert.strictEqual(hasWord(data, "turtle"), false);
    });} name 
 
 */

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}


/*  
QUnit.test("addFriend() : Should take a name and an object and add the name to the object's friends array then return the object", function(assert){
    assert.deepEqual(addFriend("lester", {friends:[]}), {friends:["lester"]});
    assert.deepEqual(addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
  });
  */

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

/*
QUnit.test("isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise", function(assert){
      assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
      assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
      assert.equal(isFriend("chuck",{}), false);
    });
*/

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, arrayOfObjects) {

}

/*
QUnit.test("nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with", function(assert){
      var data = [
        {name: "Jimmy", friends:["Sara", "Liza"]},
        {name: "Bob", friends:[]},
        {name: "Liza", friends: ["Jimmy"]},
        {name: "Sara", friends: ["Jimmy"]}
      ];
      assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
      assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
      assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
    });
    */

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

/* 
QUnit.test("updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.", function(assert){
    var data = {a: "one", b: "two", "hokey": false};
    assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
    var data = {a: "one", b: "two", "hokey": false};
    assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
    var data = {a: "one", b: "two", "hokey": false};
    assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
  });
  */

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}
/*
  QUnit.test("removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function(assert){
      var data = {a: "one", b: "two", "hokey": false};
      removeProperties(data, ["a","hokey"]);
      assert.deepEqual(data, {b: "two"});

      var data = {a: "one", b: "two", "hokey": false};
      removeProperties(data, ["b"])
      assert.deepEqual(data, {a: "one", "hokey": false});

      var data = {a: "one", b: "two", hokey: false};
      removeProperties(data, []);
      assert.deepEqual(data, {a: "one", b: "two", "hokey": false});
    });
    */

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}
/*
 QUnit.test( "dedup() : Should take an array and return an array with all the duplicates removed", function( assert ) {
      var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
      var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
      assert.deepEqual(dedup(arrayOne), [1,2,3,4,5,"a","b","c"]);
      assert.deepEqual(dedup(arrayTwo), ["hello", "world"]);
    });
    */
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}