"use strict";

var server = require('server');

server.extend(module.superModule);

server.replace('Login',function(req,res,next){
    var BasketMgr = require('dw/order/BasketMgr');
    var currbasket = BasketMgr.getCurrentBasket();
    if(currbasket != null){
        var basket = currbasket.productLineItems;
    }
    if(basket!=null){
        var emailHelpers = require('*/cartridge/scripts/helpers/emailHelpers');
        var emailObj = {};
        emailObj.to = customer.profile.email;
        emailObj.from = "akkanagamma2@gmail.com";
        emailObj.subject = "Knock Knock your basket update!!";

        var template = "display/ass21";

        var context = {};
        context.FirstName = customer.profile.firstName;
        context.LastName = customer.profile.lastName;
        context.products = basket;

        emailHelpers.send(emailObj, template, context);
    }
    res.json();
    next();
})
module.exports = server.exports();