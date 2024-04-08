// Named Functions
function greetUser(username) {
  //   console.log(`Hello, ${username}`);
  return `Hello, ${username}`;
}

// greetUser('Daniel');
// console.log(greetUser('Somebody'));

// Anonymous & Arrow Functions (ES5 - ES6)
document.querySelector('body').addEventListener('click', function () {
  //   console.log('clicked');
  //   alert('clicked');
});

document.querySelector('body').addEventListener('click', () => {
  console.log('clicked');
  alert('clicked');
});

const add = function (a, b) {
  return a + b;
};

// console.log(add(10, 100));

const divide = (a, b) => a / b;
// console.log(divide(100, 10));

// RETURN Statement
function nameOfMyFunction() {
  return 'abc';
  //   console.log('abc');
}

const returnOfMyFunction = nameOfMyFunction();

// console.log(returnOfMyFunction);

// PARAMETERS
function mulitply(value1, value2) {
  return value1 * value2;
}

// console.log(mulitply(2, 2));

function hello(name = 'John Doe') {
  return `Hello ${name}`;
}

// console.log(hello());
// console.log(hello('Bob'));
