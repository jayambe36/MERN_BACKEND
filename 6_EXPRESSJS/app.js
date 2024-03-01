//simple hello world in express js


//with the help of express we can create a server and handle requests. 
const express = require('express')

const app = express()


//get,post, put , delete

app.get('/', (req, res) => {
    res.send('Hello Smit Patel, I am your AI')
})


app.get('/about' , (req, res)=>{
    res.send('We create an impact on the world')
})

//declare a port:3000, get a message 
app.listen(3000, ()=> console.log('Server is running on : 3000'))
