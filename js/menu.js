$(".n-head-wrap li").hover(function(){
	$("#j-technical-hover").hide();
});

$("#j-menu-technical").hover(function(){
	$("#j-technical-hover").show();
});

// $("#j-menu-technical").mouseleave(function() {
//     $("#j-technical-hover").hide();
// });

$(".u-hover1").click(function() {
    location.href = "./technical_1.html"
});

$(".u-hover2").click(function() {
    location.href = "./technical_2.html"
});

$("#j-technical-hover").mouseleave(function() {
	$(this).hide();
});