// CONSOLE

// console.log('Hey');
// console.warn('WARNING');
// console.error('ERROR');
// console.log(typeof console);

// VARIABLES

// var x = 'something';
// x = 'something else';
// console.log(x);

// const x = 'something';
// x = 'something else';
// console.log(x);

// let name = 'Thomas';
// name = 'not Thomas';
// console.log(name);

// const students = ['Tarek', 'Hajar', 'Sebastian', 'Renke'];
// students.push('Thomas');
// console.log(students);

// CONDITIONS

// const condition = 1;

// if (condition) {
//   console.log('condition is true');
// } else {
//   console.log('condition is false');
// }

const firstCondition = 0;
// const secondCondition = 0;

// if (firstCondition && secondCondition) {
//   console.log('Both conditions are true');
// } else if (firstCondition) {
//   console.log('only first condition is true');
// } else if (secondCondition) {
//   console.log('only second condiiton is true');
// } else {
//   console.log('Neither first, nor second conditions are true');
// }

// firstCondition ? console.log('c is true') : console.log('c is false');

// const pokemon = 'Squirtle';

// switch (pokemon) {
//   case 'Mewtu':
//     console.log('Mewtu is the coolest one!');
//     break;
//   case 'Pikachu':
//     console.log('Pikachu is sweet');
//     break;
//   case 'Dragoran':
//     console.log('Dragoran is cool');
//     break;
//   case 'Magikarp':
//   case 'Squirtle':
//     console.log('wow... water pokemon');
//     break;
//   default:
//     console.log('Your pokemon is nice');
// }

// ARRAYS
// const students = ['Ali', 'Sebastian', 'Sabrina', 'Martina'];
// students.push('Thomas');
// students.pop();
// console.log(students);

// students.forEach(function () {
//   console.log('callback was called');
// });

// students.forEach(function (el, i, arr) {
//   console.log(el, 'is here and index is:', i, 'and exist in', arr);
// });

// students.forEach((el, i, arr) =>
//   console.log(el, 'is here and index is:', i, 'and exist in', arr)
// );

// students.forEach((student) => console.log(student));

// FUNCTIONS

// function greet() {
//   console.log('Hello and welcome');
// }

// greet();

// function add(a, b) {
//   console.log(a + b);
// }

// add(1, 3);
// add(5, 10);

// const add = function (a, b) {
//   return a + b;
// };

// console.log(add(5, 10));

// const divide = (x, y) => x / y;
// console.log(divide(100, 10));

// const question = 'What is the capital of France?';
// const options = ['Lyon', 'Paris', 'Lille'];
// const correctAnswer = 'Paris';

// function checkAnswer(userAnswer) {
//   if (userAnswer === correctAnswer) {
//     console.log('correct');
//   } else {
//     console.log('Not correct. The correct answer is: ' + correctAnswer);
//   }
// }

// console.log(question);
// options.forEach((el) => console.log(el));

// checkAnswer('Paris');

// const checkAge = (age) => {
//   if (age >= 18 && age <= 30) {
//     return 'Welcome to the Party!';
//   } else if (age > 30) {
//     return "You're too old :(";
//   } else {
//     const remainingYears = 18 - age;
//     return `You need to wait ${remainingYears} year(s) to be 18`;
//   }
// };

// console.log(checkAge(31));

// LOOPS

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let n = 5;

// while (n < 5) {
//   console.log(n);
//   n++;
// }

// let n = 6;

// do {
//   console.log(n);
//   n++;
// } while (n < 5);

// let friendList = ['Clara', 'Sidhdhali', 'Thomas', 'Renke'];

// for (let i = 0; i < friendList.length; i++) {
//   console.log(`Hello ${friendList[i]}, you are invited to my birthday party`);
// }

let name = 'Frank';

if (name === 'Frank') {
  let name = 'Clara';
  console.log('Blocked Scope:', name);
}

console.log('Global Scope:', name);
