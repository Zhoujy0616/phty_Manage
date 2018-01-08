function flow(data) {
	open('flow/flow.html', "查看流水", '关闭', ['10px', '5%'], ['90%', '90%'], function(index) {
		layer.close(index); //关闭弹窗
	}, function(layero, index) {}, function(layero, index) {
		$("#h2Html").html('案件编号:[' + data.caseNo + "]<br>案件类型:[" + data.caseTypeNM + "]<br>律师姓名:[" + data.lawyerName + "]");
		$.ajax({
			url: webUrl + '/web/adam/api/v1/cases/' + data.id + '/flows?t=' + new Date().getTime(),
			async: 'false',
			dataType: 'JSON',
			success: function(data_d) {
				var htmlT = '';
				var r = data_d.result;
				for(var i in r) {
					var d = r[i];
					htmlT +=
						'<li class="layui-timeline-item">' +
						'<i class="layui-icon layui-timeline-axis">&#xe63f;</i>' +
						'<div class="layui-timeline-content layui-text">' +
						'<h3 class="layui-timeline-title">' + d.nodeName + '&nbsp;&nbsp;&nbsp;&nbsp;' + d.nodeCreateTime + '</h3>';
					var dList = d.voDetailList;
					for(var j in dList) {
						var dl = dList[j];
						htmlT +=
							'<ul>' +
							'<li><h3>类型:' + dl.detailType + '&nbsp;&nbsp;&nbsp;&nbsp;' + dl.detailCreateTime + '</h3></li>' +
							'<li>标题:' + dl.detailTitle + '</li>' +
							'<li>内容:' + dl.detailContent + '</li>' +
							'<li>附件:</li>';
						var f = dl.voFiles;
						for(var h in f) {
							var hl = f[h];
							if(hl.detailFileUrl && hl.detailFileUrl != '') {
								htmlT += '<a href="' + hl.detailFileUrl + '" target="_blank" >' + hl.detailFileName + "</a> &nbsp;&nbsp;&nbsp;";
							}
						}
						htmlT += '<br/></ul>';
					}
					'</div></li>';
				}
				$("#uiList").append(htmlT);
			}
		})
	})

}