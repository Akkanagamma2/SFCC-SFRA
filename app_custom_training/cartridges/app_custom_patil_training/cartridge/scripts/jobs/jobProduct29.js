'use strict';

var File = require('dw/io/File');
var FileWriter = require('dw/io/FileWriter');
var CSVStreamWriter = require('dw/io/CSVStreamWriter');
var ProductMgr = require('dw/catalog/ProductMgr');
var Status = require('dw/system/Status');
var Site = require('dw/system/Site');

var folder = new File(File.IMPEX + '/src/products_patil/');
function products(){
    if(!folder.exists()){
        folder.mkdir();
    }
    var sites = Site.getAllSites();
    for(var i in sites){
        var file = new File(File.IMPEX + '/src/products_patil/products-'+sites[i].getName()+'.csv');
        if(!file.exists()){
            file.createNewFile();
        }
        var writer = new FileWriter(file);
        var csvwriter = new CSVStreamWriter(writer);
        csvwriter.writeNext(["ProductId","ProductName","ProductBrand","Availability","Price"]);
        var products = ProductMgr.queryAllSiteProducts();
        while(products.hasNext()){
            var product = products.next();
            if(product.availabilityModel.inStock === true && product.priceModel.price.available === true && product.online===true){
                csvwriter.writeNext([product.getID(),product.getName(),product.getBrand(),product.availabilityModel.inStock,product.getPriceModel().getPrice()]);
            }
        }
    }
    return new Status(Status.OK);
}

var Logger = require('dw/system/Logger');

function moveFiles(){
    try{
        var folder2 = new File(File.IMPEX + '/src/upload_patil/');
        if(!folder2.exists()){
            folder2.mkdir();
        }
        var files = folder.listFiles();
        for(var i in files){
            var uploadFile = new File(File.IMPEX + '/src/upload_patil/'+files[i].getName());
                if(!uploadFile.exists()){
                    files[i].copyTo(uploadFile);
                }
                files[i].remove();
        }
    }
    catch(err){
        Logger.error(err.message);
    }
    return new Status(Status.OK);
}

module.exports.Products = products;
module.exports.moveFiles = moveFiles;