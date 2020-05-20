
/*
    note：第三页控制
    anthor：zx
*/

function initFile() {
    $("#prjvideo").fileinput({
        language: "zh",//配置语言
        showUpload : true, //显示整体上传的按钮
        showRemove : false, //显示整体删除的按钮
        uploadAsync: true, //默认异步上传
        uploadLabel: "上传", //设置整体上传按钮的汉字
        dropZoneEnabled: false,
        showPreview: false,
        maxFileSize : 2097152,//文件大小限制
        maxFileCount: 1,//允许最大上传数，可以多个，
        enctype: 'multipart/form-data',
        allowedFileExtensions : ["mov", "mp4", "mpeg"],/*上传文件格式限制*/
        msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
    });

    $("#prjcover").fileinput({
        language: "zh",//配置语言
        showUpload : true, //显示整体上传的按钮
        showRemove : false, //显示整体删除的按钮
        uploadAsync: true, //默认异步上传
        uploadLabel: "上传", //设置整体上传按钮的汉字
        dropZoneEnabled: false,
        showPreview: false,
        maxFileSize : 2097152,//文件大小限制
        maxFileCount: 1,//允许最大上传数，可以多个，
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