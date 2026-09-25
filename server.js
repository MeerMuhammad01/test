var express = require('express')
var server = express()

server.get('/sayhello',async(req,res)=>{
    res.json({"Message":"say Hello"})
})

module.exports = server