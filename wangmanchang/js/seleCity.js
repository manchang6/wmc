define([],function(){

	function SeleCity(wrapBox){
		
	}
	SeleCity.prototype = {
		init : function(){
			this.cityDom();
			this.event();
		},
		cityAjax : function(url){
			var UrlData = '';
			$.ajax({
				url : url,
				dataType : "json",
				type : "get",
				async : false,
				success : function(e){
					UrlData = e;
				}
			})
			return UrlData;
		},
		cityDom : function(){
			
		},
		event : function(){
			
		},
		show : function(){
			this.init();
		}
	}
	//var filtCity = new SeleCity();
	return SeleCity;
})	