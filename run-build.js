const { exec } = require("child_process");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Run build to project directory? ", async (name) => {
  await exec("npm run build", { cwd: `projects/${name}` });
  readline.close();
});
