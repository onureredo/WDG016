import fs from 'fs';

console.log('Starting asynchronous file read');

fs.readFile('somethingg.txt', 'utf8', (error, data) => {
  if (error) {
    return console.log('Error reading file:', error);
  }
  console.log(data);
  console.log('Finished reading file asynchronously');
});

console.log('Continuing with other operations');
