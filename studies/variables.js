/**
 * VARIABLES:
 * 
 * 0. Variables are variously described as containers or bindings, because they store or hold a data value(or values) for 
 * later use.
 * Depending on the values a variable holds, variables can be constant for the program's duration, they can change at the whim 
 * of the programmer's decision, or they can simply point to other variables.
 * 1. A programmer must declare a variable, or name it, using a certain set of rules in order for the value(s) they intend 
 * to bind. Once a variable declaration is performed, a programmer should assign the variable to the value(s) they intend to 
 * bind.  If a programmer performs both of the declaration and assignment simultaneously, it is said that they have initialized 
 * a variable. 
 * 2. Var, let and const are keywords required to create variables.  They each have varying traits, but must be written before 
 * the actual variable name itself.  A var variable can be declared without a data value attached, and it can be both re-declared 
 * and re-assigned. Let variables can be re-assigned, but not re-declared. Once initialized, constant or const variables can't 
 * be re-assoigned or re-declared.
 * 3. Hoisting is a JavaScript engine trait that moves, or "compiles," & then reads, or "interprets" both variable & function 
 * declarations at the top of a program before any other code.  Once at the top of the program, a var variable's value will be 
 * interpreted as the undefined data value; its actual value(s) will be read later once the JS engine arrives (the JS engine 
 * reads from top to bottom, left to right) at that particular variable within the rest of the code. By hoisting function 
 * declarations, their associated function calls can be executed anywhere in the program, since their initial code has already 
 * been interpreted at the top of the program.
 */

// 1. declaration //
// Declaring a variable leaves the JS engine to interpret the variable as undefined. 

var hello;
console.log(hello); //prints => undefined

// 2. assignment & initialization //
/* Assigning a variable allows a value to be bound by the declared variable; the JS engine will now read the variable's intended 
   value.
*/
hello = "Hi stranger!";
console.log(hello); //prints => Hi stranger!

// 3. re-assignment //
// Re-assignment allows a variable to change it's initial value(s)
hello = "Hola senorita!"
console.log(hello, number); //prints => Hola senorita! 

// 4. var keyword //
// The var keyword allows its variables to be re-declared & re-assigned
var outkast = "Andre 3000";
var outkast; //re-declaration
console.log(outkast); //prints => Andre 3000

outkast = "Big Boi & Andre Benjamin"; //re-assignment
console.log(outkast); //prints => Big Boi & Andre Benjamin

// 5. let keyword //
// The let keyword allows its variables to only be re-assigned
let fruit = "apples";
fruit = "bananas" //re-assignment
console.log(fruit); //prints => bananas

let fruit; //prints => SyntaxError: Identifier 'fruit' has already been declared

// 6. const keyword //
// The const keyword only allows its variable to be initialized
const muhammadAli = "the Greatest";
muhammadAli = "nope";
console.log(muhammadAli); //prints => TypeError: Assignment to constant variable

const bandName;
console.log(bandName); //prints => SyntaxError: Missing initializer in const declaration


// 7. hoisting //
/* Hoisting causes var variables to be temporarily rendered to the value of undefined, until their initialization is read later. 
Hoisting also allows function calls to be read anywhere in the program.
*/
console.log(greeting); //prints => undefined
var greeting = "hi!"; 
console.log(greeting); //prints => hi!

song(); //prints => Please sing a song!
function song(){
    console.log("Please sing a song!")
}
