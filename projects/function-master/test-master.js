(function(){

  QUnit.test( "Our First Test", function( assert ) {
    var value = "hello tests";
    var some_number = 484;

    //                     ┌ Change this to what it should be
    assert.equal( value, 'hello tests');
    //                           ┌ Change this to what it should be
    assert.equal( some_number, 484);
  });

  QUnit.test("Functions can access/modify variables in parent scope.", function(assert){
    var outside_the_function = null;
    function yay(){
      var inside_the_function = "can you see me?";
      outside_the_function = inside_the_function;
    }

    yay();

    assert.equal(outside_the_function, "can you see me?");
  });

  QUnit.test("Function Parameters become scoped to the function.", function(assert){

    function yay(param){
      assert.equal(param, "a fine kettle of fish");
    }

    yay("a fine kettle of fish");
  });

  QUnit.test("A functions local scope is not available in an outer scope.", function(assert){
    function yay(){
      var kix = "kid tested mother approved";
      assert.equal(kix, "kid tested mother approved");
    }
    yay();
    
    var has_kix;
    // NOTE:
    // "this" is a special object that by default represents the global scope.
    // variables declared globally are stored as a property on the object: this.<variable>
    // if the variable is not global then this.<variable> will be undefined
    if(this.kix !== undefined){
      has_kix = kix;
    } else {
      has_kix = "i prefer cheerios";
    }
    assert.equal(has_kix, "i prefer cheerios");
  });

  QUnit.test("Functions don't have access to eachothers scope", function(assert){
    function yay(){
      var from_yay = "i'm inside yay;";
    }

    function foo(){
      var in_foo = "i'm in foo";
      if(this.from_yay !== undefined){
        in_foo = this.from_yay;
      }
      assert.equal(in_foo, "i'm in foo");
      assert.equal(this.from_yay, undefined);
    }
    yay();
    foo();
  });

  QUnit.test("Inner scope variables override outter scope variables.", function(assert){

    var peanuts = 300;

    function yay(){
      var peanuts = "roasted";

      assert.equal(peanuts, "roasted");  // peanuts is initialized inside the function, so peanuts = "roasted"
    }
    yay();

    assert.equal(peanuts, "300");  //once invoked, even though yay() inside contains "roasted", it doesnt carry outside the function, so peanuts(outside) = 300
  });

  QUnit.test("Variables created with var in a funtion are re-created each time", function(assert){
    function yay(){
      if(this.counter !== undefined){
        counter = counter + 1;
      } else {
        var counter = 10;
      }
    }

    yay();
    assert.equal(this.counter, undefined); 
    yay();
    assert.equal(this.counter, undefined);
    yay();
    assert.equal(this.counter, undefined); //counter variable isn't global, so this.counter will always be undefined, no matter how many times you invoke yay()
  });

  QUnit.test("Inner scope can access outer scope", function(assert){
    var im_outside = "alpha";
    function yay(){
      var im_inside = "omega";
      return im_outside + im_inside; // yay() invoked accesses var variable, so return alphaomega
    }

    assert.equal(yay(), "alphaomega");
  });

  QUnit.test("Functions retain outer scope references between calls.", function(assert){
    var im_outside = 13;
    function yay(){
      im_outside += 1;
    }

    yay();
    assert.equal(im_outside, 14); //im outside += 1 => 14; im outside now = 14
    yay();
    assert.equal(im_outside, 15); //im outside += 1 => 15; im outside now = 15
  });

  QUnit.test("We can do goofy stuff with outer scope", function(assert){

    var hello = "greg";
    var name = "";

    function yay(){
      name += hello;
    }

    yay();
    assert.equal(name, "greg"); // "" += greg => greg
    yay();
    assert.equal(name, "greggreg"); // greg += greg => greggreg
    yay();
    assert.equal(name, "greggreggreg"); // greggreg += greg => greggreggreg
  });

  QUnit.test("We can pass functions to other functions and then run them.", function(assert){
    var im_outter = 10;
    function yay(){
      im_outter /= 5; // 10 divided by 5 = 2; im outter now = 2
    }
    function something(whatever){
      im_outter *= 20; // Invoke yay() first, then result of yay() = im outter * 20 => 40
      whatever();
    }
    something(yay);
    assert.equal(im_outter, 40);

  });

  QUnit.test("We can get crazy with returns.", function(assert){
    function yay(){
      return " is dog";
    }
    function foo(whatever){
      return "hello, this" + whatever();
    }
    assert.equal(foo(yay), "hello, this is dog"); //foo() is returning an invocation of yay(), which means its parameter = "is dog" 
  });

})();
