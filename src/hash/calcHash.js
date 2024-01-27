import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const calculateHash = async () => {
  const fileName = "fileToCalculateHashFor.txt";
  const dirName = "files";
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, dirName, fileName);

  const hash = crypto.createHash("sha256");
  const stream = fs.createReadStream(filePath);
  stream.on("data", (data) => {
    hash.update(data);
  });

  stream.on("end", () => {
    const fileHash = hash.digest("hex");
    console.log(`SHA256 Hash: ${fileHash}`);
  });
};

await calculateHash();
