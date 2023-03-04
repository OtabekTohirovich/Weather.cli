import dedent from 'dedent-js'
import chalk from "chalk";
const printError = (err) => {
  console.log(chalk.bgRed("Error") + " " + err);
};

const printSuccess = (massage) => {
  console.log(chalk.black.bgGreen("Success") + " " + massage);
};
const printHelp = () => {
  console.log(dedent`
    ${chalk.black.bgCyan("Help")}
    -s [CITY] for install city
    -h for help
    -t [API_KEY] for saving token 
    `);
};

export { printError, printSuccess, printHelp };
