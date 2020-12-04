const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT||3000

// helps out app use client folder for front end
app.use( express.static( __dirname + '/client' ));



app.get('/', (req, res)=>{
    res.sendFile( path.join( __dirname, 'client', 'index.html' ));
})

app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`)
})