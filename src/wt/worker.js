import { Worker, isMainThread, parentPort, workerData } from "worker_threads";
// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (status, data) => {
  parentPort.postMessage({ status, data });
};
parentPort.on("message", (data) => {
  if (data && typeof data === "number") {
    const result = nthFibonacci(data);
    sendResult("resolved", result);
  } else {
    sendResult("error", null);
  }
});
