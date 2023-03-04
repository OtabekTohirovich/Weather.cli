import getArg from "./helpers/args.js";
import { getIcon, getWheather } from "./services/api.service.js";
import {
  printError,
  printSuccess,
  printHelp,
  printWeather,
} from "./services/log.services.js";
import saveKeyValue, { TOKEN_DICTIONARY, getKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token doesn't exist");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token was saved");
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
    if (!city.length) {
      printError("City doesn't exist");
      return;
    }
    try {
      await saveKeyValue(TOKEN_DICTIONARY.city, city);
      printSuccess("City was saved");
    } catch (error) {
      printError(error.message);
    }
  };

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city))
    const response = await getWheather(city);
    console.log(response);
    printWeather(response, getIcon(response.weather[0].icon))
  } catch (error) {
    if (error?.response?.status == 404) {
      printError("City not found");
    } else if (error?.response?.status == 401) {
      printError("Token not found");
    } else {
      printError(error.message);
    }
  }
};

const startCLI = () => {
  const args = getArg(process.argv);
  // console.log(process.env);
  // console.log(args);
  // printSuccess('ok')
  // printError('no-ok')
  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  return getForcast();
};

startCLI();
