'use strict';

module.exports = function (object, lineItem) {
    Object.defineProperty(object, 'containsPersonalization_P', {
        enumerable: true,
        value: lineItem.custom.containsPersonalization_P
    });
};