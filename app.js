var restify = require('restify')
var fs      = require('fs')
var config  = require('node-conf').load(process.env.NODE_ENV)
var router  = require('./router')

var server = restify.createServer({
    name: config.name,
    version: config.version
})
server.use(restify.acceptParser(server.acceptable))
server.use(restify.dateParser())
server.use(restify.queryParser())
server.use(restify.bodyParser())
server.use(restify.gzipResponse())

server.get(/\/public\/?.*/, restify.serveStatic({
    'directory': './public'
}))

server.get(/\/photos\/?.*/, restify.serveStatic({
    'directory': './photos'
}))

router(server)

server.listen(config.port, function () {
    console.log('%s listening at %s', server.name, server.url)
})

if (!fs.existsSync(config.photos.path)) {
    fs.mkdirSync(config.photos.path);
}
