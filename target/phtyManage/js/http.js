//var webUrl="";
var webUrl = "http://192.168.159.1:8080";  //本地
$(function() {
	$.ajaxSetup({
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			if(XMLHttpRequest.status == 403 || textStatus == 'error') {
				layer.msg('登录超时，确认返回登录页面！', {
					time: 0, //不自动关闭
					btn: ['确认'],
					yes: function(index) {
						layer.close(index);
						location.href = "/";
						return false;
					}
				});
			}
		}
	});

});

/***打开新页面 填写对应的实参
 * *
 * 1,ohtml 是 引入文件名称地址
 * 2,otitle 标题
 * 3,obtn 按钮名称
 * 4,ofset 弹出层的位置
 * 5,wh 宽高
 * 6, callback_yes 按钮回调1
 * 7,callback_btn  按钮回调2
 * 8,_callback open的回调函数
 * 
 * 
 * 
 * ***/
function open(ohtml, otitle, obtn, ofset, wh, callback_yes, callback_btn, _callback) {
	$.get(ohtml, null, function(form) {
		layer.open({
			type: 1,
			title: otitle,
			content: form,
			btn: obtn,
			offset: ofset,
			area: wh,
			zIndex: 1,
			maxmin: true,
			skin: 'layui-layer-molv', //样式类名，
			yes: callback_yes,
			btn2: callback_btn,
			success: _callback

		});
	});
}

//打开新页面
function openHref(url, title) {
	var perContent = layer.open({
		title: title,
		skin: 'layui-layer-molv', //样式类名，
		type: 2,
		content: url,
		zIndex: 19950924,
		maxmin: true,
		area: ['700px', '450px']
	});
	layer.full(perContent); //默认最大化
}
/**
 * 说明：判断页面按钮是否满足当前用户权限 
 * userList.html 下有标签按钮： <button id="add" >新增</button>
 * 使用示例： checkBtnShow("userList","add",layui.jquery);
 */
var buttonPers;
function checkBtnShow(htmlName, btnId) {
	var $ = layui.jquery;
	if(!buttonPers) {
		$.ajax({
			type: "get",
			async: false,
			url: webUrl + "/web/adam/api/v1/role/buttonPers",
			success: function(res) {
				if(res.retCode == '0000') {
					buttonPers = res.result;
				}
			}
		});
	}
	if(buttonPers) {
		var res = buttonPers[htmlName + '_' + btnId];
		if(!res) {
			$("#" + btnId).css('display', 'none');
			return false;
		}
		return true;
	}

}

/**
 * 说明：判断页面按钮是否满足当前用户权限 
 * userList.html 下有标签按钮： <button id="add" >新增</button>
 * 使用示例： checkBtnShow("userList",["add","edit","del"],layui.jquery);
 */
function checkBtnArrayShow(htmlName, btnIds) {
	var $ = layui.jquery;
	if(!buttonPers) {
		$.ajax({
			type: "get",
			async: false,
			url: webUrl + "/web/adam/api/v1/role/buttonPers",
			success: function(res) {
				if(res.retCode == '0000') {
					buttonPers = res.result;
				}
			}
		});
	}
	for(i in btnIds) {
		var btnId = btnIds[i];
		if(buttonPers) {
			var res = buttonPers[htmlName + '_' + btnId];
			if(!res) {
				$("#" + btnId).css('display', 'none');
			}
		}
	}
}

/**
 * 获取href ？后参数 
 * 使用示例 ../html/userList.html?name=nihao  获取name值    queryHrefParam('name')  =>nihao
 * @param {Object} item
 */
function queryHrefParam(param_name) {
	var svalue = location.search.match(new RegExp("[\?\&]" + param_name + "=([^\&]*)(\&?)", "i"));
	return svalue ? decodeURI(svalue[1]) : decodeURI(svalue);
}