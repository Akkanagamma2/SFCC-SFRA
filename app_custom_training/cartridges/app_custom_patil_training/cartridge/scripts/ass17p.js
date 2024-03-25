'use strict';

function basketDetails(){
    var basket = require('dw/order/BasketMgr');
    var basketItems = basket.getCurrentBasket().productLineItems;
    return basketItems;
}

module.exports={
    basketDetails:basketDetails
}