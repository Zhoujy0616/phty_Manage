/**
 * 资源分发员工弹窗通知
 */
$(document).ready(function() {
	checkAllocation();
});

// 检查资源分配动态
function checkAllocation() {
	$
			.ajax({
				url : PPATH + "/allocation/messages.do",
				type : 'post',
				async : false,
				cache : false,
				dataType : 'json',
				success : function(data) {
					if (data != null && data.length != 0) {
						for (var i = 0; i < data.length; i++) {
							// 判断html元素是否存在
							if ($("#message_content_" + data[i].id).length > 0) {
								continue;
							}
							// 弹窗
							var dialogHtml = "<div id='message_content_"
									+ data[i].id
									+ "' class='message-content layui-anim layui-anim-up'>"
									+ "<div class='message-dialog-title'>"
									+ "<span class='message-title-text'>";
							if (data[i].messageType == 1) {
								dialogHtml += "自动下发";
							} else if (data[i].messageType == 2) {
								dialogHtml += "手动下发";
							} else if (data[i].messageType == 3) {
								dialogHtml += "新资源触发";
							}

							dialogHtml += "</span>" + "</div>"
									+ "<div class='message-main-panel'>"
									+ "<span><b>资源类别：</b>"
									+ data[i].resourceType + "</span>";

							if (data[i].messageType == 1) {
								dialogHtml += "<span><b>用 户 ID：</b>"
										+ data[i].userid + "</span>";
							} else if (data[i].messageType == 2) {
								dialogHtml += "<span><b>资源数量：</b>"
										+ data[i].resourceCount + "个</span>";
							} else if (data[i].messageType == 3) {
								dialogHtml += "<span><b>用 户 ID：</b>"
										+ data[i].userid + "</span>";
							}

							dialogHtml += "<div class='message-dialog-btn'>"
									+ "<input type='button' class='layui-btn layui-btn-sm layui-btn-normal' value='查看' onclick='yesBtnClick("
									+ data[i].id
									+ ","
									+ data[i].messageType
									+ ",\""
									+ data[i].userid
									+ "\")' />"
									+ "<input type='button'  class='layui-btn layui-btn-sm layui-btn-primary' value='关闭' onclick='noBtnClick("
									+ data[i].id + ")' />"
									+ "</div></div></div>";

							// 追加弹窗
							$("#messageDialog").append(dialogHtml);
						}
					}
				}
			});
}

// 更新通知已阅标志
function updateReadFlag(id) {
	var result = null;
	$.ajax({
		url : PPATH + "/allocation/updateReadFlag.do",
		type : 'post',
		async : false,
		cache : false,
		dataType : 'json',
		data : {
			"id" : id
		},
		success : function(data) {
			result = data;
		}
	});
	return result;
}

// 弹窗去查看点击事件
function yesBtnClick(id, messageType, userid) {
	var reslut = updateReadFlag(id);
	if (reslut == 1) {
		// 下滑后移除
		$("#message_content_" + id).animate(
				{
					height : 'toggle'
				},
				500,
				function() {
					$("#message_content_" + id).remove();
					// 消息类型 1自动下发；2手动下发；3新资源触发
					if (messageType == 1 || messageType == 2) {
						window.open(PPATH + "/resourceLogPage/list.do ");
					} else if (messageType == 3) {
						window.open(PPATH + "/userInfor/userDetail.do?userId="
								+ userid);
					}
				});
	}
}

// 弹窗关闭点击事件
function noBtnClick(id) {
	var reslut = updateReadFlag(id);
	if (reslut == 1) {
		// 下滑后移除
		$("#message_content_" + id).animate({
			height : 'toggle'
		}, 500, function() {
			$("#message_content_" + id).remove();
		});
	}
}

// 定时器(2分钟检查一次通知消息)
/*setInterval(function() {
	checkAllocation();
}, 1000 * 60 * 1);*/
