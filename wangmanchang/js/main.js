define(["js/mask","js/index","js/filtCity","js/seleCity"],function(Mask,Index,FiltCity,SeleCity){
	var mask = new Mask();//遮罩层
	var filtCity = new FiltCity(".container");//进行筛选
	var seleCity = new SeleCity();//选择城市
	//单击选择城市
	$(".search .search-left").on("click",function(){
		if($(".appCity").length <= 0){
			mask.show(function(){
				$(".appCity").remove();
			});
			$(".mask").addClass("mask-on");
			seleCity.show();
		}
	})
	//单击筛选  调用City
	$(".search .search-right").on("click",function(){
		if($(".appCity").length <= 0){
			mask.show(function(){
				$(".appCity").remove();
			});
			$(".mask").addClass("mask-on");
			filtCity.show();
		}
	})
})