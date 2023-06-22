import { fileURLToPath } from "url";
import path from "node:path";
import { createWriteStream } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const stream = createWriteStream(
    path.join(__dirname, "files", "fileToWrite.txt"),
    {
      encoding: "utf-8",
    }
  );

  stream.on("error", (err) => {
    throw new Error("Failed to write file:", err);
  });

  process.stdin.on("data", (chunk) => stream.write(chunk));
};

await write();
