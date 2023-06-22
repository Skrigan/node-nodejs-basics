import { readFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const srcPath = path.join(__dirname, "files", "fileToRead.txt");
  try {
    console.log(await readFile(srcPath, { encoding: "utf8" }));
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
