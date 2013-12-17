var config  = require('node-conf').load(process.env.NODE_ENV)
var exec    = require('child_process').exec

module.exports = function(req, res, next) {
    var filename = '/' + Date.now() + '.jpg'
    var cmd = 'raspistill -w 800 -h 600 -o '

    exec(cmd + config.photos.path + filename, function(err, stdout, stderr) {
        if (err) return next(err)
        if (stderr) return next(stderr)

        res.send({
            "photo": "http://taberh.vicp.cc/photos/" + filename
        })

        next()
    })
}
