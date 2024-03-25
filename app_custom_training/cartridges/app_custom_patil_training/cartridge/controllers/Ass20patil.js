'use strict';

var server = require('server');

var loginCustomer = require('*/cartridge/scripts/middleware/userLoggedIn');

server.get('Show',loginCustomer.validateLoggedIn,function(req,res,next){
    var HookMgr = require('dw/system/HookMgr');
    if(HookMgr.hasHook("jiva.sfcc.training.Ass20")){
        var newArrivals = HookMgr.callHook("jiva.sfcc.training.Ass20","getOrderDet",req);
        var product = HookMgr.callHook("jiva.sfcc.training.getProduct","getProduct",newArrivals);
        //var basket = HookMgr.callHook("jiva.sfcc.training.getBasket","getBasket");
    }
    res.render('assignment/ass20',{
        orderList:newArrivals,
    })
    next();
});
module.exports = server.exports();