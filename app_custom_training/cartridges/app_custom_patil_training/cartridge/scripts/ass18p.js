'use strict';


function getOrders(req){
    var customer = req.currentCustomer.raw;
    var list = require('dw/util/ArrayList');
    var orderList = new list();
    var c = customer.getOrderHistory().getOrders();
    while(c.hasNext()){
        orderList.add(c.next());
    }
    return orderList;
}

module.exports.getOrders = getOrders;