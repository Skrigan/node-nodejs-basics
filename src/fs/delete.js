import { unlink } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  try {
    await unlink(path.join(__dirname, "files", "fileToRemove.txt"));
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
