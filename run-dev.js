const { exec } = require("child_process");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Run develop project name? ", (name) => {
  exec("npm run serve", { cwd: `projects/${name}` });
});
