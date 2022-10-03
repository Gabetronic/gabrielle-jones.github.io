// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //Create an empty object variable
    let contact = {};
    //Add properties to the variable - since contact is unknown at this time, the parameter names for each property
    contact.id = id;
    contact.nameFirst = nameFirst;
    contact.nameLast = nameLast;
    //return the contact object
    return contact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },

        addContact: function(contact){
            //return the contacts array with a new contact added using the .push() method
            return contacts.push(contact);
        },

        findContact: function(fullName){
            //split fullName string into an array - create a new array variable to hold the results
            let fullNameArray = fullName.split(" ");
            //create a for loop to iterate over contacts array, in order to find the contact
            for(let i = 0; i < fullNameArray.length; i++){
                //use a conditional - if any contact's name-related properties match the properties in the fullNameArray,
                if(contacts[i].nameFirst === fullNameArray[0] && contacts[i].nameLast === fullNameArray[1]){
                    //return that contact
                    return contacts[i];
                    //else, return undefined
                }else{
                    return undefined;
                };
            }
            
        },

        removeContact: function(contact){
            //Remove removeContact parameter from the contacts array - use .splice() method
            contacts.splice(contact, 1);
        },

        printAllContactNames: function(){
            //Create an empty string variable
            let outputString = "";
            //Iterate through the contacts array
            for(var i = 0; i < contacts.length; i++){
                //if the iteration is not the last property in the array, 
                if(i !== contacts.length - 1){
                    //add the current iteration to the string variable - use \n to add a new line
                    outputString += contacts[i].nameFirst + " " + contacts[i].nameLast  + "\n";
                //else, add just the current iteration to the string variable                     
                }else{
                    outputString += contacts[i].nameFirst + " " + contacts[i].nameLast;
                }
            }
        //return the string variable
        return outputString;
        
        }



    }
}

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
