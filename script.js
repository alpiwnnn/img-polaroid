$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()<100){
			$('.my_bttn').fadeIn(250);
		}
		else{
			$('.my_bttn').fadeOut(250);
		}
	});
	$('.my_bttn').click(function(){
		$('html,body').animate(
			{scrollTop:0},400
			);
	});
    if$(window.innerHeight >992){
});