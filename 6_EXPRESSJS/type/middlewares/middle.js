function MyMiddleware(req, res, next){
    console.log('I am custom middleware_1')
    next()
}


module.exports = MyMiddleware