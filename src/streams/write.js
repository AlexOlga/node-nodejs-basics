import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
const write = async () => {
    const fileName = "fileToWrite.txt";
    const dirName = "files";
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, dirName, fileName);
    const output = fs.createWriteStream(filePath);
    process.stdin.on("data", function (chunk) {    
      output.write(chunk);
    });
   
};

await write();