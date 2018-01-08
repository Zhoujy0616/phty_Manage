layui.config({
	base : "js/"
}).use(['form','element','layer','jquery'],function(){
	var form = layui.form,
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		element = layui.element,
		$ = layui.jquery;

	//动态获取文章总数和待审核文章数量,最新文章
	$.get(webUrl + "/web/adam/api/v1/index/indexData",'JSON',
		function(data){
			var jsonObj = data.result;
			for(var key in jsonObj) {
				$("."+key+" span").text(jsonObj[key]);
			}
		}
	)
});
