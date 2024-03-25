'use strict';
var BasketMgr = require('dw/order/BasketMgr');

    var list = BasketMgr.getCurrentBasket().allProductLineItems;


var base = module.superModule;

var Resource = require('dw/web/Resource');
var validationHelpers = require('*/cartridge/scripts/helpers/basketValidationHelpers');

/**
 * validates the current users basket
 * @param {dw.order.Basket} basket - The current user's basket
 * @param {boolean} validateTax - boolean that determines whether or not to validate taxes
 * @returns {Object} an error object
 */
function validateBasket(basket, validateTax) {
    var result = { error: false, message: null };

    if (!basket) {
        result.error = true;
        result.message = Resource.msg('error.cart.expired', 'cart', null);
    } else {
        var productExistence = validationHelpers.validateProducts(basket);
        var validCoupons = validationHelpers.validateCoupons(basket);
        var validateQuantityService = validationHelpers.validateRestService();
        var totalTax = true;

        if (validateTax) {
            totalTax = basket.totalTax.available;
        }

        if (productExistence.error || !productExistence.hasInventory) {
            result.error = true;
            result.message = Resource.msg('error.cart.or.checkout.error', 'cart', null);
        } else if (validCoupons.error) {
            result.error = true;
            result.message = Resource.msg('error.invalid.coupon', 'cart', null);
        } else if (basket.productLineItems.getLength() === 0) {
            result.error = true;
        } else if (!basket.merchandizeTotalPrice.available) {
            result.error = true;
            result.message = Resource.msg('error.cart.or.checkout.error', 'cart', null);
        } else if (!totalTax) {
            result.error = true;
            result.message = Resource.msg('error.invalid.tax', 'cart', null);
        // }else if(list[0].productID == validateQuantityService.pid){
        //     if(validateQuantityService.ValidProduct){
        //         result.error = true;
        //         result.message = Resource.msg('error.quantity','cart',null);
        //     }
        }
    }

    return result;
}

base.validateBasket = validateBasket;

module.exports = base;