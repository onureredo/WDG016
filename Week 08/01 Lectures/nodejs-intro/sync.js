import fs from 'fs';

console.log('Starting synchronous file read');

try {
  const data = fs.readFileSync('something.txt', 'utf-8');
  console.log(data);
  console.log('Finished synchronous file read');
} catch (error) {
  console.log('Error reading file', error);
}
