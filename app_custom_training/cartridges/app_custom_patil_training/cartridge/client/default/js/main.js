window.jQuery = window.$ = require('jquery');
var processInclude = require('base/util');

$(document).ready(function () {
    processInclude(require('base/components/menu'));
    processInclude(require('base/components/cookie'));
    processInclude(require('base/components/consentTracking'));
    processInclude(require('base/components/footer'));
    processInclude(require('wishlist/components/miniCart'));
    processInclude(require('base/components/collapsibleItem'));
    processInclude(require('base/components/search'));
    processInclude(require('base/components/clientSideValidation'));
    processInclude(require('base/components/countrySelector'));
    processInclude(require('base/components/toolTip'));
});

$(".logo-home").click(function(){
    alert("This is the home page alert");
});

require('base/thirdParty/bootstrap');
require('base/components/spinner');
