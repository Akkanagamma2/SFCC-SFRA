'use strict';

var server = require('server');

server.get('Show',function(req,res,next){

    var read = require("../scripts/ass14p");
    var customerDet = read.customerDet();

    if(!customerDet.authenticated){
        res.redirect("Login-Show");
    }else{
        var addr = read.readAddresses(customerDet);
    }

    res.render('assignment/ass14',{
        address : addr
    })
    next();
});
module.exports = server.exports();