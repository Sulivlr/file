import {promises as fs} from 'fs';


const fileName = './2024-11-30T16:09:07.905Z.txt';

const date = new Date();

const dataMessage = {
  message: 'Hello Timur!',
  dateTime: date.toISOString(),
}

const run = async () => {
  try {
    await fs.writeFile(fileName, JSON.stringify(dataMessage, null, 2), 'utf8');
  } catch (error) {
    console.error(error)
  }
};

void run();