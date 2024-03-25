"use strict";

var server = require('server');

server.get('Show',function(req,res,next){
    var StoreMgr = require('dw/catalog/StoreMgr');
    var store = StoreMgr.getStore("store1");
    var storeModel = require('*/cartridge/models/store');

    var storeObj = new storeModel(store);
    res.json(storeObj);

    next();
})
module.exports = server.exports();