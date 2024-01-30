import fs from 'fs/promises';
import { existsSync } from "fs";
import path from 'path';
import { fileURLToPath } from "url";

const rename = async () => {
    const sourceFileName = 'wrongFilename.txt';
    const destinationFileName = 'properFilename.md';
    const dirName='files';
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const sourceFilePath = path.join(__dirname, dirName, sourceFileName);
    const destinationFilePath = path.join(__dirname, dirName, destinationFileName);

    if (!existsSync(sourceFilePath) || existsSync(destinationFilePath)) {
        console.error("FS operation failed");
        return;
      }
     fs.rename(sourceFilePath, destinationFilePath);    
};

await rename();