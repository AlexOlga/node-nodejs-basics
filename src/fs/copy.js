import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const sourceFolder = "files";
  const destinationFolder = "files_copy";
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const sourceFolderPath = path.join(__dirname, sourceFolder);
  const destinationFolderPath = path.join(__dirname, destinationFolder);

  if (!existsSync(sourceFolderPath) || existsSync(destinationFolderPath)) {
    console.error("FS operation failed");
    return;
  }
  await fs.mkdir(destinationFolderPath, { recursive: true });
  const files = await fs.readdir(sourceFolderPath);
  for (const file of files) {
    const sourceFilePath = path.join(sourceFolderPath, file);
    const destinationFilePath = path.join(destinationFolderPath, file);
    fs.copyFile(sourceFilePath, destinationFilePath);
  }
};

await copy();
