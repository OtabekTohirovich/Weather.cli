import getArg from './helpers/args.js'
import { printError, printSuccess , printHelp} from'./services/log.services.js'
import saveKeyValue from './services/storage.service.js';

const saveToken = async token =>{
    try {
        await saveKeyValue('token', token)
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
    //result

}

startCLI()