"use strict";

function getCutomer(){
    var a = require('dw/customer/CustomerMgr');
    var customerDet = request.session.customer;
    return customerDet;
}

function readAddresses(customer){
    var address = customer.addressBook.getAddresses();
    return address;
}

module.exports ={
    customerDet:getCutomer,
    readAddresses:readAddresses
}