"use strict";


function getCutomer(){
    var a = require('dw/customer/CustomerMgr');
    var customerDet = request.session.customer;
    return customerDet;
}

function customerGroup(customer){
    var cust = customer.customerGroups;
    var group = cust.isMemberOfCustomerGroup("VIP-Akkanagamma");
    return group;
}

module.exports = {
    getCutomer:getCutomer,
    customerGroup:customerGroup
}
