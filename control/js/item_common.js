
/*
    note：视频播放页控制
    anthor：zx
*/

$(document).ready(function() {
    init();
});


function init() {
    var title = getParam("title");
    var video = getParam("video");
    var poster = getParam("poster");
    var company = getParam("company");
    var director = getParam("director");
    var brief = getParam("brief");

    $("#title").html(title);
    var tmp = '<video src="' + video + '" poster="' + poster + '" controls></video>'
    $("#player").html(tmp);
    $("#company").html('申报单位：' + company);
    $("#director").html('导演：' + director);
    $("#brief").html('内容简介：' + brief);
}

/* 获取url参数 */
function getParam(paramName) {
    paramValue = "", isFound = !1;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), paramValue
}