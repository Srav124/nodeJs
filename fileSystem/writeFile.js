// Before writing the we need promisify the fs.writeFile() to avoid callbacks. That we can do in 2 ways.
// fs.writeFile(file_name, data , callback)

const fs = require('fs');

const writeFile = (file, data) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile(file,data, (err) =>{
            if(err) reject("Cannot create file")
            resolve("file created successfully")
        })
    })
}

(async () => {
    try{
        await writeFile('myData.txt', "Hello have a good day")
        console.log("file created succesfully")
    }catch(e){
        console.log("not able to create a project")
    }
})()