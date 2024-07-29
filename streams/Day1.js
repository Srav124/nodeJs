const fs = require('fs');
const util = require('util');

const writePromisify = util.promisify(fs.writeFile);
const readPromisify = util.promisify(fs.readFile);
const readStream = fs.createReadStream('data.txt','utf-8');
const writeStream = fs.createWriteStream('newData.txt');
// console.log(__dirname);
(async () => {
  try {
    await writePromisify('myData.txt', 'Hello world kfokfper!!');
    console.log('File written successfully');
  } catch (error) {
    console.error('Error writing file:', error);
  }
})();

(async () =>{
    try {
        const data = await readPromisify('./myData.txt','utf-8');
        console.log('reading data', data)
    } catch (error) {
        console.error('Error reading file:', error);
    }
    
})()

readStream.on('data', function(chunk){
  console.log("data reading successfully");
  // console.log('chunk data', chunk)
  writeStream.write(chunk)
})