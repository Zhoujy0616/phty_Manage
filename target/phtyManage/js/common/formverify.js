//验证方法    后台用户验证
var form = layui.form;
function valverify_u(value, item) {
		
	var reg = /^ +| +$/g; //首尾不能有空格
	form.verify({
		userLoginName: function(value, item) {
			if (!value) {
				return '用户名不能为空!';
			}
			if (reg.test(value)) {

				return '用户名不能带有空格!';
			}
			if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
				return '用户名不能有特殊字符';
			}
			if (/(^\_)|(\__)|(\_+$)/.test(value)) {
				return '用户名首尾不能出现下划线\'_\'';
			}
		},
		userName: function(value, item) {
			if (!value) {
				return '姓名不能为空!';
			}
		},
		email: function(value, item) {
			if (!value) {
				return '邮箱不能为空!';
			}
		},
		email: [/^[a-zA-Z0-9._%-]+@([a-z0-9-]+\.)+[a-z]{2,4}$|^1[3|4|5|7|8]\d{9}$/, '邮箱格式不对'],
		roleId: function(value, item) {
			if (!value) {
				return '请选择角色!';
			}
		},
		loginPwd: function(value, item) {
			if (!value) {
				return '密码不能为空!';
			}
		},
		loginPwd: [
			/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
		],
		phone: [/^1[3|4|5|7|8]\d{9}$/, '请正确输入手机号码！']

	})

}
//字典验证
function valverify_d(value, item) {
	var reg = /^ +| +$/g; //首尾不能有空格
	form.verify({
		dictType: function(value, item) {
			if (!value) {
				return '字典类型不能为空!';
			}
			if (reg.test(value)) {

				return '字典类型不能带有空格!';
			}
		},
		dictCode: function(value, item) {
			if (!value) {
				return '字典编码不能为空!';
			}
			if (reg.test(value)) {

				return '字典编码不能带有空格!';
			}
		},
		dictValue: function(value, item) {
			if (!value) {
				return '字典值不能为空!';
			}
			if (reg.test(value)) {

				return '字典值不能带有空格!';
			}
		}
		
	})

}
//参数验证
function valverify_p(value, item){
	
	var reg = /^ +| +$/g; //首尾不能有空格
	form.verify({
		paramName: function(value, item) {
			if (!value) {
				return '参数类型不能为空!';
			}
			if (reg.test(value)) {

				return '参数类型不能带有空格!';
			}
		},
		paramCode: function(value, item) {
			if (!value) {
				return '参数编码不能为空!';
			}
			if (reg.test(value)) {

				return '参数编码不能带有空格!';
			}
		},
		systemId: function(value, item) {
			if (!value) {
				return '参数值不能为空!';
			}
			if (reg.test(value)) {

				return '参数值不能带有空格!';
			}
		}
		
	})

}
//角色验证
function valverify_role(value,item){
	form.verify({
	roleName:function(value,item){
		if(!value){
			return '角色名称不能为空!';
		}
		if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
			return '角色名称不能有特殊字符';
		}
		if(/(^\_)|(\__)|(\_+$)/.test(value)){
			return '角色名称首尾不能出现下划线\'_\'';
		}
		if(/^\d+\d+\d$/.test(value)){
			return '角色名称不能全为数字';
		}
	},
	roleCode:function(value,item){
		if(!value){
			return '角色编码不能为空!';
		}
	},
	})
}

//菜单添加验证
function valverify_menu(value,item){
	form.verify({
	labelName:function(value,item){
		if(!value){
			return '角色名称不能为空!';
		}
		if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
			return '角色名称不能有特殊字符';
		}
		if(/(^\_)|(\__)|(\_+$)/.test(value)){
			return '角色名称首尾不能出现下划线\'_\'';
		}
		if(/^\d+\d+\d$/.test(value)){
			return '角色名称不能全为数字';
		}
	},
	labelKey:function(value,item){
		if(!value){
			return '角色编码不能为空!';
		}
	},
	})
}


//任务 确认验证
function valverify_confirm(value,item){
	form.verify({
	taskResult:function(value,item){
		if(!value){
			return '执行结果不能为空!';
		}
	},
	executeTimes:function(value,item){
		if(!value){
			return '执行日期不能为空!';
		}
	}
	})
}

//银行验证
function valverify_bank(value,item){
	form.verify({
	bankName:function(value,item){
		if(!value){
			return '银行名称不能为空!';
		}
		if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
			return '银行名称不能有特殊字符';
		}
		if(/(^\_)|(\__)|(\_+$)/.test(value)){
			return '银行名称首尾不能出现下划线\'_\'';
		}
		if(/^\d+\d+\d$/.test(value)){
			return '银行名称不能全为数字';
		}
	},
	mobile:function(value,item){
		if(!value){
			return '支行名称不能为空!';
		}
	},
	bankNo:function(value,item){
		if(!value){
			return '银行账户不能为空!';
		}
	},
	})
}
//新建审批验证

function valverify_apply(value,item){
	form.verify({
	caseNo:function(value,item){
		if(!value){
			return '案件编号不能为空!';
		}
	},
	applicantName:function(value,item){
		if(!value){
			return '客户姓名不能为空!';
		}
	},
	appType:function(value,item){
		if(!value){
			return '审批类型不能为空!';
		}
	},
	sender:function(value,item){
		if(!value){
			return '抄送人不能为空!';
		}
	},
	fileName:function(value,item){
		if(!value){
			return '文件名称不能为空!';
		}
	},
	fileUse:function(value,item){
		if(!value){
			return '银行账户不能为空!';
		}
	}
	})
}

