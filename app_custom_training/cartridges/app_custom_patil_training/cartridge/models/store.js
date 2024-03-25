'use strict';

var base = module.superModule;
/**
 * @constructor
 * @classdesc The stores model
 * @param {dw.catalog.Store} storeObject - a Store objects
 */
function store(storeObject) {
    if (storeObject) {
        base.call(this,storeObject);
        this.postalCode = "33333";
        delete this.postalCode;
        if(storeObject.custom.instagramID){
            this.instagram = storeObject.custom.instagramID;
        }
    }
}



base.store = store;
module.exports = base;
