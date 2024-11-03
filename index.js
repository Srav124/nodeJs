const express = require('express');
const app = express();
const router = express.Router();

//middleware
const authenticate = (req,res,next) => {
    if(req.params.id == '123'){
        next()
        console.log('authentication done')
    }else{
        return res.send({message: 'failed'})
    }
    
  
}

router.get('/:id/healthCheck', authenticate, (req,res,next) =>{
    res.send('Welcome to backend application')
})

app.use(router)
app.listen('3000',() => {
    console.log('server started at 3000')
})