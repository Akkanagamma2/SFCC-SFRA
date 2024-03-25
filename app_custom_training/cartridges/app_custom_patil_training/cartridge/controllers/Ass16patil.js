'use strict';

var server = require('server');

server.get('First',function(req,res,next){
    res.json({
        name:"FirstRoute"
    })
    next();
});

server.get('Second',server.middleware.include,function(req,res,next){
    res.render('assignment/ass16second')
    next();
});


server.get('Third',function(req,res,next){
    res.render('assignment/ass16');
    next();
})

module.exports = server.exports();