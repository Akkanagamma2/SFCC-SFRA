'use strict';

var BasketMgr = require('dw/order/BasketMgr');
var CustomObjectMgr = require('dw/object/CustomObjectMgr');
var Transaction = require('dw/system/Transaction');

function getBasketItems(req){
    var arr = new Array();
    var products = new Array();
    var basket = BasketMgr.getCurrentBasket().productLineItems;
    var customer = req.currentCustomer.profile;
    Transaction.wrap(function(){
        var customr = CustomObjectMgr.getCustomObject("patil_cartDetails",customer.email);
        if(!customr){
            customr = CustomObjectMgr.createCustomObject("patil_cartDetails",customer.email);
        }
        for(var i in basket){
            arr[i] = basket[i].productID;
        }
        customr.custom.productIDs = arr;
    });
    return basket;
}

module.exports.products =  getBasketItems;