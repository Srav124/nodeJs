const fs= require('fs')
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

(async () => {
    try{
        const dataFile = await readFile('./myData.txt', 'utf-8')
        console.log(dataFile)

    }catch(e){
        console.log("error",e)
    }
})()