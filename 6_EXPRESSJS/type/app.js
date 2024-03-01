//middleware is a function that takes a request and response object and either terminates the request or passes it on to another middleware function.
//Middleware functions can perform the following tasks:
//Execute any code.
//Make changes to the request and the response objects.
//End the request-response cycle.   
//Call the next middleware function in the stack.   
//If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging. 


const express = require('express')

const app = express()


//get,post, put , delete

app.use(express.json())

//custom middleware --start--
app.use(function(req, res, next){
    console.log('I am custom middleware_1')
    next()
})

app.use(function(req, res, next){
    console.log('I am second custom middleware_2')
    next()
})

let courses = [
    {id:1, name:'Javascript'},
    {id:2, name:'Python'},
    {id:3, name:'CPP'},
]


//get the list of courses
app.get('/courses', (req, res)=>{
    res.send(courses)
})
//run command : nodemon app.js or nodemon server.js
/*for check this middleware work or not :-  go to postman and send api as get : http://localhost:3000/courses   as output:You will get course id with name */

//custom middleware --end--





app.get('/', (req, res) => {
    res.send('Hello Smit Patel, I am your AI')
})


app.get('/about' , (req, res)=>{
    res.send('We create an impact on the world')
})



//declare a port:3000, get a message 
app.listen(3000, ()=> console.log('Server is running on : 3000'))
