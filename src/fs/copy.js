import { access, mkdir, readdir, copyFile  } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {

  try {
    await access(path.join(__dirname, "files_copy"));
    throw new Error();
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        const srcPath = path.join(__dirname, "files");
        const destPath = path.join(__dirname, "files_copy");
        const files = await readdir(srcPath);
        await mkdir(destPath);
        for (const file of files) {
          await copyFile(path.join(srcPath, file), path.join(destPath, file));
        }
      } catch {
        throw new Error("FS operation failed");
      }
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await copy();
