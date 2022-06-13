const fs = require("fs-extra");
const { execSync } = require("child_process");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const projectAdded = (path) => {
  fs.copy("projects/scaffolding", `projects/${path}`, async (err) => {
    if (err) {
      return console.error(err);
    } else {
      try {
        const obj = await fs.readJson(`./projects/${path}/package.json`);
        obj.name = path;
        await fs.writeJson(`./projects/${path}/package.json`, obj);
        await fs.outputFile(
          `./projects/${path}/.env`,
          `VUE_APP_NAME=${path}\r\nVUE_APP_PORT=8090`
        );
        await execSync("npm start");
        readline.close();
      } catch (err) {
        console.error(err);
      }
    }
  });
};

readline.question("Added to Projects name? ", (name) => {
  projectAdded(name);
});
