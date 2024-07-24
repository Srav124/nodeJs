const fs = require("fs")

// const {promisify} = require('util')

// const writeFile = promisify(fs.writeFile)

const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);


(async () => {
    try{
        await writeFile('myData.txt', "Hello from x")
        console.log("file created succesfully")
    }catch(e){
        console.log("not able to create a project")
    }
})()