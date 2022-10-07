//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

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

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, arrayOfObjects) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

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