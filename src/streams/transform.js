import { Transform } from "stream";

const transform = async () => {
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split("").reverse().join("") + "\n";
      this.push(reversed);
      callback();
    },
  });

  process.stdin.pipe(transform).pipe(process.stdout);
};

await transform();
