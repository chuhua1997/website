// 點按漢堡會出現選單
$(document).ready(function () {
    $('#menu-switch').click(function () {
        $('.nav-selector').toggleClass('show-menu');
        // alert($('.nav-selector').hasClass('show-menu'))
        // $('.show-menu').toggle()
    });
});

