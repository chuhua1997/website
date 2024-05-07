// // 點按漢堡會出現選單
// $(document).ready(function () {
//     $('#menu-switch').click(function () {
//         // alert($('.nav-selector').hasClass('show-menu'))
//         $('.nav-selector').toggleClass('show-menu');

//         // $('.show-menu').toggle()
//     });
// });

// const hamburger = document.querySelector('.hb');
// const navSelector = document.querySelector('.nav-selector');

// // 添加點擊事件監聽器
// hamburger.addEventListener('click', function () {
//     // 切換 nav-selector 元素的顯示狀態
//     navSelector.classList.toggle('show-menu');
// });

$(document).ready(() => {
    $('.nav_hab').click(function () {
        //展開或收起來
        $('.nav-selector').slideToggle(600);

    })
    $('.nav-selector li a').click(function () {
        //收起來
        $('.nav-selector').slideUp(600);
        //以下是滾動動畫
        var sectionTitle = this.title;
        console.log(sectionTitle);
        var sectionId = "#section--" + sectionTitle;
        console.log(sectionId);
        var scrollPoint = $(sectionId).offset().top;
        var lastScrollPoint = scrollPoint - 100;
        $("html,body").animate({ scrollTop: lastScrollPoint }, 800);
    })
});

