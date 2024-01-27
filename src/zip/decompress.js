import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";
const decompress = async () => {
    const fileOutputName = "fileToCompress.txt";
    const dirName = "files";
    const fileName = "archive.gz";
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, dirName, fileName);
    const fileOutputPath = path.join(__dirname, dirName, fileOutputName);
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(fileOutputPath);
    const guzip = zlib.createGunzip();
    
    readStream.pipe(guzip).pipe(writeStream);
  
    writeStream.on("finish", () => {
      console.log(`File decompressed `);
    });
  
    readStream.on("error", (error) => {
      console.error(`Error reading file: ${error.message}`);
    });
  
    writeStream.on("error", (error) => {
      console.error(`Error writing compressed file: ${error.message}`);
    });
   
};

await decompress();