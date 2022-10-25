/**
 * CONTROL FLOW:
 * 0. Controlling the flow of questioning allows you to reach the answers you desire -- the same holds true in JavaScript: the
 * JS interpreter reads code from left to right and top to bottom, evaluating, modifying and storing data after reading each line 
 * of code.  In addition to this automated trait, developers can create conditional statements, functions, and loops that direct 
 * the JS interpreter on what to evaluate next.  This sub-project covers conditional statements, which allow the interpreter
 * to take different actions based on its evaluation of the conditions laid out in the conditional statement.
 * 1. An if-statement covers the first condition, or road that the JS interpreter encounters.  It says if a condition is true,
 * execute the code block outlined.
 * 2.  If the if-statement proves false, a new condition & code block are outlined in the else-if statement. Although there can
 * only be one if-statement, else-if statements can multiply indefinitely.
 * 3. The final statement, or the else statement, provides a set of instructions to be executed in the event that all other 
 * else-if statements before it are proven false.
 * 4. A switch statement stands alone, and is able present many different conditions & instructions in the same construct.
 */

// 1. if statement //
// Provides the first condition and code block to execute if the condition evaluates to true
console.log("Como estas?");

if(x == "Monday" || x == "Tuesday"){
    console.log("Mas o menos.");
}

// 2. else-if statement //
// This statement serves as one or multiple follow-up conditions to consider after the first condition fails
else if(x == "Wednesday" || "Thursday"){
    console.log("Bien, estoy buena de salud.");
}

// 3. else statement //
// Provides a final code block to execute if all other conditions are proven false
else{
    console.log("It's the weekend, I'm taking a break!");
}

// 4. switch statement //
// Provides a single statement with multiple conditions, and subsequent directions to perform
let x = "cerulean blue";
//the statement will evaluate the expression x, and try to match it with
switch(x){
  //each case presented --
  case "vermilion":
  case "forest green": 
    //if matched with either of the 2 cases above, the interpreter will     print this =>
    console.log("These are half off");
    //a break statement stops the evaluation, and points towards the         next case
    break;
  case "vantablack":
    console.log(`Do you mean this?`)
    break;
  case "cerulean blue":
    console.log("Is this it?");
    break;
  //this serves the same purpose as the "else" statement - if all else     fails,
  default:
    //print this =>
    console.log("Sorry, out of stock in that color!");
}
