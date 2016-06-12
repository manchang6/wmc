require.config({
	baseUrl : "../weipiaoer",
	paths : {
		zepto : "lib/zepto.min",
		swiper : "lib/swiper.min",
		jquery : "jquery-2.1.1",
		main : "js/main"
	}
})
define(["swiper","zepto","main"],function(Swiper,$,main){
	var swiper = new Swiper('.swiper-container');
})