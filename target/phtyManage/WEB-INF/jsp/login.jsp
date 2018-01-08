<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>登录</title>

    <link rel="stylesheet" href="./plugins/layui2.x/css/layui.css" media="all" />
    <link rel="stylesheet" href="./css/login.css" />
    <link rel="stylesheet" href="./css/x-admin.css" media="all">
</head>
<body style="background-color: #393D49">
<div class="x-box">

    <div class="x-mid">
        <div class="x-avtar">
            <img src="./images/wanglvlogo.png" alt="">
        </div>
        <div class="input">
            <form class="layui-form">
                <div class="layui-form-item x-login-box">
                    <label for="userLoginName" class="layui-form-label">
                        <i class="layui-icon">&#xe612;</i>
                    </label>
                    <div class="layui-input-inline">
                        <input type="text" id="userLoginName" name="staffId"  lay-verify="userLoginName" autocomplete="off" required placeholder="请输入用户名或手机号" font-size="12" class="layui-input">
                    </div>
                </div>
                <div class="layui-form-item x-login-box">
                    <label for="loginPwd" class="layui-form-label">
                        <i class="layui-icon">&#xe628;</i>
                    </label>
                    <div class="layui-input-inline">
                        <input type="password" id="loginPwd" name="password" lay-verify="loginPwd" autocomplete="off" required placeholder="请输入密码" class="layui-input">
                    </div>
                </div>
                <div class="layui-form-item" id="loginbtn" >
                    <button class="layui-btn" lay-filter="save" type="button" lay-submit>
                        <font size="5">登 录</font>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<script type="text/javascript" src="plugins/layui/layui.js"></script>
<script type="text/javascript" src="plugins/layui/jquery-2.0.3.js"></script>
<script type="text/javascript" src="js/http.js"></script>
<script>
    $(function() {
        $("#userLoginName").focus();//获取焦点
        layui.use('form', function() {
            var form = layui.form();
            //监听指定开关
            form.on('switch(switchTest)', function(data){
                layer.msg('开关checked：'+ (this.checked ? 'true' : 'false'), {
                    offset: '6px'
                });
                layer.tips('温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF', data.othis)
            });
            //监听提交
            $('#loginbtn').click(function() {
                form.verify({
                    userLoginName:function(value,item){
                        if(!value){
                            return '用户名不能为空!';
                        }
                        if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
                            return '用户名不能有特殊字符';
                        }
                        if(/(^\_)|(\__)|(\_+$)/.test(value)){
                            return '用户名首尾不能出现下划线\'_\'';
                        }
                    },
                    loginPwd:function(value,item){
                        if(!value){
                            return '密码不能为空!';
                        }
                    },
                    loginPwd:[
                        /^[\S]{6,12}$/
                        ,'密码必须6到12位，且不能出现空格'
                    ]

                })
                form.on('submit(save)', function(data) {
                    var flag = false;
                    $.ajax({
                        async: false,
                        url: "${pageContext.request.contextPath}/user/login",
                        type: 'post',
                        dataType: 'JSON',
                        data: data.field,
                        success: function(resultData) {
                            if(resultData.msg == '0000') {
                                flag = true;
                            } else {
                                layer.msg(resultData.msg,{
                                    icon:2,
                                    skin: 'layui-layer-molv', //样式类名，
                                });
                            }
                        }
                    });
                    if(flag) {
                        location.href = 'index.jsp';
                    }
                    return false;
                });
            })
        });
    })

</script>
</body>

</html>
