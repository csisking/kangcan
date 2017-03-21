var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
});


$("#j-menu-technical").hover(function(){
	$("#j-technical-hover").show();
});

$("#j-menu-technical").mouseleave(function() {
    $("#j-technical-hover").hide();
});