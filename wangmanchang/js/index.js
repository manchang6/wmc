define([],function(){

	
	function HomeDom(wrapPar){
		var wrapStr = '<ul>{{contDom}}</ul>',
			wrapChild = '<li>'
                        	+'<h2>回龙观沃美影城</h2>'
                        	+'<p>昌平区回龙观预知东路30号华联商厦4层<span>5km</span></p>'
                        	+'<p><em>ATMOS</em></p>'
                    	+'</li>';
        $(wrapPar).append(wrapStr.replace(/\{\{contDom\}\}/g,wrapChild));
	}
	function HomeEvent(){
		$(".header .header-right").on("click",function(){
			console.log("more");
		})
	}

	var wrapPar = "#wrapper .scroller";
	HomeDom(wrapPar);
	HomeEvent();
})