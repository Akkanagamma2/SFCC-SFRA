'use strict';

var server = require('server');

server.get('Show',function(req,res,next){

    res.render('cookies/cookie');
    next();
});
module.exports = server.exports();