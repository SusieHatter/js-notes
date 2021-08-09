/*
+++ SPLITTER FUNCTION +++
1. create a function which takes a string 
3. splits it in half and 
3.puts the last half in front and 
4.return that.
5. Print. 
6. test with 2 strings. 
*/

// function splitter(string) {
//   var halfString = string.length / 2;
//   return string.slice(halfString) + string.slice(0, halfString);
// }

// var result = splitter("crocodile");
// console.log(result);
// console.log(splitter("elephant"));

/*
+++ CHECK EVEN (not EVENT) +++
- create a function which takes two numbers
- if the sum of those numbers is even, return the string 'EVEN'
- otherwise, return the string 'ODD'
*/

// function checkEven(a, b) {
//   var operation = (a + b) % 2;
//   if (operation === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// var a = 1;
// var b = 7;

// console.log(a, b, checkEven(a, b));
// console.log(1, 1, checkEven(1, 1));
// console.log(1, 2, checkEven(1, 2));
// console.log(-3, 1007, checkEven(-3, 1007));
// console.log(-2, -2, checkEven(-2, -2));
// console.log(-2, -1, checkEven(-2, -1));

/*
+++ TRAFFIC LIGHTS +++
- create a function 'nextLight'
- takes a LIGHT
- return the next traffic LIGHT
*/

// const RED_LIGHT = "RED_LIGHT";
// const AMBER_LIGHT = "AMBER_LIGHT";
// const GREEN_LIGHT = "GREEN_LIGHT";
// const FLASHING_AMBER_LIGHT = "FLASHING_AMBER_LIGHT";

// function nextLight(light) {
//   if (light === RED_LIGHT) {
//     return AMBER_LIGHT;
//   } else if (light === AMBER_LIGHT) {
//     return GREEN_LIGHT;
//   } else if (light === GREEN_LIGHT) {
//     return FLASHING_AMBER_LIGHT;
//   } else if (light === FLASHING_AMBER_LIGHT) {
//     return RED_LIGHT;
//   } else {
//     throw Error("invalid light! " + "FUCKING RETARD");
//   }
// }

// console.log(RED_LIGHT, nextLight(RED_LIGHT));
// console.log(AMBER_LIGHT, nextLight(AMBER_LIGHT));
// console.log(GREEN_LIGHT, nextLight(GREEN_LIGHT));
// console.log(FLASHING_AMBER_LIGHT, nextLight(FLASHING_AMBER_LIGHT));
// console.log("PURPLE_LIGHT", nextLight("PURPLE_LIGHT"));

/*
create the bmiCalculator example
bmi = weight / height ^ 2 <-- NOT VALID JS, JUST THE FORMULA

return TWO values. the bmi and a descriptive string (like underweight, normal, overweight, obese)

// example of returning multiple values from function
function myFunc() {
    return [value1, value2]
}
*/

// function bmiCalculated(weight, height) {
//   var bmi = Math.round(weight / Math.pow(height, 2));
//   if (bmi > 35) {
//     return [bmi, "you are morbidly obese"];
//   } else if (bmi > 30) {
//     return [bmi, "you are obese"];
//   } else if (bmi > 25) {
//     return [bmi, "you are normal over-weight"];
//   } else if (bmi > 20) {
//     return [bmi, "you are normal weight"];
//   } else if (bmi <= 20) {
//     return [bmi, "you are normal underweight"];
//   }
// }

// console.log("Your BMI is ", bmiCalculated(42, 1.6));
// console.log("Your BMI is ", bmiCalculated(180, 1.8));
// console.log("Your BMI is ", bmiCalculated(225, 1.4));
// console.log("Your BMI is ", bmiCalculated(15, 1.9));
// console.log("Your BMI is ", bmiCalculated(500, 1.7));
// console.log("Your BMI is ", bmiCalculated(70, 1.8));
// console.log("Your BMI is ", bmiCalculated(60, 1.6));

