<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<head>
    <meta charset="utf-8">
    <title>普惠添翼后台管理</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">
    <link rel="icon" href="images/wanglv.ico" type="image/x-icon"/>
    <link rel="stylesheet" href="plugins/layui2.x/css/layui.css" media="all" />
    <link rel="stylesheet" href="plugins/layui/css/layui.css" media="all" />
    <link rel="stylesheet" href="css/global.css" media="all">
    <link rel="stylesheet" href="plugins/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/main.css" />
</head>
<style>
    .layui-layer-iframe .layui-layer-btn{
        padding-top: 10px;
        text-align: center;
    }
    .layui-show {
        -webkit-overflow-scrolling: touch;
        overflow-y: scroll;
    }
</style>
<body>
<div class="layui-layout layui-layout-admin" style="border-bottom: solid 5px #1aa094;">
    <div class="layui-header header">
        <div class="layui-main">
            <a class="logo">普惠添翼后台管理</a>
            <div class="admin-login-box">
                <div class="admin-side-toggle">
                    <i class="fa fa-bars" aria-hidden="true" title="显示/隐藏边栏"></i>
                </div>
                <div class="admin-side-full">
                    <i class="fa fa-life-bouy" aria-hidden="true" title="窗口最大化"></i>
                </div>
            </div>
            <ul class="layui-nav admin-header-item">
                <button class="layui-btn layui-btn-normal"  id="clearCached" style="line-height:28px;"><i class="layui-icon">&#xe640;</i>清除缓存</button>
                <li class="layui-nav-item">
                    <a href="javascript:;" class="admin-header-user">
                        <img src="images/wanglvlogo.png" />
                        <span id="userLoginName"></span>
                    </a>
                    <dl class="layui-nav-child">
                        <!--<dd>
                            <a href="javascript:;"><i class="fa fa-user-circle" aria-hidden="true"></i> 个人信息</a>
                        </dd>-->
                        <dd>
                            <a href="javascript:;" id="pass"><i class="layui-icon">&#xe614;</i>修改密码</a>
                        </dd>
                        <dd>
                            <a href="javascript:;" onclick="logout()"><i class="fa fa-sign-out" aria-hidden="true"></i> 注销</a>
                        </dd>
                    </dl>
                </li>
            </ul>
            <!--<ul class="layui-nav admin-header-item-mobile">
                <li class="layui-nav-item">
                    <a href="login.html"><i class="fa fa-sign-out" aria-hidden="true"></i> 注销</a>
                </li>
            </ul>-->
        </div>
    </div>
    <div class="layui-side layui-bg-black" id="admin-side">
        <div class="layui-side-scroll" id="admin-navbar-side" lay-filter="side"></div>
    </div>
    <div class="layui-body" style="bottom: 0;border-left: solid 2px #1AA094;" id="admin-body">
        <div class="layui-tab admin-nav-card layui-tab-brief" lay-filter="admin-tab">
            <ul class="layui-tab-title">
                <li class="layui-this">
                    <i class="fa fa-dashboard" aria-hidden="true"></i>
                    <cite>控制面板</cite>
                </li>
            </ul>
            <div class="layui-tab-content" style="min-height: 150px; padding: 5px 0 0 0;">
                <div class="layui-tab-item layui-show ">
                    <iframe src="main_new.html"></iframe>
                </div>
            </div>
        </div>
    </div>
    <!--<div class="layui-footer footer footer-demo" id="admin-footer">
        <div class="layui-main">
            <p>2016 &copy;
                <a href="http://m.zhengjinfan.cn/">m.zhengjinfan.cn/</a> LGPL license
            </p>
        </div>
    </div>-->
    <div class="site-tree-mobile layui-hide">
        <i class="layui-icon">&#xe602;</i>
    </div>
    <div class="site-mobile-shade"></div>
    <script type="text/javascript" src="plugins/layui/layui.js"></script>
    <script type="text/javascript" src="plugins/layui/jquery-2.0.3.js"></script>
    <script type="text/javascript" src="js/http.js"></script>
    <script src="js/index.js"></script>

</div>
</body>
<script>

    $('#pass').click(function(){
        layer.open({
            skin: 'layui-layer-molv', //样式类名，
            title: '修改密码',
            shade: 0.8,
            type: 2,
//				btn:['修改','取消'],
            content: './html/index/edit.html',
            zIndex: 19950924,
            maxmin: true,
            area: ['400px', '400px'],

        });
    })
    function logout() {
        layer.confirm('确认要退出？', {
                title: "警告",
                icon:3,
                skin: 'layui-layer-molv', //样式类名，
                btn: ['退出', '取消'] //按钮
            },
            function() {
                var flag = false;
                $.ajax({
                    crossDomain: true,
                    xhrFields: {
                        withCredentials: true
                    },
                    async: false,
                    //url: webUrl +"/web/adam/api/v1/loginOut?t=" + new Date().getTime(),
                    type: 'get',
                    dataType: 'JSON',
                    success: function(resultData) {
                        if(resultData.retCode == '0000') {
                            flag = true;
                        } else {
                            layer.alert(resultData.result);
                        }
                    }
                });
                if(flag) {
                    location.href = './login.html';
                }
            });
    }
</script>

</html>
