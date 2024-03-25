'use strict';

var server = require('server');

server.get('Slot',function(req,res,next){

    res.render('content/global');
    next();
});

module.exports = server.exports();