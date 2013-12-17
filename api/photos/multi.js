var config  = require('node-conf').load(process.env.NODE_ENV)
var fs      = require('fs')

module.exports = function(req, res, next) {
    fs.readdir(config.photos.path, function(err, files) {
        if (err) return next(err)

        res.send({
            'photos': files
        })

        next()
    })
}
