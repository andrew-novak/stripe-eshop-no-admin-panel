const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const { writeFile } = fs.promises;

/*
Run like the example below:
$ node ./beforeBuild/setApiUrl.js YOUR_API_URL_HERE
*/

const apiUrl = process.argv[2];

if (apiUrl === undefined) {
  throw new Error(
    chalk.whiteBright.bgRed.bold("Pass the API URL as the 1st argument")
  );
}

const envFile = path.join(__dirname, "..", ".env");

fs.access(envFile, fs.F_OK, (err) => {
  if (!err) {
    throw new Error(
      chalk.whiteBright.bgRed.bold(`The file ${file} already exists`)
    );
  }
});

const content = `REACT_APP_API_URL=${apiUrl}`;
writeFile(envFile, content);
