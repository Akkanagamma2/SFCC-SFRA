'use strict';

var base = module.superModule;

var collections = require('*/cartridge/scripts/util/collections');

var ShippingMgr = require('dw/order/ShippingMgr');

var ShippingModel = require('*/cartridge/models/shipping');

var ShippingMethodModel = require('*/cartridge/models/shipping/shippingMethod');


// Public (class) static model functions



/**
 * Retrieve raw address JSON object from request.form
 * @param {Request} req - the DW Request object
 * @returns {Object} - raw JSON representing address form data
 */
function getAddressFromRequest(req) {
    return {
        firstName: req.form.firstName,
        lastName: req.form.lastName,
        address1: req.form.address1,
        address2: req.form.address2,
        companyName: req.form.companyName,
        city: req.form.city,
        stateCode: req.form.stateCode,
        postalCode: req.form.postalCode,
        countryCode: req.form.countryCode,
        phone: req.form.phone
    };
}


base.getAddressFromRequest = getAddressFromRequest;
module.exports = base;
