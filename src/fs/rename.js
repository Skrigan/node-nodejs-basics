import { rename as fsRename, access } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  const dir = path.join(__dirname, "files");

  try {
    await access(path.join(dir, "properFilename.md"));
    throw new Error();
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await fsRename(
          path.join(dir, "wrongFilename.txt"),
          path.join(dir, "properFilename.md")
        );
      } catch {
        throw new Error("FS operation failed");
      }
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await rename();
