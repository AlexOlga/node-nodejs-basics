const parseArgs = () => {
  const allVariables = process.argv;
  const substr = "--";
  const filterVariables = {};
  allVariables.forEach((key, index) => {
    if (key.startsWith(substr)) {
      filterVariables[key.slice(2)] = allVariables[index + 1];
    }
  });
  const output = Object.entries(filterVariables)
    .map(([key, value]) => `${key.slice(2)} is ${value}`)
    .join(", ");
  console.log(output);
};

parseArgs();
