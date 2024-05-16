import fs from 'fs';

// CREATE
function createFile() {
  fs.writeFile('test.html', 'hello', function (error) {
    if (error) {
      console.log('Error writing file:', error);
    } else {
      console.log('File written successfully');
    }
  });
}

createFile();

// READ
function readFromFile() {
  fs.readFile('test.html', 'utf8', function (error, data) {
    if (error) {
      console.log('Error reading file:', error);
    } else {
      console.log('File content:', data);
    }
  });
}

readFromFile();
