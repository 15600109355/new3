define(['jquery'],function($){
	/*$(".nav1 ul").on("click","li",function(){
		$(this).addClass(".border").siblings().removeClass(".border");
	})*/
	$( ".content1 dt" ).click( function(){
		$( this ).siblings().show();
		$( this ).parent().siblings().find( "dd" ).hide();
	});
	$(".circle").on("click",function(){
		$(".left").toggleClass("shower")
	})
})