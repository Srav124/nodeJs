const fs = require('fs');
const { promisify } = require('util');
const appendFile = promisify(fs.appendFile);
(async () => {
    try{
        await appendFile('data.txt',"hello from appen")
        console.log("append successfull")
    }catch(e) {
        console.log("err",e)
    }
})()