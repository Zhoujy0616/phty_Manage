$(document).ready(function() {
	if (typeof(EMPLOYEEFIX) != "undefined" && EMPLOYEEFIX) {
		$("#selectEmp").attr("disabled", "disabled");
	}

	$("#groupSelect").change(function() {
		groupSelect();
	});
});

//加载form模块
layui.use('form', function(){});
/**
 * 员工关联选择
 */
function groupSelect() {
	var groupId = $("#groupSelect").val();
	if (groupId != "") {
		$.ajax({
					url : PPATH + "/record/findEmps.do",
					data : {
						"groupId" : groupId
					},
					type : 'post',
					cache : false,
					dataType : 'json',
					success : function(data) {
						$("#selectEmp").find("option").remove();
						$("#selectEmp") .append("<option value=''>请选择</option>");
						if (data != null) {
							$.each(data, function(i, item) {
										$("#selectEmp") .append("<option value='" + item.employeeId + "'>" + item.trueName + "</option>");
									});
									
							$("#selectEmp").val(EMPLOYEEID);
							// 更新渲染
							var form = layui.form;
							form.render('select', 'empselect');
						}
					}
				});
	}
}