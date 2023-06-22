import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  try {
    const fileData = await readFile(
      path.join(__dirname, "files/fileToCalculateHashFor.txt"), { encoding: "utf8" }
    );
    const hash = createHash("sha256").update(fileData).digest("hex");
    console.log(hash);
  } catch {
    throw new Error("FS operation failed");
  }
};

await calculateHash();
