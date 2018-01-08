<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%@ include file="../include.nodialog.jsp"%>
<script src="${pageContext.request.contextPath}/js/newjs/jquery.jclock-1.2.0.js" type="text/javascript"></script>
<script type="text/javascript">
$(function(){	
	//顶部导航切换
	$(".nav li a").click(function(){
		$(".nav li a.selected").removeClass("selected");
		$(this).addClass("selected");
	});
	
	$('.jclock').jclock();

	//showTip("joke",2);
})




</script>
</head>
<body style="background:#4c7b91;">
 <div class="topleft">
     <a href="javascript:;" target="_parent"><img width="100px" height="50px" src="${pageContext.request.contextPath}/styles/css/images/logo.png" title="系统首页" /></a>
    </div>
    <div class="topright">
    <ul>
	    <%-- <li><label class='jclock'></label></li>
	    <li><span><img src="${path }/styles/css/images/help.png" title="帮助"  class="helpimg"/></span><a href="#">帮助</a></li>
	    <li><a href="#">关于</a></li> --%>
	    <li><a href="javascript:;" class='jclock'></a></li>
<%--	    <li><a href="javascript:;">${employee.groupName }</a></li>
	    <li><a href="${path}/employee/changepassword.do" target="mainFrame">修改密码</a></li>--%>
	    <li><a href="${pageContext.request.contextPath}" target="_parent">退出</a></li>
    </ul>
    </div>
</body>
</html>
