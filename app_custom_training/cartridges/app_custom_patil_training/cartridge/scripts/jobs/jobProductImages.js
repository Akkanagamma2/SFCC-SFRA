'use strict';

var ProductMgr = require('dw/catalog/ProductMgr');
var File = require('dw/io/File');
var FileReader = require('dw/io/FileReader');


function productImage(){
    // var file = new File();
    // var image = new FileReader(file.Catalogs + 'Uniquostyle/default/images/Large/Aqua Kurta Set1.jpg');
    var product = ProductMgr.getProduct('1900020063PB');
    // var imageProduct = product.images.large[0].url(image);
    return new Status(Status.OK);
}

module.exports.productImage = productImage;