const fs = require("fs-extra");
const exec = require("child_process").exec;
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const addedProject = (path) => {
  fs.copy("projects/scaffolding", `projects/${path}`, (err) => {
    if (err) {
      return console.error(err);
    } else {
      exec(`cd projects/${path} && npm i`);
    }
  });
};

readline.question("Projects name? ", (name) => {
  console.log(`Use projects folder name to ${name}`);
  addedProject(name);
  readline.close();
});
