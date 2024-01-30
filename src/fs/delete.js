import fs from 'fs/promises';
import { existsSync } from "fs";
import path from 'path';
import { fileURLToPath } from "url";
const remove = async () => {
    const fileName = 'fileToRemove.txt';
    const dirName='files';
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, dirName, fileName);
   
    if (!existsSync(filePath)) {
        console.error("FS operation failed");
        return;
      }
     fs.rm(filePath);  
};

await remove();