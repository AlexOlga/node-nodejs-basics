import child_process from "child_process";

import path from "path";
import { fileURLToPath } from "url";

const fileName = "script.js";
const dirName = "files";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, dirName, fileName);

const spawnChildProcess = async (args) => {
  const child = child_process.fork(filePath, args);

  child.on("message", (data) => console.log(`Message to parent: ${data}`));

  process.stdin.on("data", (data) => {
    child.send(data);
  });
};
// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
