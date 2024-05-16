import { writeFile } from 'fs/promises';

async function createFile() {
  try {
    await writeFile('test.html', 'hello');
    console.log('File written successfully');
  } catch (error) {
    console.log('error writing file:', error);
  }
}

createFile();
