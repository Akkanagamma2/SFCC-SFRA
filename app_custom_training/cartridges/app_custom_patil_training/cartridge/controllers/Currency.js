"use strict";

var server = require('server');

server.get('Show',function(req,res,next){
    var Currency = require('dw/util/Currency');
    var currency = session.setCurrency("EUR");
    var URLRedirect = require('dw/web/URLRedirect');
    
    next();
});
module.exports = server.exports();