define([],function(){

	function FiltCity(wrapBox){
		console.log(wrapBox);
		this.wrapBox = wrapBox?$(wrapBox):$("body");
		this.wrapDom = '<div class="appCity">'
				            +'<div class="city-left">{{cLeft}}</div>'
				            +'<div class="city-right">'
				                +'<p class="city-all">全部</p>'
				                +'<ul>{{cRight}}</ul>'
				            +'</div>'
				        +'</div>';
		this.cLeft_str = '';
		this.cRight_str = '';
		this.data_Cinema = '';
	}
	FiltCity.prototype = {
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
			var that = this;
			that.data_Cinema = this.cityAjax("data/cinema.json");
			$.each(that.data_Cinema,function(k,v){
				that.cLeft_str += '<p>区域</p>';
				that.cRight_str += ' <li>'
				                         +'<p class="region-list">朝阳区<span>(42家)</span></p>'
				                         +'<ul class="ui-cityList">'
				                             +'<li>朝阳区1</li>'
				                             +'<li>朝阳区1</li>'
				                         +'</ul>'
				                     +'</li>';
			})
			var newWrapDom = this.wrapDom.replace(/\{\{cLeft\}\}/g,that.cLeft_str).replace(/\{\{cRight\}\}/g,that.cRight_str);
			that.wrapBox.append(newWrapDom);  
		},
		event : function(){
			
			$(".appCity .city-left").on("click","p",function(){
				$(this).addClass("selCity-On").siblings("p").removeClass("selCity-On");
			})
			$(".appCity .city-right").on("click",".region-list",function(){
				console.log(111)
				$(".appCity .region-list").parent("li").removeClass("selUi-on");
				$(this).parent("li").addClass("selUi-on");
			})
		},
		show : function(){
			this.init();
		}
	}
	//var filtCity = new FiltCity();
	return FiltCity;
})	