//新建外勤验证
function valverify_outwork(value,item){
	form.verify({
	caseNoSelect:function(value,item){
		if(!value){
			return '案件编号不能为空!';
		}
	},
	lawyerName:function(value,item){
		if(!value){
			return '律师姓名不能为空!';
		}
	},
	partiesName:function(value,item){
		if(!value){
			return '客户姓名不能为空!';
		}
	},
	partiesPhone:function(value,item){
		if(!value){
			return '客户电话不能为空!';
		}
	},
	caseTheme:function(value,item){
		if(!value){
			return '案由不能为空!';
		}
	},
	caseTypeNM:function(value,item){
		if(!value){
			return '案件类型不能为空!';
		}
	},
	jobName:function(value,item){
		if(!value){
			return '外勤名称不能为空!';
		}
	},
	jobAddress:function(value,item){
		if(!value){
			return '外勤地点不能为空!';
		}
	},
	jobType:function(value,item){
		if(!value){
			return '委托人不能为空!';
		}
	},
	baileePhone:function(value,item){
		if(!value){
			return '外勤类型不能为空!';
		}
	},
	jobDockingPerson:function(value,item){
		if(!value){
			return '执行日期不能为空!';
		}
	},
	})
}

//新开案件验证
function valverify_case(value,item){
	var reg = /^ +| +$/g; //首尾不能有空格
	form.verify({
	partiesName:function(value,item){
		if(!value){
			return '客户姓名不能为空!';	
		}
		if (reg.test(value)) {

				return '客户姓名不能带有空格!';
		}
		if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
				return '客户姓名不能有特殊字符';
		}
		if (/(^\_)|(\__)|(\_+$)/.test(value)) {
				return '客户姓名首尾不能出现下划线\'_\'';
		}
		if (/^\d+\d+\d$/.test(value)) {
				return '客户姓名不能全为数字';
		}
	},
	caseType:function(value,item){
		if(!value){
			return '请选择案件类型!';
		}
	},
	lawyerNameSelect:function(value,item){
		if(!value){
			return '请选择律师姓名!';
		}
	},
	lawyerMobile:function(value,item){
		if(!value){
			return '律师电话不能为空!';
		}
	},
	partiesRoles:function(value,item){
		if(!value){
			return '请选择客户角色!';
		}
	},
	caseTheme:function(value,item){
		if(!value){
			return '案由不能为空!';
		}
	},
	relatedName:function(value,item){
		if(!value){
			return '相关方不能为空!';
		}
	},
	oppositeName:function(value,item){
		if(!value){
			return '相对方不能为空!';
		}
	},
	bailee:function(value,item){
		if(!value){
			return '委托人不能为空!';
		}
	    if (reg.test(value)) {

			return '委托人不能带有空格!';
		}
		if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
			return '委托人不能有特殊字符';
		}
		if (/(^\_)|(\__)|(\_+$)/.test(value)) {
			return '委托人首尾不能出现下划线\'_\'';
		}
		if (/^\d+\d+\d$/.test(value)) {
			return '委托人不能全为数字';
		}
	},
	manageDepart:function(value,item){
		if(!value){
			return '管辖部门不能为空!';
		}
	},
	})
}
//律师列表编辑页面
function valverify_lawyer(value,item){
	form.verify({
	address:function(value,item){
		if(/^\d+\d+\d$/.test(value)){
			return '地址不能全是数字!请正确输入';
		}
	},
	sex:function(value,item){
		if(!value){
			return '请选择性别!';
		}
	},
	wechatNo:function(value,item){
		if(!value){
			return '微信号不能为空!';
		}
		if (/^\d+\d+\d$/.test(value)) {
			return '微信号不能全为数字';
		}
	},
	workLanguAge:function(value,item){
		if(!value){
			return '请选择语言!';
		}
		
	},
	belongClerk:[
	      /^[\u4e00-\u9fa5]{2,4}$/,'姓名输入的格式错误!'
	],
	qqNo:[
		  RegExp(/^[1-9][0-9]{4,9}$/),'qq号码格式错误!'
		  
	],
	lawOfficePhone:[
	      /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/,'电话号码格式错误，必须带区号  - 分割'
	]
		
	})
}
//当事人列表页面
function valverify_user_side(value,item){
	form.verify({
	address:function(value,item){
		if(/^\d+\d+\d$/.test(value)){
			return '地址不能全是数字!请正确输入';
		}
	},
	weiboNo:function(value,item){
		if(!value){
			return '微博账号不能为空!';
		}
	},
	wechatNo:function(value,item){
		if(!value){
			return '微信号不能为空!';
		}
		if (/^\d+\d+\d$/.test(value)) {
			return '微信号不能全为数字';
		}
	},
	qqNo:[
		  RegExp(/^[1-9][0-9]{4,9}$/),'qq号码格式错误!'
		  
	],
	lawOfficePhone:[
	      /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/,'电话号码格式错误，必须带区号  - 分割'
	]
		
	})
}