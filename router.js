var api = require('./api/')

module.exports = function(server) {
    server.post('/api/photos', api.Photos.create)
    server.get('/api/photos', api.Photos.multi)

    server.get('/', function redirect(req, res, next) {
        res.header('Location', '/public/index.html');
        res.send(302);
        return next(false);
    })

}
