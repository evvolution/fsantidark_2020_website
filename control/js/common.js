
/*
    note：总控
    anthor：zx
*/

var step = $("#step");
var commonlink = 'https://server.foshanplus.com/';

$(document).ready(function() {
    jumptoTop ()

    initMainview()
    initSize();
    // initFile();
    initLiteswitch();
    initLitestep();

    // getoldprjs();
});

window.onload = function() {
    
}

function jumptoTop () {
    window.location.href='V:\\mygit\\fsantidark_2020_website\\index.html' + '#p1';
}

function modalclose(modal) {
    $("#" + modal).css("display", "none")
}

function modalshow(modal) {
    $("#" + modal).css("display", "block")
}