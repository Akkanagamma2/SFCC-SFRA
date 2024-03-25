'use strict';

var server = require('server');

server.get('Show',function(req,res,next) {
    var r = session.custom.currency;
    // var k = JSON.parse(session.currency.getCurrency(r));
    res.json({
        R : r
    })
    next();
})
module.exports = server.exports();