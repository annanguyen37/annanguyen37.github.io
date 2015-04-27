$(document).ready(function(){

	$("#roots-cover").hover(function() {
		$("#roots-cover").hide(800);
		$("#roots").fadeIn(1000);
	})
	// $("#roots").click(function() {
	// 	$("#roots").fadeOut();
	// 	$("#roots-cover").fadeIn();
	// })
	$("#powersave-cover").hover(function() {
		$("#powersave-cover").hide(800);
		$("#powersave").fadeIn(1000);
	})
	$("#cec-cover").hover(function() {
		$("#cec-cover").hide(800);
		$("#cec").fadeIn(1000);
	})

});