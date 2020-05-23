
/*
    note：总控
    anthor：zx
*/

var step = $("#step");
var commonlink = 'http://server3.foshanplus.com/';

$(document).ready(function() {
    initMainview()
    initSize();
    initFile();
    initLiteswitchp3();
    initLitestep();

    getoldprjs();
});

window.onload = function() {
    
}
