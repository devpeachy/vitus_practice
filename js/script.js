$(document).ready(function() {
    $('.close__top-bar').click(function(event){
        $('.top-bar').toggleClass('active');
    })
})

$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__mobile-nav').toggleClass('active');
        $('body').toggleClass('lock');
        $('.basket__mobile').toggleClass('dn');
    })
})

$(document).ready(function() {
    $('.navigation__item-arrow-1').click(function(event){
        $('.navigation__item-preview-1,.navigation__item-content-1').toggleClass('active');
    })
    $('.navigation__item-arrow-2').click(function(event){
        $('.navigation__item-preview-2,.navigation__item-content-2').toggleClass('active');
    })
    $('.navigation__item-arrow-3').click(function(event){
        $('.navigation__item-preview-3,.navigation__item-content-3').toggleClass('active');
    })
    $('.navigation__item-arrow-4').click(function(event){
        $('.navigation__item-preview-4,.navigation__item-content-4').toggleClass('active');
    })
    $('.navigation__item-arrow-5').click(function(event){
        $('.navigation__item-preview-5,.navigation__item-content-5').toggleClass('active');
    })
})


