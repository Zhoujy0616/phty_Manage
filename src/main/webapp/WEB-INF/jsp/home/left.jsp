<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%@ include file="../include.nodialog.jsp"%>
<script type="text/javascript">
	$(function() {
		//导航切换
		$(".menuson li").click(function() {
			$(".menuson li.active").removeClass("active")
			$(this).addClass("active");
		});

		$('.title').click(function() {
			var $ul = $(this).next('ul');
			$('dd').find('ul').slideUp();
			if ($ul.is(':visible')) {
				$(this).next('ul').slideUp();
			} else {
				$(this).next('ul').slideDown();
			}
		});
	})
	
	function onClickLink(url){
		parent.frames["mainFrame"].location.href=url;
	}
</script>
</head>
<body style="background: #f0f9fd;">

<dl class="leftmenu">

<c:forEach items="${menu }" var="parent">
	<c:if test="${parent.parentId==1 }">
		<dd>
		<div class="title">
		<span><img src="${pageContext.request.contextPath }/styles/css/images/leftico04.png" /></span>${parent.menuName }
		</div>
		<ul class="menuson">
		<c:forEach items="${menu }" var="child">
			<c:if test="${child.parentId!=1 && child.parentId==parent.menuId }">
				<li onclick="onClickLink('${pageContext.request.contextPath }${child.link }')"><cite></cite><a href="${pageContext.request.contextPath }${child.link }"
					target="mainFrame">${child.menuName}</a><i></i></li>
			</c:if>
		</c:forEach>
		</ul>
		</dd>
	</c:if>
</c:forEach>

</dl>

</body>
</html>
