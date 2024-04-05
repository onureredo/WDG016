let myVar = 4;

function titi() {
  let myVar = 5;
  console.log('Inner Scope:', myVar);
}

titi();

console.log('Global Scope:', myVar);
