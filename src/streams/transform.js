import { Transform } from "stream";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      // Reverse the text and push it to the output
      const reversedText = chunk.toString().split("").reverse().join("");
      callback(null, reversedText + "\n");
    },
  });
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
