<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<style>
    .loginbox input{
        height:30px;
        line-height: 30px;
        text-indent:10px;
        margin-bottom: 10px;
    }
</style>
<script type="text/javascript">
//    $(function(){
//        $('.loginbox').css({'position':'absolute','left':($(window).width()-692)/2});
//        $(window).resize(function(){
//            $('.loginbox').css({'position':'absolute','left':($(window).width()-692)/2});
//        });
//
//
//    });
</script>
<html>
<head>
    <title></title>
</head>
<body style="background-color: #fff; >
<div class="x-box" style="align-items: center;">
    <div class="x-mid">
        <div class="loginbox" style="width: 200px; height: 110px;position: absolute;left: 0;right: 0;bottom: 0;top: 0;margin: auto">
            <form action="${pageContext.request.contextPath}/user/login" type="post">
                <div>
                    <div>
                        <input type="text" id="userLoginName" name="staffId" autocomplete="off" required
                               placeholder="请输入工号" font-size="12">
                    </div>
                </div>
                <div>
                    <input type="password" id="loginPwd" name="password" autocomplete="off" required
                           placeholder="请输入密码">

                </div>
                <p><font color="red">${msg}</font> </p>
                <div>
                    <button>
                        <font size="5px">登 录</font>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

</body>

</html>
