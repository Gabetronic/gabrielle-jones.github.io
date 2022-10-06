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


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(array, string, object){
    //if an animal.name exists in the array - Iterate through the array
    for(var i = 0; i < array.length; i++){
        //find if the string parameter matches a property's name in the array
        if(array[i].name.toLowerCase() == string.toLowerCase()){
            //if it does, replace the entire property with the object parameter; else, do nothing
            array[i] = object;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(array, string){
    //Iterate through the array
    for(var i = 0; i < array.length; i++){
        //if the string parameter matches a property's name in the array,
        if(array[i].name.toLowerCase() == string.toLowerCase()){
            //remove that property from the array
            array.splice(array[i], 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(array, object){

   //if object parameter has both name & species properties with a length > 0,
    if(object.name.length > 0 && object.species.length > 0){
        //Iterate through the array parameter
        for(var i = 0; i < array.length; i++){
        //and, if the object parameter's name doesn't match any of the array iteration's name properties
            if(object.name !== array[i].name){
            //add the object to the array
                array.push(object);
            //else, return the array
            }else{
                return array;
            }
        }
    }
}


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
