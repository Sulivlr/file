import { promises as fs } from 'fs';

const fileName = './2024-11-30T16:09:07.905Z.txt';

const run = async () => {
  try {
    const content = await fs.readFile(fileName, 'utf-8');
    const parsed = JSON.parse(content.toString());
    console.log(parsed)
  } catch (error) {
    console.error(error);
  }
};

void run();
