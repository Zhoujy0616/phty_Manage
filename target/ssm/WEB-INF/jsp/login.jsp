<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/js/jquery-1.8.3.js"></script>
    <script type="text/javascript">

        function Formsubmit() {
            if ($("#username").val() == '') {
                alert("用户名不能为空");
                return false;
            }
            if ($("#password").val() == '') {
                alert("密码不能为空");
                return false;
            }
            $("#form1").submit();
        }
    </script>

</head>
<body>
<input type="hidden" id="flag">
<div style="margin:0 auto;border:0px solid #000;width:300px;height:100px">
    <h2>登录页面</h2>
    <form action="${pageContext.request.contextPath}/login/queryNamePass" method="post" id="form1">
        账号:<input type="text" id="username" name="username"> <br>
        密码:<input type="password" id="password" name="password"> <br>
        <input id="btn" type="button" onclick="Formsubmit();" value="登录">
    </form>
</div>
</body>
</html>