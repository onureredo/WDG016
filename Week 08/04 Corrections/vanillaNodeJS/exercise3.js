import { readFile } from 'fs/promises';

async function readFromFile() {
  try {
    const data = await readFile('test.html', 'utf8');
    console.log('File content:', data);
  } catch (error) {
    console.log('Error reading file:', error);
  }
}

readFromFile();
