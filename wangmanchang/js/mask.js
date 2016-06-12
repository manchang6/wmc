define([],function(){
	function Mask(opt){
		this.parbox = opt?$(opt):$("body");
		this.maskHtml = '<div class="mask"></div>';
		/*
			 style="height:100%;width:100%;position:fixed;left:0;top:0;'+'background:rgba(0,0,0,.6);z-index:99"
		*/
	}
	Mask.prototype = {
		show : function(callBack){
			if($(".mask").length <= 0){
				this.Appmask();
				this.MaskEven(callBack);
			}
		},
		hide : function(callBack){
			$(".mask").remove();
			callBack && callBack();
		},
		Appmask : function(){
			$(this.maskHtml).appendTo(this.parbox);
		},
		MaskEven : function(callBack){
			var that = this;
			$(".mask").on("click",function(){
				that.hide(callBack);
			})
		}
	}
	return Mask;
})