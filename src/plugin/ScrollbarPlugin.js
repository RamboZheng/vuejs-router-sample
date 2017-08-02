import $ from 'jquery'

module.exports = {
    scrollbarOffsetTop: 0,

    install: function(Vue, options) {
        var ctx = this;
        Vue.mixin({
            activated: function () {
                console.log("111");
                $(document).scrollTop(ctx.scrollbarOffsetTop);
                $(window).scroll(function() {
                    ctx.scrollbarOffsetTop = document.body.scrollTop;
                });
            },

            deactivated: function () {
                console.log("222");
                $ (window).unbind('scroll');
            }
        });
    }
}