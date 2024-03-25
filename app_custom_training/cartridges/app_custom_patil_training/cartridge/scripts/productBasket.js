'use strict';

// var message1 = function(msg){
//     return "message from getMessage1 file "+msg;
// }

function basketDetails(){
    var basket = require('dw/order/BasketMgr');
    var List = require('dw/util/ArrayList');
    var list = new List();
    var basketItems = basket.getCurrentBasket().productLineItems;
    // var obj = res.getViewData();
    var obj = {};
    for(var i in basketItems){
        obj['key' + i] = basketItems[i].productName;
    }

    return obj;
}



module.exports.basketDetails = basketDetails;