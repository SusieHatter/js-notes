// DEFINING VARIABLES
var x = 1;
var y = 2;
var crocodile = "Hello, I'm a crocodile!";
var elephant = "Hello, I'm a elephant!";

// PRINT STUFF
console.log("crocodile:", crocodile);
console.log("x:", x, "y:", y);
console.log('Look at the value of this variable elephant: "' + elephant + '"');

// (RE)ASSIGNING VARIABLES
x = 4;
crocodile = "I have been changed!";
console.log("x:", x);
console.log("crocodile:", crocodile);

// NUMBERS
var z = ((1 + 2) * 3) / 4 + Math.pow(5, 2);
var remainder = z % 5;
console.log("z:", z, "remainder:", remainder); // Inside console.log, we don't need to use + for strings, a comma will add whitespace for us

// STRINGS
var canConcatinate = "hello " + "there!"; // Notice the space after hello (otherwise it would be "hellothere!")
var canIncludeSpeechMarks = 'Mark said, "Hello!"'; // If you want to use " inside string, you have to wrap it in ' marks
console.log("canConcatinate:", canConcatinate);
console.log("canIncludeSpeechMarks:", canIncludeSpeechMarks);
canIncludeSpeechMarks = "Mark said, to the 'thing', \"Hello!\""; // If you want to use ' and " inside of a string, you can to use \" for the " marks
console.log("canIncludeSpeechMarks:", canIncludeSpeechMarks);

// ATTRIBUTES
var someVeryLongString =
  "hello how are you this is my life story once upon a time i...";
var longStringLength = someVeryLongString.length;
console.log("someVeryLongString:", someVeryLongString);
console.log("longStringLength:", longStringLength);

// METHODS
var bread = "bread";
var startPos = 0; // Remember, programmers count form 0, so this is 'b' in 'bread'
var endPos = 3; // Remember, the length of a slice equals endPos - startPos, so in this case, 3
var slicedBread = bread.slice(startPos, endPos);

console.log("bread:", bread);
console.log("slicedBread:", slicedBread);
console.log("bread.toUpperCase():", bread.toUpperCase());

// console.log (a.k.a the log function, on console), is also a method! On the console object.

/*
Important note about methods.
Please recognise the pattern of THING.FUNCTION
Methods, are just functions ON things, like strings
You still call them the same way as a function, with () and possibly some args (a, b, ...)
You can might get a value from these methods, like a function

They almost always are used like this:
  thing.someFunc(someArg, someArg2) // no return value
or this:
  var someValue = thing.someFunc(someArg, someArg2) // multiple args
or this:
  var someValue = thing.someFunc() // no args
*/

// MODULES
var pi = Math.PI; // Module have constants
console.log("Math.PI:", pi);
// and functions, they are called like methods, because even modules are objects in JS
console.log("round down", Math.floor(pi));
console.log("round to nearest (up or down)", Math.round(pi));
console.log("round up (useful in D&D)", Math.ceil(pi));

// FUNCTIONS
// Caling functions is JUST liked calling methods on objects, but you don't have an object
// e.g if you have a function called 'doTheThingWithTheseThings' and it takes two things, and returns something
// you use it like: var result = doTheThingWithTheseThings(thing1, thing2)
// Very similar to methods, right?

// Let's create a few functions

function getNukeCodes() {
  return "someSuperSecretPassword";
}
// arguably the most basic type of function
// takes no arguments, returns something

var code = getNukeCodes();
console.log("code:", code);

function launchNukes(code) {
  console.log("using code '" + code + "' uh oh, it's the end of the world!");
}
// another basic function
// takes 1 argument, returns nothing
// usually modifys some data somewhere (like printing, or launching the nukes)

launchNukes(code);

function addThreeNumbers(a, b, c) {
  return a + b + c;
}
// a slightly more complex, but still simple function
// takes 3 arguments, returns something

var num1 = 5;
var num2 = 6;
var addResult = addThreeNumbers(num1, num2, 10); // You can pass arguments to a function as variables or primitivie values (nums or strings)
console.log("addResult:", addResult);

const robot = {
  x: 0,
  y: 0,
}; // This is an object, everything in JS is an object, and we can create new ones ourselves
// For now just think of this as:
// let robotX = 0;
// let robotY = 0;
// Objects let us package up data (and methods) into useful containers, which we can modify and pass around

function moveTheRobot() {
  robot.x++; // Remember 'thing++' just means 'thing = thing + 1'
  // So this is changing the x value in 'robot' to 'robot.x + 1'
  // It's moving the robot along the x axis
}
// It's worth noting, that this function doesn't take anything, or return anything
// but it is modifying an object that lies outside of it
// functions can access variables and objects OUTSIDE of their scope (the {})
// These sorts of functions, might seem simple, because they take no args, and return nothing
// But it's usually modifying some data somewhere
// And because we can't see that immedidately being returned, it can lead to some spicy situations
// In my opinion, it would be cleaner to have this as a method on a robot object, calling it like:
// robot.move()
// or even passing the robot state to the function, and having it return a new robot state
// var newRobot = moveTheRobot(robot);
// (will learn more about this style with the advanced functions topic)

console.log("robot.x:", robot.x);
moveTheRobot();
console.log("robot.x:", robot.x);

// BOOLS (ONLY 2 VALUES)
var jamesIsABoy = true;
var susieIsAPepega = false;

// BOOLEAN OPERATIONS
/*
NOT   |
-------------
true  | false
-------------
false | true
*/
console.log("!true", !false);
console.log("!false", !true);
/*
Inverting commparisons operations with NOT
!(x < y)   ===  x >= y
!(x <= y)  ===  x > y
!(x > y)   ===  x <= y
!(x >= y)  ===  x < y
*/

/*
AND   | true  | false
---------------------
true  | true  | false
---------------------
false | false | false
*/
console.log("true && true", true && true);
console.log("true && false", true && false);
console.log("false && true", false && true);
console.log("false && false", false && false);
/*

OR    | true  | false
---------------------
true  | true  | true
---------------------
false | true  | false
*/
console.log("true || true", true || true);
console.log("true || false", true || false);
console.log("false || true", false || true);
console.log("false || false", false || false);

/*
DE MORGAN'S RULE
!(x || y)  ===  !(x) && !(y)
!(x && y)  ===  !(x) || !(y)
*/

function myBooleanIf(boolean) {
  if (boolean) {
    return true;
  } else {
    return false;
  }
}
// is the same as:
function myBooleanIf(boolean) {
  if (boolean) {
    return true;
  }
  return false;
}
// is the same as:
function myBooleanIf(boolean) {
  return boolean;
}

function myNestedIf(boolean1, boolean2) {
  if (boolean1) {
    if (boolean2) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
// is the same as:
function myNestedIf(boolean1, boolean2) {
  if (boolean1) {
    if (boolean2) {
      return true;
    }
    return false;
  }
  return false;
}
// is the same as:
function myNestedIf(boolean1, boolean2) {
  return boolean1 && boolean2;
}

function myChainedIf(boolean1, boolean2) {
  if (boolean1) {
    return true;
  }
  if (boolean2) {
    return true;
  }
  return false;
}
// is the same as:
function myChainedIf(boolean1, boolean2) {
  return boolean1 || boolean2;
}
