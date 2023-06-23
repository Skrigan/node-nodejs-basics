import { fileURLToPath } from "url";
import path from "path";
import cp from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const cpPath = path.join(__dirname, "files", "script.js");
  const childProcess = cp.fork(cpPath, args, {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });
  childProcess.stdout.on("data", (chunk) =>
    process.stdout.write(`Child process answer: ${chunk.toString()}`)
  );
  process.stdin.on("data", (chunk) =>
    childProcess.stdin.write(chunk.toString())
  );
};

spawnChildProcess([someArgument1, someArgument2, 3]);
