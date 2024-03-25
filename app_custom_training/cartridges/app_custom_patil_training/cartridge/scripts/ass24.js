'use strict';

var Status = require('dw/system/Status');
var Currency = require('dw/util/Currency');

module.exports.onSession =  function(){
    var cookie = request.httpCookies["currencyCookie"];
    var currencyCode = cookie.getValue();
    var currency = Currency.getCurrency(currencyCode);
    session.setCurrency(currency);
    session.custom.currency = session.currency.currencyCode;

    return new Status(Status.OK);
}




