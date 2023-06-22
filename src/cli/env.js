const parseEnv = () => {
  const filteredEnvEntries = Object.entries(process.env).filter((couple) => {
    if (couple[0].slice(0, 4) === "RSS_") {
      return true;
    }
    return false;
  });
  const res = [];
  filteredEnvEntries.forEach((couple) => {
    res.push(`${couple[0]}=${couple[1]}`);
  });
  console.log(res.join("; "));
};

parseEnv();
