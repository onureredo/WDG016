function isHere(name) {
  document.querySelector('.names').innerHTML += name + ' is here <br />';
}

isHere('Bob');
isHere('John');
isHere('Sarah');

// w/ map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const names = ['Bob', 'John', 'Sarah'];

names.map(
  (name) =>
    (document.querySelector('.names').innerHTML += `${name} is here <br />`)
);
