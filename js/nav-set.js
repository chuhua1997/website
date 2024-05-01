// 點按漢堡會出現選單
$(document).ready(function () {
    $('#menu-switch').click(function () {
        $(this).toggClass('.pc-nav')
    })
})