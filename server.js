var express = require('express')
var app = express()
var path = require('path')
require('colors')
const {argv} = require('yargs')

let PORT = process.env.PORT || 3250
if(argv.port){
    PORT = argv.port
}


app.use(express.static(path.join(__dirname,'dist','q-enta-test')))

app.get('*', (req,res)=>{
    res.redirect('/')
})

app.listen(PORT, ()=>{
    console.log('[developer]:'.green,` Server on port ${PORT}`.green)
    console.log('[developer]:'.green,` Host: http://localhost:${PORT}`.yellow)
    console.log('[developer]:'.green,' By Andres Felipe Mantilla Gomez'.blue)
})