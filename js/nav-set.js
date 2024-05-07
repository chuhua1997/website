// 點按漢堡會出現選單
$(document).ready(function () {
    $('#menu-switch').click(function () {
        // alert($('.nav-selector').hasClass('show-menu'))
        $('.nav-selector').toggleClass('show-menu');

        // $('.show-menu').toggle()
    });
});

