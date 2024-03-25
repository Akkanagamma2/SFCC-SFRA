'use strict';

var server = require('server');

server.get('Show',function(req,res,next){

    var Logger = require('dw/system/Logger').getLogger("Training","hi");
    var ProductMgr = require('dw/catalog/ProductMgr');
    var pid = req.querystring.pid;
    try{
        if(pid){
            Logger.info("Get the info of the product id {0}",33);
            var product = ProductMgr.getProduct(pid);
            if(!product){
                Logger.fatal("got the mail");
                Logger.warn("pid which u mentioned not considered to present 33");
                Logger.error("check all the boxes if u need 33");
            }
        }else{
            Logger.error("pid is not present in the queryString 33");
            Logger.info("Get the info of the product id {0}",33);
        }
    }catch(err){
        var message = err.message;
    }








    // try{
    //     throw new InternalError("a is undefined at a block");
    // }catch(e if e instanceof ReferenceError){
    //     res.json({
    //         message : e.message,
    //         name : e.name
    //     })
    // }catch(err){
    //     res.json({
    //         mess : "This is from internal error",
    //         name : err.name
    //     })
    // }
    res.json();
    next();
})
module.exports = server.exports();