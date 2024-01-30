import fs from 'fs/promises';
import { existsSync } from "fs";
import path from 'path';
import { fileURLToPath } from "url";
const list = async () => {
    const folderName = "files";
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(__dirname, folderName);
     
    if (!existsSync(folderPath) ) {
      console.error("FS operation failed");
      return;
    }    
    const files = await fs.readdir(folderPath);
    for (const file of files) {
      console.log(file);
    }
};

await list();