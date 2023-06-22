import path from "node:path";
import { fileURLToPath } from "url";
import zlib from "zlib";
import { createReadStream, createWriteStream } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const rs = createReadStream(path.join(__dirname, "files", "archive.gz"));
  const ws = createWriteStream(
    path.join(__dirname, "files", "fileToCompress.txt")
  );

  const gZip = zlib.createGunzip();
  rs.pipe(gZip).pipe(ws);
};

await decompress();
