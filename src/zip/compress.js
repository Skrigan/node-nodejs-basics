import path from "node:path";
import { fileURLToPath } from "url";
import zlib from "zlib";
import { createReadStream, createWriteStream } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const rs = createReadStream(
    path.join(__dirname, "files", "fileToCompress.txt")
  );
  const ws = createWriteStream(path.join(__dirname, "files", "archive.gz"));
  ws.on("error", (err) => {
    throw new Error("Failed to write file:", err);
  });

  const gZip = zlib.createGzip();
  rs.pipe(gZip).pipe(ws);
};

await compress();
