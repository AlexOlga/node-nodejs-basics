const parseEnv = () => {
    // Write your code here 
    const allVariables = process.env;
    const substr='RSS_';
    const filterVariables = Object.keys(allVariables)
    .filter(key => key.startsWith(substr))
    .reduce((acc, key) => {
      acc[key] = allVariables[key];
      return acc;
    }, {});
    const output = Object.entries(filterVariables)
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(output);
};

parseEnv();