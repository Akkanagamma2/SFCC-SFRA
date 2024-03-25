'use strict';

var List = require('dw/util/ArrayList');
var Transaction = require('dw/system/Transaction');
var BasketMgr = require('dw/order/BasketMgr');


function getOrderDet(req){
    var customer = req.currentCustomer.raw;
    var orderList = new List();

    var order = customer.getOrderHistory().getOrders();
    while(order.hasNext()){
        orderList.add(order.next());
    }
    return orderList;
}

function getProduct(orderList){
    for(var i in orderList){
        var order = orderList[i];
        var productlineItem = order.productLineItems;
        for(var k in productlineItem){
            var productItem = productlineItem[k];
            var product = productItem.product;
            var categoryName = category(product);
            if(categoryName === "New Arrivals"){
                Transaction.wrap(function(){
                    order.custom.patilOrd_containsNewArrivals = true;
                    productItem.custom.patil_containsNewArrivals = true;
                    productItem.shipment.custom.patilShipment_containsNewArrivals = true;
                });
            }
        }
    }
}

function getBasket(){
    var basket = BasketMgr.getCurrentBasket()
    var basketItems = basket.getProductLineItems();
    for(var i in basketItems){
        var prod = basketItems[i];
        var categoryName = category(prod.product);
        if(categoryName === "New Arrivals"){
            Transaction.wrap(function(){
                basket.custom.patilBasket_containsNewArrivals = true;
            });
        }
    }
}

function category(product){
    var category = product.primaryCategory;
    if(!category){
        category = product.variationModel.master.getPrimaryCategory();
    }
    while(!category.topLevel){
        category = category.getParent();
    }
    return category.displayName;
}


module.exports.getOrderDet = getOrderDet;
module.exports.getProduct = getProduct;
module.exports.getBasket = getBasket;