/*
create a function called average which takes an Average Type, and a list of numbers
- if type == 'mode' calculate the mode,
- same for the other types
- return the value

*/

// Average Types
// const MODE = "MODE";
// const MEDIAN = "MEDIAN";
// const MEAN = "MEAN";

// function mean(numbers) {
//   var total = 0,
//     i;
//   for (i = 0; i < numbers.length; i += 1) {
//     total += numbers[i];
//   }
//   return total / numbers.length;
// }

// function median(numbers) {
//   var median = 0,
//     numsLen = numbers.length;
//   numbers.sort();

//   if (numsLen % 2 === 0) {
//     median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
//   } else {
//     median = numbers[(numsLen - 1) / 2];
//   }
//   return median;
// }

// function mode(numbers) {
//   var modes = [],
//     count = [],
//     i,
//     number,
//     maxIndex = 0;

//   for (i = 0; i < numbers.length; i += 1) {
//     number = numbers[i];
//     count[number] = (count[number] || 0) + 1;
//     if (count[number] > maxIndex) {
//       maxIndex = count[number];
//     }
//   }

//   for (i in count)
//     if (count.hasOwnProperty(i)) {
//       if (count[i] === maxIndex) {
//         modes.push(Number(i));
//       }
//     }

//   return modes;
// }

// function average(type, numbers) {
//   if (type === MODE) {
//     return mode(numbers);
//   } else if (type === MEAN) {
//     return mean(numbers);
//   } else if (type === MEDIAN) {
//     return median(numbers);
//   }
// }

// console.log(MODE, [1, 2, 3, 3], average(MODE, [1, 2, 3, 3]));
// console.log(MEAN, [1, 1, 1, 1], average(MEAN, [1, 1, 1, 1]));
// console.log(MODE, [2, 1, 1, 2], average(MODE, [2, 1, 1, 2]));
// console.log(MEDIAN, [1, 2, 3, 4], average(MEDIAN, [1, 2, 3, 4]));
// console.log(MEAN, [3, 3, 3, 3], average(MEAN, [3, 3, 3, 3]));
// console.log(MEAN, [1, 2, 3, 5], average(MEAN, [1, 2, 3, 5]));

//

// function compatibility() {
//   var n = Math.random();
//   return Math.floor(n * 100) + 1;
// }

// var name1 = prompt("Write the name of your partner");
// var name2 = prompt("Write your name");

// alert(name1 + " " + name2 + " are " + compatibility() + "% compatible");

// function mommy() {
//   return Math.random();
// }

// function daddy() {
//   return Math.random();
// }

// function sex(person1, person2) {
//   return person1 + person2 * 10;
// }

// console.log(sex(sex(sex(daddy(), mommy()), mommy()), sex(mommy(), mommy())));

/* Build a chess board 8x8
func isValidMove(x, y) 
return true if its inside the board.*/

// function isInBetween(x, min, max) {
//   return x >= min && x < max;
// }

// function isValidMove(x, y) {
//   return isInBetween(x, 0, 8) && isInBetween(y, 0, 8);
// }

// console.log("Invalid moves");
// console.log(isValidMove(-5, -3));
// console.log(isValidMove(-2, 1));
// console.log(isValidMove(3, -5));
// console.log(isValidMove(8, 7));
// console.log(isValidMove(6, 8));
// console.log(isValidMove(8, 8));
// console.log("Valid moves");
// console.log(isValidMove(5, 3));
// console.log(isValidMove(0, 0));
// console.log(isValidMove(7, 7));

/*
1. divisinle by 4
2. divide by 100
3. divide by 400*/

// function isLeap(year) {
//   var divisibleBy4 = year % 4 === 0;
//   var divisibleBy100 = year % 100 === 0;
//   var divisibleBy400 = year % 400 === 0;
//   if (divisibleBy4) {
//     if (divisibleBy100) {
//       if (divisibleBy400) {
//         return "Leap year.";
//       } else {
//         return "Not leap year.";
//       }
//     } else {
//       return "Leap year.";
//     }
//   } else {
//     return "Not leap year.";
//   }
// }

