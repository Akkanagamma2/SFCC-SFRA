"use strict";

var server = require('server');

var URLUtils = require('dw/web/URLUtils');

server.get('Show',function(req,res,next){

    var subscribe = server.forms.getForm("Assn23");
    res.render("assignment/Assn23p",{
        subscribe:subscribe
    })
    next();
});

module.exports = server.exports();