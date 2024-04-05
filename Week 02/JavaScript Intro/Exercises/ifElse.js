function greaterNum(num1, num2) {
  if (num1 > num2) {
    return `${num1} is greater than ${num2}`;
  } else if (num1 < num2) {
    return `${num2} is greater than ${num1}`;
  } else {
    return 'numbers are even';
  }
}

const result = greaterNum(5, 10);
console.log(result);

// -----------------------------------------------------------------
function greaterNum(num1, num2) {
  switch (true) {
    case num1 > num2:
      console.log(`${num1} is greater than ${num2}`);
      break;
    case num1 < num2:
      console.log(`${num2} is greater than ${num1}`);
      break;
    default:
      console.log('numbers are even');
  }
}

greaterNum(5, 5);

// The switch statement evaluates the expression in parentheses and then executes the statements associated with the case that matches the resulting value. When we use true as the expression, it means that the case statement will be evaluated based on whether the expression is truthy or falsy.
