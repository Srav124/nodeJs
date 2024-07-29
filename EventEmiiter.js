//in browser we have events like onclick functionalities to replicate those functionalities or create custome events we use event 
//package in node .
const events = require('events')

//here we invoke eventemitter class
const myEmitter = new events.EventEmitter()

// //creating an custom event(On function have two parameters first param action and second one is callback function)
myEmitter.on('action', function(val) {
    console.log('your task is completed successfully', val)
})

// //performing event (emit function have two parameters first param is action and second one is value for that call back function)
myEmitter.emit('action','james')