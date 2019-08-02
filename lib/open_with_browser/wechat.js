(function(){
	if (navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger"){
		var div = document.createElement("div");
		div.setAttribute("style", "position:fixed;top:0;left:0;width:100%;z-index:999;background-color:rgba(0,0,0,0.7);filter:alpha(opacity=70);height:" + window.innerHeight + "px;");
		div.innerHTML = "<img style='width:80%;position:absolute;top:0;right:0' src='https://xazeng.github.io/lib/open_with_browser/wechat.png' alt='请点击右上角菜单，选择在浏览器打开。' />";
		document.body.appendChild(div);
	}
})();


