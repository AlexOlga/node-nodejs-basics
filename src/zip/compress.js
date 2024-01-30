import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";
const compress = async () => {
  const fileName = "fileToCompress.txt";
  const dirName = "files";
  const fileOutputName = "archive.gz";
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, dirName, fileName);
  const fileOutputPath = path.join(__dirname, dirName, fileOutputName);
  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(fileOutputPath);
  const gzip = zlib.createGzip();
  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(`File compressed `);
  });

  readStream.on("error", (error) => {
    console.error(`Error reading file: ${error.message}`);
  });

  writeStream.on("error", (error) => {
    console.error(`Error writing compressed file: ${error.message}`);
  });
};

await compress();