// function isLeap(year) {
//   var divisibleBy4 = year % 4 === 0;
//   var divisibleBy100 = year % 100 === 0;
//   var divisibleBy400 = year % 400 === 0;
//   if (divisibleBy4 && (!divisibleBy100 || divisibleBy400)) {
//     return "Leap year.";
//   }
//   return "Not leap year.";
// }

// console.log(isLeap(2000));
// console.log(isLeap(2011));
// console.log(isLeap(2012));
// console.log(isLeap(1900));

// var guestList = [
//   "Alice",
//   "Norman",
//   "Plutarch",
//   "Jazmin",
//   "Penelope",
//   "Portia",
//   "Ruben",
//   "Drake",
// ];
// var guestName = prompt("What is your name?");
// function checkList(guestName) {
//   if (guestList.includes(guestName)) {
//     alert("Welcome!");
//   } else {
//     alert("Sorry, maybe next time.");
//   }
// }

/* FIZZBUZZ:
1. PRINT 100 NUMBERS
2. MULTIPLES OF 3 PRINT FIZZ
3. MULTIPLES OF 5 PRINT BUZZ
4. MULTIPLES OF BOTH PRINT FIZZBUZZ*/

// function fizzBuzz(x) {
//   var multiplesOf3 = x % 3 === 0;
//   var multiplesOf5 = x % 5 === 0;
//   if (multiplesOf3 && multiplesOf5) {
//     return "FizzBuzz";
//   }
//   if (multiplesOf5) {
//     return "Buzz";
//   }
//   if (multiplesOf3) {
//     return "Fizz";
//   }
//   return x;
// }

// for (let x = 1; x <= 100; x++) {
//   console.log(fizzBuzz(x));
// }

// function whosPaying(names) {
//   var index = Math.floor(Math.random() * names.length);
//   var name = names[index];
//   return name + " is going to buy lunch today";
// }

// console.log(whosPaying(["Mizkif", "James", "Ana", "Perla"]);

// function rollDice(numSides) {
//   return Math.floor(Math.random() * numSides) + 1;
// }
// console.log(rollDice(4));
// console.log(rollDice(4));
// console.log(rollDice(4));
// console.log(rollDice(4));

// var names = ["Ana", "Paul", "Luis", "Lora"];
// console.log(names[0], names[1], names[2], names[3]);
// console.log(names[0]);
// console.log(names.length);
// names[names.length - 1]
/* 
CODE                                            MIN VAL   MAX VAL
----------------------------------------------------------------------------
Math.random()                                   0         .99999
Math.random() * 6                               0         5.9999
Math.floor(Math.random() * 6)                   0         5
Math.floor(Math.random() * 6) + 1               1         6
Math.floor(Math.random() * numSides) + 1        1         numSides
Math.floor(Math.random() * names.length)        0         names.length - 1
*/

/* 
1. start the song with 99 total bottles.
2. if number of bottles >= 1, go to 3, else go to line 6.
3. print the verse with number of bottles.
  - when 1 bottle is left the lyrics are different.
4. substract 1 from the number of bottles. 
5. go to 2.
*/
// const firstSentence = " bottles of beer on the wall, ";
// const secondSentence = " bottles of beer.";
// const thirdSentence = " Take one down and pass it around, ";
// const fourthSentence = " bottles of beer on the wall.";
// const lastSentence =
//   "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";

// function printVerse(numOfBottles) {
//   var oneMinus = numOfBottles - 1;
//   console.log(
//     numOfBottles +
//       firstSentence +
//       numOfBottles +
//       secondSentence +
//       thirdSentence +
//       oneMinus +
//       fourthSentence
//   );
// }

// var numOfBottles = 99;
// while (numOfBottles >= 1) {
//   printVerse(numOfBottles);
//   numOfBottles--;
// }
// console.log(lastSentence);

