'use strict';

module.exports = function (object, lineItem) {
    Object.defineProperty(object, 'backText_P', {
        enumerable: true,
        value: lineItem.custom.backText_P
    });
};