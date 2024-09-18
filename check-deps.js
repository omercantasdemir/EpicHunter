const { execSync } = require("child_process");

const dependencies = ["npm-run-all"];

dependencies.forEach((dep) => {
  try {
    require.resolve(dep);
    console.log(`${dep} is already installed.`);
  } catch (e) {
    console.log(`${dep} is not installed. Installing...`);
    execSync(`npm install ${dep}`, { stdio: "inherit" });
  }
});
