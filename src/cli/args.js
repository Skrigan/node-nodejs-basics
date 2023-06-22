const parseArgs = () => {
  const args = process.argv.slice(2);
  const res = [];
  for (let i = 0; i < args.length; i = i + 2) {
    res.push(`${args[i]} is ${args[i + 1]}`);
  }
  console.log(res.join(", "));
};
parseArgs();
