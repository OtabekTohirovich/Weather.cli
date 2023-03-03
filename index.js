const getArg = require('./helpers/args')
const startCLI = ()=>{
    const args = getArg(process.argv)
    console.log(args);
    if (args.h) {
        //help
    }
    if (args.s) {
        //save
    }
    if (args.t) {
        //save token
    }
    //result

}

startCLI()