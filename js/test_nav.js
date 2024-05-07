$(document).ready(() => {
    $('.hamBar').click(function (e) {
        e.preventDefault();
        //本次改成：
        $('.header__nav').toggleClass('show');
    })
    $('.header__nav li a').click(function () {
        //本次改成：
        $('.header__nav').removeClass('show');
    })
});