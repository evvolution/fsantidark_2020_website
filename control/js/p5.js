/*
    note：第五页控制
    anthor：zx
*/

function initLiteswitchp5() {
    liteswitchp5 = new liteswitchp5({//下面要用到，就要声明为全局变量
        loop: false,
        startIndex: 0,//起始滑块的索引（从零开始）
        draggable: false,//使用拖动和触摸滑动
    });
}

function getoldprjs() {
    $.ajax({
        type:"get",
        url: commonlink + 'exam/get_vote/?exam_id=34',
        // data: {exam_id: "34"},
        // dataType: "json",
        success:function(receiver){
            console.log(receiver);
            console.log(receiver.projects[0].length);
            var inner = "";
            for(var i = 0; i < receiver.projects[0].length/6; i++){
                var title = '<div class="box">';
                for(var j = 0; j < 6; j++){
                    var 
                }
            }
            // <div class="box">
            //                         <div class="row p5rowlevel2">
            //                             <div class="col-md-4 oldprjitem">
            //                                 <div class="oldprjcover">
            //                                     <a href="" target='_blank'><img src="img/basic/fslogo.png"/></a>
            //                                 </div>
            //                                 <div class="oldprjtitle">法不容“乱”——佛山市三水区人民法院审理区重点治乱案件纪实</div>
            //                             </div>                                        
            //                         </div>
            //                     </div>

            

        },
        error: function(receiver){
            console.log(receiver);
            swal({
                title: "获取历史记录失败，请稍后重试",
                icon: "error",
            });
            return;
        }
    });
}