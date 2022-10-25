/**
 * LOOPS:
 * 
 * 0. Loops help developers automate a set of instructions until a condition is met. If there is no explicit condition defined, 
 * a break statement or stopping condition must be included in the code block in order to prevent an infinite loop.  Using loops 
 * shortens the time and energy spent creating code.  There are three types covered here: while, for, and for-in.
 * 1. While-loops are best utilized when there is an unknown number of iterations, or loops: as long as the condition evaluated
 * remains true, a while loop will continue iterating. An optional statement inside the loop's code block will execute until the 
 * condition becomes false. 
 * 2. For-loops are used when we know exactly how many iterations are needed to meet the condition provided. They are often used 
 * on arrays and strings because developers generally use the .length property as a starting or stopping condition. Because 
 * for-loops traverse a length, they can be written to loop forwards or backwards.
 * 3. For-in-loops are built specifically with objects in mind: the basic function of this loop is to iterate over every property
 * in an object and execute a set of instructions. 
 */

// 1. While Loops //
// While a condition is true, loop according to the instructions provided in the code block
let x = 2;
let text = "";

//As long as x is true
while (x) { 
  //Add to the empty string, a new string
  console.log(text += "all work and no play makes jack a dull boy.");
  //Decrement at every iteration: the variable x will eventually decrement to 0, which Javascript interprets as a falsey value
  x--;
}
/*Once x = 0, the loop ends and prints=> 
  all work and no play makes jack a dull boy. all work and no play makes jack a dull boy. all work and no play makes jack a 
  dull boy. 
*/

// 2. For Loops //
// Loops forwards over an array
let nums = [1, 2, 3, 4, 5];
let nums2 = [];
// For these conditions --> starting condition = 0; stopping condition = nums.length; direction after each loop? = forward by 1
for(let i = 0; i < nums.length; i++){
    //make a copy of the nums array
    let copy = [...nums];
    //push the result of adding 2 to every iteration into the empty array variable
    nums2.push(copy[i] + 2);
}
console.log(nums, nums2); //prints=> [1, 2, 3, 4, 5] [3, 4, 5, 6, 7]

// Also loops backwards over an array
let letters = ["a", "b", "c", "d"]
let letters2 = [];
/* For these conditions --> starting condition = nums.length - 1; stopping condition >= 0; direction after each loop? = backwards 
   by 1
*/
for(let i = letters.length - 1; i >= 0; i--){
    //make a copy of the letters array
    let copy = [...letters];
    // push the reversed array into the empty array variable
    letters2.push(copy[i]);
}
console.log(letters, letters2); //prints=> [ 'a', 'b', 'c', 'd' ] [ 'd', 'c', 'b', 'a' ]

// 3. For-in Loop //
// Loops over an object
let subGenres = { 1: "punk", 2: "dancehall", 3: "Bubblegum" };
console.log(`Here are some subgenres of pop music:`);

for(let key in subGenres){
  //print the key/value pair with a string attached
  console.log(`${key}) ${subGenres[key]}-pop`);
}
/* 
prints => 
Here are some subgenres of pop music:
1) punk-pop
2) dancehall-pop
3) Bubblegum-pop
*/


