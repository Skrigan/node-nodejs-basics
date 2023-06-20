import { readdir } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const srcPath = path.join(__dirname, "files");
  try {
    const files = await readdir(srcPath);
    for (const file of files) {
      console.log(file);
    }
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
