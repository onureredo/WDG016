function greet(name) {
  return function () {
    console.log(`Hello ${name}`);
  };
}

const greetThomas = greet('Thomas');

// greetThomas();

// console.log(Math.random());

// FUNCTIONS AS ARGUMENTS

function wrapperFunction(callback) {
  const condition = Math.random() > 0.5 ? true : false;
  console.log(condition);

  return condition && callback();
}

function callbackFunction() {
  console.log("I'm being called by the wrapper function");
}

// wrapperFunction(callbackFunction);

// FUNCTIONS AS RETURN STATEMENTS
function makeIncrementer(increment) {
  return function (value) {
    return value + increment;
  };
}

const incrementByOne = makeIncrementer(1);
const incrementByFive = makeIncrementer(5);
const incrementByTen = makeIncrementer(10);

// console.log(incrementByOne(10));
// console.log(incrementByFive(10));
// console.log(incrementByTen(10));

// HIGHER ORDER ARRAY METHODS
// MAP

const numbers = [5, 10, 15, 20];
const double = numbers.map((num) => num * 2);
// console.log(double);
// console.log(numbers);

// FILTER
const age = [16, 21, 34, 18, 15, 28];
const adults = age.filter((i) => i >= 18);

// console.log(adults);

// FIND
const numbersAgain = [3, 7, 11, 8, 15, 2];
const firstTwoDigit = numbersAgain.find((number) => number > 10);
// console.log(firstTwoDigit);

// REDUCE
const nummers = [5, 10, 15, 20, 25];
const total = nummers.reduce((acc, index) => acc + index, 10);
console.log(total);
