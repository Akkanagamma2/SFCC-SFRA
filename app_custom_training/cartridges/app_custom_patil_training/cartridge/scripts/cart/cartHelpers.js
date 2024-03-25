'use strict';

var ProductMgr = require('dw/catalog/ProductMgr');
var Resource = require('dw/web/Resource');
var Transaction = require('dw/system/Transaction');
var URLUtils = require('dw/web/URLUtils');

var collections = require('*/cartridge/scripts/util/collections');
var ShippingHelpers = require('*/cartridge/scripts/checkout/shippingHelpers');
var productHelper = require('*/cartridge/scripts/helpers/productHelpers');
var arrayHelper = require('*/cartridge/scripts/util/array');
var BONUS_PRODUCTS_PAGE_SIZE = 100;


var base = module.superModule;

/**
 * Adds a line item for this product to the Cart
 *
 * @param {dw.order.Basket} currentBasket -
 * @param {dw.catalog.Product} product -
 * @param {number} quantity - Quantity to add
 * @param {string[]}  childProducts - the products' sub-products
 * @param {dw.catalog.ProductOptionModel} optionModel - the product's option model
 * @param {dw.order.Shipment} defaultShipment - the cart's default shipment method
 * @return {dw.order.ProductLineItem} - The added product line item
 */
function addLineItem(
    currentBasket,
    product,
    quantity,
    childProducts,
    optionModel,
    defaultShipment,
    personalization
) {
    var productLineItem = currentBasket.createProductLineItem(
        product,
        optionModel,
        defaultShipment
    );

    if (product.bundle && childProducts.length) {
        base.updateBundleProducts(productLineItem, childProducts);
    }

    productLineItem.setQuantityValue(quantity);

    if(personalization != undefined){
        if(personalization.frontText){
            Transaction.wrap(function(){
                productLineItem.custom.frontText_P = personalization.frontText;
                productLineItem.custom.backText_P = personalization.backText;
                productLineItem.custom.containsPersonalization_P = true;
            })
        }
    }
    return productLineItem;
}

/**
 * Adds a product to the cart. If the product is already in the cart it increases the quantity of
 * that product.
 * @param {dw.order.Basket} currentBasket - Current users's basket
 * @param {string} productId - the productId of the product being added to the cart
 * @param {number} quantity - the number of products to the cart
 * @param {string[]} childProducts - the products' sub-products
 * @param {SelectedOption[]} options - product options
 *  @return {Object} returns an error object
 */
function addProductToCart(currentBasket, productId, quantity, childProducts, options, personalization) {
    var availableToSell;
    var defaultShipment = currentBasket.defaultShipment;
    var perpetual;
    var product = ProductMgr.getProduct(productId);
    var productInCart;
    var productLineItems = currentBasket.productLineItems;
    var productQuantityInCart;
    var quantityToSet;
    var optionModel = productHelper.getCurrentOptionModel(product.optionModel, options);
    var result = {
        error: false,
        message: Resource.msg('text.alert.addedtobasket', 'product', null)
    };

    var totalQtyRequested = 0;
    var canBeAdded = false;

    if (product.bundle) {
        canBeAdded = base.checkBundledProductCanBeAdded(childProducts, productLineItems, quantity);
    } else {
        totalQtyRequested = quantity + base.getQtyAlreadyInCart(productId, productLineItems);
        perpetual = product.availabilityModel.inventoryRecord.perpetual;
        canBeAdded =
            (perpetual
            || totalQtyRequested <= product.availabilityModel.inventoryRecord.ATS.value);
    }

    if (!canBeAdded) {
        result.error = true;
        result.message = Resource.msgf(
            'error.alert.selected.quantity.cannot.be.added.for',
            'product',
            null,
            product.availabilityModel.inventoryRecord.ATS.value,
            product.name
        );
        return result;
    }

    productInCart = base.getExistingProductLineItemInCart(
        product, productId, productLineItems, childProducts, options);

    if (productInCart) {
        productQuantityInCart = productInCart.quantity.value;
        quantityToSet = quantity ? quantity + productQuantityInCart : productQuantityInCart + 1;
        availableToSell = productInCart.product.availabilityModel.inventoryRecord.ATS.value;

        if (availableToSell >= quantityToSet || perpetual) {
            productInCart.setQuantityValue(quantityToSet);
            result.uuid = productInCart.UUID;
        } else {
            result.error = true;
            result.message = availableToSell === productQuantityInCart
                ? Resource.msg('error.alert.max.quantity.in.cart', 'product', null)
                : Resource.msg('error.alert.selected.quantity.cannot.be.added', 'product', null);
        }
    } else {
        var productLineItem;
        productLineItem = base.addLineItem(
            currentBasket,
            product,
            quantity,
            childProducts,
            optionModel,
            defaultShipment,
            personalization
        );

        result.uuid = productLineItem.UUID;
    }

    return result;
}

function removeProduct(){
    return "This is the removable product";
}

base.addLineItem = addLineItem;
base.addProductToCart = addProductToCart;
base.BONUS_PRODUCTS_PAGE_SIZE = BONUS_PRODUCTS_PAGE_SIZE;
base.removeProduct = removeProduct;
module.exports = base;

