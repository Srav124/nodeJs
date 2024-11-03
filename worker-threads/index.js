const express = require('express')
const app = express();

app.get('/blocking', (req,res,next) =>{
    let count = 0;
    for(let i=0;i<200000000000;i++){
        count++
    }
    res.status(200).send(`result is ${count}`)
})

app.get('/non-blocking', (req,res,next) =>{
    res.send('Non blocking code')
})

app.listen('3000', () =>{console.log('Server started in port 3000')})