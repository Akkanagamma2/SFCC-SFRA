"use strict";
module.exports = {
    emailSubscribe : function(){
        $('.subscription').submit(function(e){
            var form = $(this);
            e.preventDefault();
            var url = form.attr('action');
            form.spinner().start();
            $.ajax({
                url: url,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function (data) {
                    form.spinner().stop();
                    form.empty().html(data);
                },
                error: function () {
                    form.spinner().stop();
                    form.empty().html("please review it once again");
                }
            });
        });
    }
}