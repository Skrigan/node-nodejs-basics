import { rename as fsRename } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  try {
    const dir = path.join(__dirname, "files");
    await fsRename(path.join(dir, 'wrongFilename.txt'), path.join(dir, 'properFilename.md'))
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
