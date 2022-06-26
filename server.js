const express=require('express')

const app = new express()
const port = process.env.port || 80

app.get('/', (req, res)=>{
    res.status(200).send("Welcome to my web service")
})

app.listen(port, ()=>{console.log("server running on port : " + port)})
