'use strict';

function message(){
    return "This is from js file";
}

module.exports.message = message;
module.exports.Id = module.id;
module.exports.cartridge = module.cartridge;
