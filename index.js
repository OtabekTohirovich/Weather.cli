import getArg from './helpers/args.js'
import { getWheather } from './services/api.service.js';
import { printError, printSuccess , printHelp} from'./services/log.services.js'
import saveKeyValue, { TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async token =>{
    if(!token.length){
        printError("Token doesn't exist")
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess("Token was saved")
    } catch (error) {
        printError(error.message)
    }
}

const startCLI = ()=>{
    const args = getArg(process.argv)
    // console.log(args);
    // printSuccess('ok')
    // printError('no-ok')
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        //save
    }
    if (args.t) {
       return saveToken(args.t)
    }
    getWheather('uzbekistan')

}

startCLI()