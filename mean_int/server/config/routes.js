var CONTROLLER_NAME = require('../controllers/CONTROLLER_NAME.js');
var path = require('path');

module.exports = function(app) {
    app.get('/')

    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('./public/dist/index.html'))
      })
}

