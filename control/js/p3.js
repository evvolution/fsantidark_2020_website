
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

function stepnext_1to2() {

    var title = $("#prjname").val().length;
    var ffile = $("#prjvideo")[0].files.length;
    var v_type = $("input[name='v_type']:checked").val();
    var fimg = $("#prjcover")[0].files.length;

    if (title === 0) {
        swal({title: "作品名称不可为空",icon: "error",});
        return;
    }
    if (ffile === 0) {
        swal({title: "请上传作品文件",icon: "error",});
        return;
    }
    if (fimg === 0) {
        swal({title: "请上传作品剧照",icon: "error",});
        return;
    }

    liteswitch.next()
    step.step("next");
}

function stepnext_2to3() {

    var company_a = $("#prjbelong").val().length;
    var contact_person = $("#prjcontact").val().length;
    var phone = $("#prjphone").val().length;

    if (company_a === 0) {
        swal({title: "请填写报送单位",icon: "error",});
        return;
    }
    if (contact_person === 0) {
        swal({title: "请填写联系人",icon: "error",});
        return;
    }
    if (phone === 0) {
        swal({title: "请填写联系方式",icon: "error",});
        return;
    }

    liteswitch.next()
    step.step("next");
}

function stepnext_3to4() {

    var director = $("#prjdirector").val().length;
    var screenwriter = $("#prjwriter").val().length;
    var photography = $("#prjphotograph").val().length;
    var clip = $("#prjredeal").val().length;

    if (director === 0) {
        swal({title: "请填写导演",icon: "error",});
        return;
    }
    if (screenwriter === 0) {
        swal({title: "请填写编剧",icon: "error",});
        return;
    }
    if (photography === 0) {
        swal({title: "请填写摄像",icon: "error",});
        return;
    }
    if (clip === 0) {
        swal({title: "请填写剪辑",icon: "error",});
        return;
    }

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

    var starring = $("#prjactor").val().length;
    var content_500 = $("#shortprjmain").val();
    var content = $("#shortprjverify").val();
    var read = $("#read").is(":checked");

    if (starring === 0) {
        swal({title: "请填写演员",icon: "error",});
        return;
    }
    if (content_500 === '您还没有提交作品梗概') {
        swal({title: "请填写作品梗概",icon: "error",});
        return;
    }
    if (content === '您还没有提交作品简介') {
        swal({title: "请填写作品简介",icon: "error",});
        return;
    }
    if (read === false) {
        swal({title: "请阅读活动规则后勾选",icon: "error",});
        return;
    }

    // swal({
    //     title: "提交成功",
    //     icon: "success",
    // }).then(done=>{
    //     //提交成功后，隐藏返回按钮，提交按钮，修改模态框按钮，禁用输入框和复选框
    //     $("#finalpre").css("display","none");
    //     $("#finalsubmit").css("display","none");
    //     $(".showmodal").css("display","none");
    //     $('#prjactor').prop("disabled", true);
    //     $('#read').prop("disabled", true);

    //     //提交成功后显示禁用按钮
    //     $(".finalsubmitted").css("display","block");
    // });
    // return



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
            console.log(receiver);
            swal({
                title: "提交成功",
                icon: "success",
            }).then(done=>{
                //提交成功后，隐藏返回按钮，提交按钮，修改模态框按钮，禁用输入框和复选框
                $("#finalpre").css("display","none");
                $("#finalsubmit").css("display","none");
                $(".showmodal").css("display","none");
                $('#prjactor').prop("disabled", true);
                $('#read').prop("disabled", true);
        
                //提交成功后显示禁用按钮
                $(".finalsubmitted").css("display","block");
            });
        },
        error: function(){
            console.log(receiver);
            swal({
                title: "提交失败，请稍后重试",
                icon: "error",
            });
            return;
        }
    });

}

