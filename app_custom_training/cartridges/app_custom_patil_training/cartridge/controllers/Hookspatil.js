'use strict';

var server = require('server');

server.get('Show',function(req,res,next){
    var HookMgr = require('dw/system/HookMgr');
    if(HookMgr.hasHook("jiva.sfcc.trainig.basketDetails")){
        var product = HookMgr.callHook("jiva.sfcc.trainig.basketDetails","basketDetails");
    }

    res.json(product)
    next();
})
module.exports = server.exports();