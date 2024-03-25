"use strict";

var server = require('server');

server.get('Show',function(req,res,next){

    function getMessage(x,y,z){
        this.mess = x+"***|||*"+y+"***|||*"+z
        return this; 
    }
    var obj = {};
    var obj2={};
    obj2.messsage = getMessage.apply(obj,["Akkuuuuu","patil","CEO"]);
    res.json({
        Text : obj.mess,
        text : obj2

    });

    next();
})

server.get('product',function(req,res,next){
    var productHelper = require("*/cartridge/scripts/javaProduct");
    var ProductMgr = require('dw/catalog/ProductMgr');
    var product = ProductMgr.getProduct("008884303989M");
    var product2 = ProductMgr.getProduct("008884304054M");

    var productHelper = new productHelper(product);

    res.json({
        id : productHelper.id,
        name : productHelper.name,
        myname : productHelper.myName,
        getID : productHelper.getId.apply(product2,["new launched","lets get"])
    })

    next();
})


server.get('delete',function(req,res,next){
    var obj = {};
    obj.x = 10;
    obj.y = 30;
    delete obj.x;
    delete obj;
    res.json({
        XXX : obj.x,
        YYY : obj.y
    })
    next();
})

server.get('thirty',function(req,res,next){

    var assn30 = require("*/cartridge/scripts/assn30");
    var product = assn30.products();
    for(var i in product){
        if(i==0){
            var str = product[i];
        }else{
            str =  product[i]+" > "+ str;
        }
    }

    res.json({
        category : str
    })
    next();
})

module.exports = server.exports();