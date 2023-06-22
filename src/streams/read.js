import { fileURLToPath } from "url";
import path from "node:path";
import { createReadStream } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const stream = createReadStream(
    path.join(__dirname, "files", "fileToRead.txt"),
    { encoding: "utf-8" }
  );
  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
  stream.on("error", (err) => {
    throw new Error("Failed to read file:", err);
  });
};

await read();
