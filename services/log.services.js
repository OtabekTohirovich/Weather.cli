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

export const printWeather = (res, icon) =>{
  console.log(dedent `
   ${chalk.black.bgWhite("Weather")} City weather ${res.name}
   ${icon} ${res.weather[0].description}
   Tempurature: ${res.main.temp} (feels like ${res.main.feels_like})
   Humadity: ${res.main.humidity}%
   Wind Speed: ${res.wind.speed}

  `)

}

export { printError, printSuccess, printHelp };
