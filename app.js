const express = require('express')
const app = express()
const port = 8081
var route_for_get = require('./routes/get_routes')


app.use('/get', route_for_get)

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})