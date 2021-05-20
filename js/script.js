// JavaScript Document

$(".nav>li").mouseover(function(){
	$(".submenu").stop().slideDown();
});
$(".nav>li").mouseleave(function(){
	$(".submenu").stop().slideUp();
});

function slideshow(){
	$(".slide").animate({"margin-top":"-300px"},300,function(){
		$(".slide li:first").appendTo(".slide");
		$(".slide").css("margin-top",0);
	});
}
setInterval(slideshow,3000);

$(".tab h2").click(function(){
	$(this).addClass("on").next().show();
	$(this).parent("div").siblings("div").children("h2").removeClass("on").next().hide();
});

$(".popupWindow").on('click',function(e){
	e.preventDefault();
	$(".popup").fadeIn();
});
$(".close button").on('click',function(){
	$(".popup").fadeOut();
});