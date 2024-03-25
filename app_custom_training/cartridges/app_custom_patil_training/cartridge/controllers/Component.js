'use strict';

var server = require('server');

server.get('Show',function(req,res,next){

    var val1 = req.querystring.x;
    var val2 = req.querystring.y;
    res.render('arrayLst/new',{
        val1:val1,
        val2:val2
    });
    next();
});
module.exports = server.exports();

server.get('Sho',function(req,res,next){
    var X = req.querystring.x;
    var Y = req.querystring.y;
    res.render('display/sample1',{
        X1:X,
        Y1:Y
    });
    next();
});
module.exports = server.exports();