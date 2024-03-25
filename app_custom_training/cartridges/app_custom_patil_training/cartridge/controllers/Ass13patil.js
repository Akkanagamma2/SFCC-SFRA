'use strict';

var server = require('server');

server.get('Show',function(req,res,next){
    var List = require('dw/util/ArrayList');
    var read = require('../scripts/ass13Helper');

    var productIds = read.getProductIds();
    var obj = read.getList(productIds);

    var list = new List();
    for(var i in obj){
        var product = new read.productObj(obj[i]);
        list.add(product);
    }

    res.render('helpModule/ass13',{
        List:list,
        NotProduct : read.ntlist
    });
    next();
});
module.exports = server.exports();