// for (var numOfBottles = 99; numOfBottles >= 1; numOfBottles--) {
//   printVerse();
// }

/*
1. Create a function takes a number, returns an array. 
E. g.: fibonacciGenerator(3), returns [0, 1, 1]
2. it should add the last element of the array and the previous one.
*/

// function fibonacci(n) {
//   var a = 0;
//   var b = 1;
//   var c;
//   for (var i = 0; i < n - 1; i++) {
//     c = a + b;
//     b = a;
//     a = c;
//   }
//   return a;
// }

// for (var i = 1; i <= 10; i++) {
//   console.log(fibonacci(i));
// }

// function fibonacciGenerator(n) {
//   var resultNumbers = [];
//   var a = 0;
//   resultNumbers.push(a);
//   var b = 1;
//   var c;
//   for (var i = 0; i < n - 1; i++) {
//     c = a + b;
//     b = a;
//     a = c;
//     resultNumbers.push(a);
//   }
//   return resultNumbers;
// }

// for (var i = 1; i <= 10; i++) {
//   console.log(fibonacciGenerator(i));
// }

// function add(num1, num2) {
//   return num1 + num2;
// }

// function substract(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// function modulo(num1, num2) {
//   return num1 % num2;
// }

// function power(num1, num2) {
//   return Math.pow(num1, num2);
// }

// function calculator(num1, num2, operator) {
//   return operator(num1, num2);
// }

// console.log(calculator(3, 4, add));
// console.log(calculator(8, 2, substract));
// console.log(calculator(0, 2, multiply));
// console.log(calculator(6, 2, divide));
// console.log(calculator(6, 3, modulo));
// console.log(calculator(2, 10, power));

// function HouseKeeper(name, age, yearsOfExperience, cleaningRepertoire) {
//   this.name = name;
//   this.age = age;
//   this.yearsOfExperience = yearsOfExperience;
//   this.cleaningRepertoire = cleaningRepertoire;
//   this.clean = function () {
//     console.log("cleaning in progress");
//   };
//   this.greet = function (otherHouseKeeper) {
//     console.log(`Hello, ${otherHouseKeeper.name}! My name is ${this.name}`);
//   };
// }

// var patrish = new HouseKeeper("Patrish", 65, 60, ["kitchen", "chimken"]);
// var carlo = new HouseKeeper("Carlo", 17, 12, ["bathroom", "lobby", "bedroom"]);
// carlo.greet(patrish);
// carlo.clean();

// var houseKeeper1 = {
//   name: "Carlo",
//   age: 17,
//   yearsOfExperience: 12,
//   cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
// };

// var houseKeeper2 = new HouseKeeper("james", 99, 0, ["nothing"]);

// var houseKeepers = [
//   new HouseKeeper("Susie", 29, 0, ["toilet"]),
//   new HouseKeeper("Susie", 29, 0, ["toilet"]),
//   new HouseKeeper("Susie", 29, 0, ["toilet"]),
//   new HouseKeeper("Susie", 29, 0, ["toilet"]),
//   new HouseKeeper("Susie", 29, 0, ["toilet"]),
//   new HouseKeeper("Susie", 29, 0, ["toilet"]),
//   new HouseKeeper("Susie", 29, 0, ["toilet"]),
//   new HouseKeeper("Susie", 29, 0, ["toilet"]),
//   new HouseKeeper("Susie", 29, 0, ["toilet"]),
//   new HouseKeeper("Susie", 29, 0, ["toilet"]),
//   new HouseKeeper("Susie", 29, 0, ["toilet"]),
//   new HouseKeeper("Susie", 29, 0, ["toilet"]),
//   new HouseKeeper("Susie", 29, 0, ["toilet"]),
// ];

// const narrate = console.log;

// function Person(name, cult) {
//   this.name = name;
//   this.cult = cult;
//   this.health = 10;

