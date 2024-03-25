'use strict';

var server = require('server');

var loginCustomer = require('*/cartridge/scripts/middleware/userLoggedIn');

// server.get('Show',loginCustomer.validateLoggedIn,function(req,res,next){
//     var arr = new Array();
//     var basket = BasketMgr.getCurrentBasket().productLineItems;
//     var customer = req.currentCustomer.profile;
//     Transaction.wrap(function(){
//         var customr = CustomObjectMgr.getCustomObject("patil_cartDetails",customer.email);
//         if(!customr){
//             customr = CustomObjectMgr.createCustomObject("patil_cartDetails",customer.email);
//         }
//         for(var i in basket){
//             arr[i] = basket[i].productID;
//         }
//         customr.custom.productIDs = arr;
//     });
//     res.render('display/ass21',{
//         products : arr
//     })
//     next();
// });

server.get('Send',loginCustomer.validateLoggedIn,function(req,res,next){

    var read = require("../scripts/ass21");
    var products = read.products(req);

    var customer = req.currentCustomer.profile;
    var emailHelpers = require('*/cartridge/scripts/helpers/emailHelpers');
    var emailObj = {};
    emailObj.to = "akkupatil1917@gmail.com";
    emailObj.from = "akkanagamma2@gmail.com";
    emailObj.subject = "Knock Knock new basket";

    var template = "display/ass21";

    var context = {};
    context.FirstName = customer.firstName;
    context.LastName = customer.lastName;
    context.products = products;

    emailHelpers.send(emailObj, template, context);
    res.json();

    next();
});


module.exports = server.exports();