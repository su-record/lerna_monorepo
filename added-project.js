const fs = require("fs-extra");
const { execSync } = require("child_process");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const addedProject = (path) => {
  fs.copy("projects/scaffolding", `projects/${path}`, async (err) => {
    if (err) {
      return console.error(err);
    } else {
      try {
        const obj = await fs.readJson(`./projects/${path}/package.json`);
        obj.name = path;
        await fs.writeJson(`./projects/${path}/package.json`, obj);
        await fs.outputFile(`./projects/${path}/.env`, `VUE_APP_NAME=${path}`);
        await execSync("npm start");
        readline.close();
      } catch (err) {
        console.error(err);
      }
    }
  });
};

readline.question("Projects name? ", (name) => {
  console.log(`Use projects folder name to ${name}`);
  addedProject(name);
});