//   this.fight = function (other) {
//     switch (this.cult) {
//       case "satanic":
//         narrate(
//           `${this.name} grabs a knife and cuts through ${other.name}'s chest`
//         );
//         other.takeDamage(3);
//         break;
//       case "christian":
//         narrate(`${this.name} grabs a bible and smacks ${other.name}'s head`);
//         other.takeDamage(5);
//         break;
//       case "pikachurian":
//         narrate(
//           `${this.name} grabs a whip and lashes it against ${other.name}'s back`
//         );
//         other.takeDamage(1);
//         break;
//       default:
//         narrate("The room feels very tense.");
//         break;
//     }
//   };

//   this.takeDamage = function (amount) {
//     this.health -= amount;
//     narrate(`    ${this.name} takes ${amount} damage!`);
//     narrate(`    They now have ${this.health} health.`);
//     if (this.health <= 0) {
//       narrate(`    ${this.name} has fallen unconscious!`);
//     }
//   };
// }

// // cast
// var norman = new Person("Norman", "satanic");
// var yvanna = new Person("Yvanna", "christian");
// var odette = new Person("Odette", "pikachurian");

// // story
// narrate(
//   `Once upon a time, there were three mad people: ${norman.name}, ${yvanna.name}, and ${odette.name}.`
// );
// narrate(`They got into a room and instantly hated each other`);
// norman.fight(odette);
// odette.fight(norman);
// odette.fight(yvanna);
// yvanna.fight(norman);
// yvanna.fight(norman);
// narrate(`${norman.name} died!`);
// narrate(`Everything was chaos.`);

function logError(actual, expected) {
  console.error(
    `yours: ${JSON.stringify(actual)} !== expected: ${JSON.stringify(expected)}`
  );
}

function assertEq(actual, expected) {
  if (typeof expected === "object") {
    if (Object.keys(expected).length !== Object.keys(actual).length) {
      logError(actual, expected);
      return;
    }
    Object.keys(expected).forEach((k) => {
      if (actual[k] !== expected[k]) {
        logError(actual, expected);
        return;
      }
    });
    return;
  }
  if (actual !== expected) {
    logError(actual, expected);
  }
}

assertEq([1, 2, 3], [1, 2, 3]);
assertEq({ a: 1, b: 2 }, { b: 2, a: 1 });
assertEq("hey", "hey");
assertEq(true, true);
assertEq(3, 3);
/*












*/

/*
arr: an array of numbers
returns: the sum of the numbers
*/
function sum(arr) {
  let result = 0;
  for (const num of arr) {
    result += num;
  }
  return result;
}

// assertEq(sum([1, 2, 3]), 6);
// assertEq(sum([-5, -4, 4, 5]), 0);

// /*
// arr: an array of numbers, represented as strings
// returns: the max of the numbers
// */
function max(arr) {
  let max = -Infinity;
  for (const str of arr) {
    const num = parseInt(str);
    if (num > max) {
      max = num;
    }
  }
  return max;
}

// assertEq(max(["1", "2", "3"]), 3);
// assertEq(max(["-5", "-4", "4", "5"]), 5);
// assertEq(max(["-5", "-4"]), -4);

// /*
// arr: a 2d grid of numbers
// returns: the max of the numbers
// */
function gridMax(grid) {
  let max = -Infinity;
  for (const row of grid) {
    for (const num of row) {
      if (num > max) {
        max = num;
      }
    }
  }
  return max;
}

// assertEq(
//   gridMax([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
//   9
// );
// assertEq(
//   gridMax([
//     [-1, -2, -3],
//     [-4, -5, -6],
//     [-7, -8, -9],
//   ]),
//   -1
// );

// /*
// str: a string of numbers and letters
// returns: the number of times the letter 'e' is seen
// */

function whereIsE(str) {
  let count = 0;
  for (const char of str) {
    if (char === "e") {
      count++;
    }
  }
  return count;
}

assertEq(whereIsE("hey there"), 3);
assertEq(whereIsE("ho ho ho"), 0);
