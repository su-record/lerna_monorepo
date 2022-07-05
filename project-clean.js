const fs = require("fs");
const { exec } = require("child_process");
const file = ["package-lock.json", "yarn.lock"];

file.forEach(async (name, index) => {
  console.log(fs.existsSync(`./${name}`));
  if (fs.existsSync(`./${name}`)) {
    await fs.unlink(`./${name}`, (err) => {
      console.log(err);
    });
  }
});
