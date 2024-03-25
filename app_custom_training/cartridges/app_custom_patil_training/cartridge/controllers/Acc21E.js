'use strict';

var server = require('server');

server.get('Show',function(req,res,next){

    res.render('display/ass21');
    next();
});
module.exports = server.exports();