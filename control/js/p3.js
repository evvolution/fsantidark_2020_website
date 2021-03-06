
/*
    note：第三页控制
    anthor：zx
*/

function initLiteswitch() {
    liteswitch = new liteswitch({//下面要用到，就要声明为全局变量
        loop: false,
        startIndex: 0,//起始滑块的索引（从零开始）
        draggable: false,//使用拖动和触摸滑动
    });
}

function steppre() {
    liteswitch.prev();
    step.step("previous");
}

function stepnext_1to2() {

    // var title = $("#prjname").val().length;
    // var ffile = $("#prjvideo")[0].files.length;
    // var v_type = $("input[name='v_type']:checked").val();
    // var fimg = $("#prjcover")[0].files.length;

    // if (title === 0) {
    //     swal({title: "作品名称不可为空",icon: "error",});
    //     return;
    // }
    // if (ffile === 0) {
    //     swal({title: "请上传作品文件",icon: "error",});
    //     return;
    // }
    // if (fimg === 0) {
    //     swal({title: "请上传作品剧照",icon: "error",});
    //     return;
    // }

    liteswitch.next()
    step.step("next");
}

function stepnext_2to3() {

    // var company_a = $("#prjbelong").val().length;
    // var contact_person = $("#prjcontact").val().length;
    // var phone = $("#prjphone").val().length;

    // if (company_a === 0) {
    //     swal({title: "请填写报送单位",icon: "error",});
    //     return;
    // }
    // if (contact_person === 0) {
    //     swal({title: "请填写联系人",icon: "error",});
    //     return;
    // }
    // if (phone === 0) {
    //     swal({title: "请填写联系方式",icon: "error",});
    //     return;
    // }

    liteswitch.next()
    step.step("next");
}

function stepnext_3to4() {

    // var director = $("#prjdirector").val().length;
    // var screenwriter = $("#prjwriter").val().length;
    // var photography = $("#prjphotograph").val().length;
    // var clip = $("#prjredeal").val().length;
    // var starring = $("#prjactor").val().length;

    // if (director === 0) {
    //     swal({title: "请填写导演",icon: "error",});
    //     return;
    // }
    // if (screenwriter === 0) {
    //     swal({title: "请填写编剧",icon: "error",});
    //     return;
    // }
    // if (photography === 0) {
    //     swal({title: "请填写摄像",icon: "error",});
    //     return;
    // }
    // if (clip === 0) {
    //     swal({title: "请填写剪辑",icon: "error",});
    //     return;
    // }
    // if (starring === 0) {
    //     swal({title: "请填写演员",icon: "error",});
    //     return;
    // }

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


    var content_500 = $("#shortprjmain").val();
    var content = $("#shortprjverify").val();
    var read = $("#read").is(":checked");


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
    //     title: "提交成功x",
    //     icon: "success",
    //     text: '请等待作品审核，您可以在佛山+中查看审核进度 \r\n 123123 ',
    //     content: {
    //         element: "img",
    //         attributes: {
    //             src: "././img/basic/2.png",
    //         },
    //     },
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
    $.ajax({
        type:"post",
        async: false,
        processData: false,
        contentType: false,
        url: commonlink + 'hei_up',
        data: formall,
        //****************
        // data: {"exam_id":exam_id, "title": title, 'ffile':ffile, 'v_type': v_type, 'fimg': fimg, 'company_a': company_a, 'contact_person': contact_person, 'phone': phone, 'director': director, 'screenwriter': screenwriter, 'photography': photography, 'clip': clip, 'starring': starring, 'content_500': content_500, 'content': content,},
        //****************

        // dataType:"json",
        success:function(receiver){
            // console.log(receiver);
            var success_id = receiver.data.id;
            // console.log(success_id);
            var strid = success_id.toString();
            // console.log(strid);
            var strid_md5 = strid.MD5().toLocaleUpperCase();
            // console.log(strid_md5);
            swal({
                title: "提交成功",
                icon: "success",
                text: '请牢记您的作品识别码，本码仅展示一次 \r\n \r\n' + strid_md5 + '\r\n \r\n 扫码下载佛山+，查看作品审核进度',
                closeOnClickOutside: false,
                content: {
                    element: "img",
                    attributes: {
                        src: "././img/basic/download.png",
                    },
                    element: "img",
                },
            }).then(function (){
                //提交成功后，隐藏返回按钮，提交按钮，修改模态框按钮，禁用输入框和复选框

        
                //提交成功后显示禁用按钮
            });
        },
        error: function(receiver){
            console.log(receiver);
            swal({
                title: "提交失败，请稍后重试",
                icon: "error",
            });
            return;
        }
    });
}

