
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles() {
      //make 7 func calls to log a triangle: used a for loop and length prop
    //starting position = empty string variable,
    //stopping position = when the string's length <= a given num param
    //iteration =  add a string to the existing string
    /*
  for(let string = "#"; string.length <= 5; string += "#"){
    console.log(string);
  }
}*/

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  
    //Initialize a variable to 1
    let num = 1;
    //use a while loop to iterate over a range of numbers (1 - 100)
    while(num <= 100){
        //use a conditional chain to print each number to the console, with the following exceptions,
        //print "FizzBuzz" for every number that's a multiple of 3 & 5
        if(num % 3 == 0 && num % 5 == 0){
            console.log("fizzbuzz");
        //print "Fizz" for every number that's a multiple of 3
        }else if(num % 3 == 0){
            console.log("fizz");
        //print "Buzz" for every number that's a multiple of 5
        }else if(num % 5 == 0){
            console.log("buzz");
        //print every number besides the conditions listed above, as it's appropriate number value
        }else{
            console.log(num);
        }
    num++;
    }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
