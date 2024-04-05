// Get hours and minutes, and convert them to strings
const hours = new Date().getHours().toString().padStart(2, '0'); // Ensures the hours have 2 digits
const minutes = new Date().getMinutes().toString().padStart(2, '0'); // Ensures the minutes have 2 digits

// Log the time in hh:mm format
console.log(`${hours}:${minutes}`);

// Get day, month, and year, and convert day and month to strings
const day = new Date().getDate().toString().padStart(2, '0'); // Ensures the day has 2 digits
const month = (new Date().getMonth() + 1).toString().padStart(2, '0'); // +1 because months are zero-indexed
const year = new Date().getFullYear();

console.log(`${day}.${month}.${year}`);
