"use strict";

var server = require('server');

server.get('Show',function(req,res,next){
    res.render('display/method',{
        Message1:"This is from first message fun"
    })
    next();
    },function(res,req,next){
        res.render('display/method2',{
            Message2:"This is Second from message fun"
        })
    next();
    });
module.exports = server.exports();