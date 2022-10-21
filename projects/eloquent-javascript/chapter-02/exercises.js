
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
//make an unspecified # of func calls to log a triangle: used a for loop and length prop:
  //Created a string variable initialized to a symbol
  let string = "#";
  //starting position = index variable initialized to 0,
    //stopping position = when the string's length <= a given num param
     //iteration =  add a string to the existing string
  for(let i = 0; string.length <= num; string += "#"){
    //print string
    console.log(string);
  }

}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  
    //Initialize a variable to 1
    let num = 1;
    //use a while loop to iterate over a range of numbers (1 - 15)
    while(num <= 15){
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

function drawChessboard(num, string = ""){
  //create a string that = square grid (any input num) of spaces & #, using \n to seperate lines.  
//Initialize an empty string variable
//let string = "";
  
  //Create 2 loops to check the size of each grid space,
  for(let i = 0; i < num; i++){
    for(let j = 0; j < num; j++){
      //if space is even,
      if((i + j) % 2 === 0){
      //add a space to the string
      string += " ";
      //if it's odd, 
      }else{
        //add a symbol
        string += "#";
      }
    }
  //add a special char to the string
  string += "\n";
  }
  //print the string
  console.log(string);
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
