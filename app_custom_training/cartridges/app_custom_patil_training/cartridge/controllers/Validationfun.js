'use strict';

var server = require('server');

server.get('Show',function(req,res,next){

    var subscribe = session.forms["validationFun"];
    res.render('assignment/validation',{
        sub:subscribe
    })
    next();
})

server.post('Thank',function(req,res,next){

    res.json();
    next();
})

server.get('session',function(req,res,next){
    var form = session.forms["validationFun"];
    res.json({
        message:form
    })
    next();
})
module.exports = server.exports();