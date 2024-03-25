'use strict';

var server = require('server');

server.get('Show',function(req,res,next){
    var productMgr = require('../scripts/MondayHelper');

    res.render('display/monday',{
        productID:productMgr
    });
    next();
});

server.get('Product',function(req,res,next){
    var productMgr = require('../scripts/MondayHelper');
    res.render('display/monday',{
        ID:productMgr.object.Id(req.querystring.pid),
        name:productMgr.object.Name(req.querystring.pid),
        brand:productMgr.object.Brand(req.querystring.pid)
    });
    next();
});

server.get('Helper',function(req,res,next){
    var productMgr = require('*/cartridge/scripts/helpers/getMessage');

    res.render('display/monday',{
        mess:productMgr.message,
        id:productMgr.Id,
        name:productMgr.cartridge
    });
    next();
});

server.get('Obj',function(req,res,next){
    var productMgr = require('../scripts/mondayHelper');

    res.render('display/monday',{
        Object:productMgr.object
    });
    next();
});



module.exports = server.exports();