import { Worker, workerData, isMainThread } from "worker_threads";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const fileName = "worker.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workerPath = path.join(__dirname, fileName);

const performCalculations = async () => {
  const numCPUs = os.cpus().length;

  const workers = [];
  const results = [];
  for (let i = 0; i < numCPUs; i++) {
    const worker = new Worker(workerPath);
    workers.push(worker);
    worker.postMessage(i + 10);
    worker.on("message", (result) => {
      results.push(result);
      console.log(result);
    });
    worker.on("error", () => {
      const result = { status: "error", data: null };
      results.push(result);
      console.log(result);
    });
  }
};

await performCalculations();
