/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function takes in the animals array, & an animal object's name
function search(array, string){
    //Iterate through the array
    for(var i = 0; i < array.length; i++){
        //return the animal object that matches the string parameter
        if(array[i].name.toLowerCase() == string.toLowerCase()){
            return array[i];
            
        }
    }
//if there is no match, return null 
return null;
}


/**
 *  
 2. Implement a function declaration called `search` that:
   - Takes a paramater representing an Array of `animals`.
   - Takes a paramater representing a String, the name of an animal on which to perform a search.
   - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
   - Returns `null` if no animal with that name exists
 3. Use the search bar at the top of the page to make sure your function works.
 */

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
