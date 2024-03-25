'use strict';

var server = require('server');

server.get('Show',function(req,res,next){

    var read = require('../scripts/ass17p');
    var basketItems = read.basketDetails();
    res.render('assignment/ass17',{
        basketItems:basketItems
    })
    next();
});
module.exports = server.exports();