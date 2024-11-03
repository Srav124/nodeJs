console.log("start")
console.time("timmee")

setTimeout(() => {
    console.log("Settimeout")
},2000)

setInterval(() => {
    console.log("set interval")
    console.timeEnd('timmee')
},1000)

setImmediate(() => {
    console.log("immediate")
})

process.nextTick(() =>{
    console.log("next tick")
})

console.log("end")