/**
 * FUNCTIONS:
 * 0. In computing terms, a function is a small program that receives input, acts on that data, and outputs the result of its 
 * action(s).  Functions are both fundamental to JavaScript, and very popular because of their reusability and ability to 
 * simplify code.
 * 1. The actions inherent to functions are divided into two phases: declaration and invocation.  The declaration phase uses 
 * specific syntax to form the outline of how the function will behave: what it will take in as input, what task(s) it will 
 * perform on that input data, and what users can expect from its output(s). A function invocation, or call occurs when a
 * user wants to implement the function on specific data; it also uses a set syntax to pass data, or argument(s) into the
 * function body.
 * 2. Depending on the programmer's intent, functions can: be named, or unnamed, aka anonymous; parameters & arguments can be
 * optional; and functions can be attached to variables (these are called function expressions), or they can stand alone as
 * function declarations.
 * 3. The code inside a function body can access, modify and hold on to particular variables based on where they are located in 
 * the coding environment and whether they are declared with var, let or const. A function's scope includes its arguments, the 
 * variables declared inside it, variables in its (if it's nested) parent function's scope, and global variables.
 * 4. Closure happens within nested functions: the inner functions always have access to the variables in the parent scope, 
 * including parameters. When the outer function is invoked, whatever arguments passed to it also pass to the inner function, 
 * making this inner function an accessible and reusable entity that holds onto the information from its outer function.
 */

// 1. function declaration //
/* A function must be declared before it can be used -- declaration syntax includes:
   keyword function functionName( //optional parameter(s) ){ //code block }  
*/
function returnANumber(number){
    return number;
}

// 2. optional parameters & arguments //
// A function can be designed to take in no parameters and pass in no arguments
function noParameters(){
    console.log("Flying Lotus");
}

// 3. function invocation //
/* Once declared, a function can be used by invoking, or calling it -- function call syntax includes:
   functionName( //optional arguments passed into the function ); 
*/
returnANumber(8); // prints=> 8
noParameters(); // prints=> Flying Lotus

// 4. function expression //
// Variables can hold function declarations
let funcExpression = function comedyShow(){
    return "A Black Lady Sketch Show";
}

// Because the variable is named, the function inside it is considered an anonymous function
let anonymousFunc = (string) => {
    return string += "thee Stallion";
}

// 5. scope //
// Global variables, including parent scoped variables cannot access local, or child scoped variables
let globalAge = 35;

function intro(){
  let parentAge = 32; 
  console.log(parentAge += childAge); //prints => ReferenceError:childAge is not defined
   function intro2(){
    let childAge = 37; 
    console.log(`She is ${childAge}`);
   }
  intro2();
};
console.log(globalAge += childAge); //prints => ReferenceError:childAge is not defined
intro();

/* Child scoped let variables declared inside a function can overshadow a parent scoped let variable.  If the parent scoped
   variable is declared with var, it will not be overshadowed the child scoped let variable. 
*/
let lady = "Sheena"; //global variable
var noun = "rocker"; //global variable 

function song(string) {
    const verb = "is"; //verb & genre are local parent variables
    let genre = "metal"; //<-- if this were var genre, the function call for song() would print "Sheena is a metal rocker now."
        function lyric() {
            let genre = "punk"; //local child variable
            console.log(`${string} ${verb} a ${genre} ${noun} now.`);
        }
    lyric();
}
song(lady); // prints=> Sheena is a punk rocker now.

// 6. closure //
// Holds on to its return value, which includes a reference to its parent function, regardless of how inner func is later used
function returningMember(string){
    return function bandMembers(){
      return string += "AJ, Howie, & Nick";
    }
}
let welcomeBack = returningMember("Kevin, ");
console.log(welcomeBack());//prints => Kevin, AJ, Howie, & Nick

let hiAgain = returningMember("Brian, ")
console.log(hiAgain());//prints => Brian, AJ, Howie, & Nick



