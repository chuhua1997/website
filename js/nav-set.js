// 點按漢堡會出現選單
$(document).ready(function () {
    $('#menu-switch').click(function () {
        $('.pc-nav').addClass('show-menu');
        alert($('.show-menu').hasClass('show-menu'))

        // $('.pc-nav').show();
        // $('.pc-nav').text(123);
        $('.show-menu').toggle()
    });
});