"use strict";

function order(){
    var Status = require('dw/system/Status');
    var File = require('dw/io/File');
    var FileWriter = require('dw/io/FileWriter');
    var OrderMgr = require('dw/order/OrderMgr');
    var Order = require('dw/order/Order');
    var SystemObjectMgr = require('dw/object/SystemObjectMgr');
    var CSVStreamWriter = require('dw/io/CSVStreamWriter');
    var Logger = require('dw/system/Logger');

    var Folder = new File(File.IMPEX + '/src/Porders/');
    if(!Folder.exists()){
        Folder.mkdir();
    }
    var file = new File(File.IMPEX+'/src/Porders/order.csv');
    if(!file.exists()){
        file.createNewFile();
    }
    try{
        var writer = new FileWriter(file);
        var csvwriter = new CSVStreamWriter(writer);
        csvwriter.writeNext(['Order No','Billing FirstName','Billing Last Name','SubTotal','Tax','Shipping Cost','Order Total']);
        var orders = SystemObjectMgr.getAllSystemObjects("Order");
        while(orders.hasNext()){
            var order = orders.next();
            csvwriter.writeNext([order.orderNo,order.billingAddress.firstName,order.billingAddress.lastName,order.totalNetPrice,order.totalTax,order.shippingTotalGrossPrice,order.totalGrossPrice]);
        }
        csvwriter.close();
        return new Status(Status.OK);
        Logger.info("CSV file created successfully");
    }catch(err){
        Logger.error(err.message);
        return new Status(Status.ERROR);
    }
}
module.exports.order = order;