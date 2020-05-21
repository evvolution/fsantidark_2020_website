
/*
    note：第三页控制
    anthor：zx
*/

function initFile() {
    $("#prjvideo").fileinput({
        language: "zh",//配置语言
        showUpload : false, //显示整体上传的按钮
        showRemove : false, //显示整体删除的按钮
        uploadAsync: true, //默认异步上传
        dropZoneEnabled: false,
        showPreview: false,
        maxFileSize : 2097152,//文件大小限制
        maxFileCount: 100,//允许最大上传数，可以多个，
        enctype: 'multipart/form-data',
        allowedFileExtensions : ["mov", "mp4", "mpeg"],/*上传文件格式限制*/
        msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
        // uploadUrl: commonlink + 'hei_up',
    });

    $("#prjcover").fileinput({
        language: "zh",//配置语言
        showUpload : false, //显示整体上传的按钮
        showRemove : false, //显示整体删除的按钮
        uploadAsync: true, //默认异步上传
        uploadLabel: "上传", //设置整体上传按钮的汉字
        dropZoneEnabled: false,
        showPreview: false,
        maxFileSize : 2097152,//文件大小限制
        maxFileCount: 100,//允许最大上传数，可以多个，
        enctype: 'multipart/form-data',
        allowedFileExtensions : ["png", "jpg"],/*上传文件格式限制*/
        msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
    });
}

function initLiteswitch() {
    liteswitch = new liteswitch({//下面要用到Siema，就要声明为全局变量
        loop: false,
        startIndex: 0,//起始滑块的索引（从零开始）
        draggable: false,//使用拖动和触摸滑动
    });
}

function steppre() {
    liteswitch.prev()
    step.step("previous");
}

function stepnext() {
    liteswitch.next()
    step.step("next");
}

function initLitestep() {
    step.step({
        initStep: 1,
        stepNames: ["作品名称", "申报单位", "主创人员资料", "内容简介"]
    });
}

function postToshort(writepart, postpart, modal) {
    var inside = $('#' + writepart).val();
    if(inside === ""){
        swal({
            title: "内容不可为空",
            icon: "error",
        });
        // $('#' + modal).modal("hide")
    }else {
        $('#' + postpart).val(inside);
        swal({
            title: "保存成功",
            icon: "success",
        }).then(done=>{
            $('#' + modal).modal("hide")
        });
    }
}

function submitinfo() {

    // var exam_id = "29";

    // var title = $("#prjname").val();
    // var ffile = $("#prjvideo")[0].files[0];
    // var v_type = $("input[name='v_type']:checked").val();
    // var fimg = $("#prjcover")[0].files[0];

    // var company_a = $("#prjbelong").val();
    // var contact_person = $("#prjcontact").val();
    // var phone = $("#prjphone").val();

    // var director = $("#prjdirector").val();
    // var screenwriter = $("#prjwriter").val();
    // var photography = $("#prjphotograph").val();
    // var clip = $("#prjredeal").val();

    // var starring = $("#prjactor").val();
    // var content_500 = $("#shortprjmain").val();
    // var content = $("#shortprjverify").val();

    // console.log(v_type)
    // console.log(exam_id)
    // console.log(title)
    // console.log(ffile)
    // console.log(v_type)
    // console.log(fimg)
    // console.log(company_a)
    // console.log(contact_person)
    // console.log(phone)
    // console.log(director)
    // console.log(screenwriter)
    // console.log(photography)
    // console.log(clip)
    // console.log(starring)
    // console.log(content_500)
    // console.log(content)

    // console.log(commonlink + 'hei_up')

    swal({
        title: "提交成功",
        icon: "success",
    }).then(done=>{
        $("#finalpre").css("display","none");
        $("#finalsubmit").css("display","none");

        $("#finalsubmitted").css("display","block");
        $("#finalsubmitted").css("backgournd-color","gray");
    });
    return



    var formall = new FormData(document.getElementById("maininformation"));
    console.log(formall)
    $.ajax({
        type:"post",
        async: false,
        processData: false,
        contentType: false,
        url: commonlink + 'hei_up',
        // url: 'http://172.16.20.17:8000/hei_up',

        //****************
        data: formall,
        //***

        //****************
        // data: {"exam_id":exam_id, "title": title, 'ffile':ffile, 'v_type': v_type, 'fimg': fimg, 'company_a': company_a, 'contact_person': contact_person, 'phone': phone, 'director': director, 'screenwriter': screenwriter, 'photography': photography, 'clip': clip, 'starring': starring, 'content_500': content_500, 'content': content,},
        //****************

        // dataType:"json",
        success:function(receiver){
            swal({
                title: "提交成功",
                icon: "success",
            }).then(done=>{
                $("#finalsubmit").style("css")
            });
        },
        error: function(){
            console.log(receiver)
        }
    });

}

