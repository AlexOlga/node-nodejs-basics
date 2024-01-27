import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
const read = async () => {
    const fileName = "fileToRead.txt";
    const dirName = "files";
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, dirName, fileName);
    const readableStream =fs.createReadStream(filePath);
    readableStream.on('data', chunk => process.stdout.write(chunk));
    readableStream.on('error', error => console.log('Error', error.message));
};

await read();