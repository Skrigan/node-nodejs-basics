import { open } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
  try {
    const file = await open(path.join(__dirname, "files", "fresh.txt"), "wx");
    await file.writeFile("I am fresh and young");
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
