import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Buffer } from "node:buffer";

const DIR_NAME = "files";
const FILE_NAME = "fresh.txt";
const CONTENT = "I am fresh and young";

const create = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, DIR_NAME, FILE_NAME);
  if (fs.existsSync(filePath)) {
    console.error("FS operation failed");
    return;
  }
  const data = Buffer.from(CONTENT);
  return fs.promises.writeFile(filePath, data);
};

await create();
