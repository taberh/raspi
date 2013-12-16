var restify = require('restify')

var server = restify.createServer({
    name: 'raspi',
    version: '1.0.0'
})
server.use(restify.acceptParser(server.acceptable))
server.use(restify.queryParser())
server.use(restify.bodyParser())

server.get('/', function (req, res, next) {
    res.send({"key": "value"})
    return next()
})

server.listen(80, function () {
    console.log('%s listening at %s', server.name, server.url)
})
