$(document).ready(function () {
    $(".selectO").uedSelect({
        width : 167
    });

    loadCompany();

    if(COMPANYIDFIX){
        $("#companySelect").attr("disabled","disabled");
    }

    if(CENTERIDFIX){
        $("#centerSelect").attr("disabled","disabled");
    }

    if(typeof(DEPARTMENTIDFIX)!="undefined" && DEPARTMENTIDFIX){
        $("#departmentSelect").attr("disabled","disabled");
    }

    if(typeof(GROUPIDFIX)!="undefined" && GROUPIDFIX){
        $("#groupSelect").attr("disabled","disabled");
    }

    $("#companySelect").change(function(){
        companySelect();
    });

    $("#centerSelect").change(function(){
        centerSelect();
    });

    $("#departmentSelect").change(function(){
        departmentSelect();
    });

});

function loadCompany(){
    $.ajax({
        url : PPATH+"/organization/companyList.do",
        data : {},
        type : 'post',
        cache : false,
        dataType : 'json',
        success : function(data) {
            $("#companySelect").find("option").remove();
            $("#companySelect").append("<option value=''>请选择公司</option>");
            if(data!=null){
                $.each(data,function(i,item){
                    $("#companySelect").append("<option value='"+item.companyId+"'>"+item.companyName+"</option>");
                });

                $("#companySelect").val(COMPANYID);
                $("#companySelect").change();
            }
        },
        error : function() {
            //alert("异常！");
        }
    });
}

function companySelect(){
    var companyId = $("#companySelect").val();
    if(companyId!=-1){
        $.ajax({
            url : PPATH+"/organization/centerList.do",
            data : {"companyId":companyId},
            type : 'post',
            cache : false,
            dataType : 'json',
            success : function(data) {
                $("#centerSelect").find("option").remove();
                $("#centerSelect").append("<option value=''>请选择中心</option>");
                $("#departmentSelect").find("option").remove();
                $("#departmentSelect").append("<option value=''>请选择部门</option>");
                $("#groupSelect").find("option").remove();
                $("#groupSelect").append("<option value=''>请选择小组</option>");
                if(data!=null){
                    $.each(data,function(i,item){
                        $("#centerSelect").append("<option value='"+item.centerId+"'>"+item.centerName+"</option>");
                    });

                    $("#centerSelect").val(CENTERID);
                    $("#centerSelect").change();
                }
            },
            error : function() {
                //alert("异常！");
            }
        });
    }
}

function centerSelect(){
    var centerId = $("#centerSelect").val();
    if(centerId!=-1){
        $.ajax({
            url : PPATH+"/organization/departmentListByCenterId.do",
            data : {"centerId":centerId},
            type : 'post',
            cache : false,
            dataType : 'json',
            success : function(data) {
                $("#departmentSelect").find("option").remove();
                $("#departmentSelect").append("<option value=''>请选择部门</option>");
                $("#groupSelect").find("option").remove();
                $("#groupSelect").append("<option value=''>请选择小组</option>");
                if(data!=null){
                    $.each(data,function(i,item){
                        $("#departmentSelect").append("<option value='"+item.departmentId+"'>"+item.departmentName+"</option>");
                    });

                    $("#departmentSelect").val(DEPARTMENTID);
                    $("#departmentSelect").change();
                }
            },
            error : function() {
                //alert("异常！");
            }
        });
    }
}

function departmentSelect (){
    var departmentId = $("#departmentSelect").val();
    if(departmentId!=-1){
        $.ajax({
            url : PPATH+"/organization/groupList.do",
            data : {"departmentId":departmentId},
            type : 'post',
            cache : false,
            dataType : 'json',
            success : function(data) {
                $("#groupSelect").find("option").remove();
                $("#groupSelect").append("<option value=''>请选择小组</option>");
                if(data!=null){
                    $.each(data,function(i,item){
                        $("#groupSelect").append("<option value='"+item.groupId+"'>"+item.groupName+"</option>");
                    });

                    $("#groupSelect").val(GROUPID);
                    $("#groupSelect").change();
                }
            },
            error : function() {
                //alert("异常！");
            }
        });
    }
}