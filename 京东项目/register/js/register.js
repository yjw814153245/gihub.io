window.onload = function(){
        setTimeout(function(){
            $('.bar').show();
                $('.bar').css({
                    "width":$(document).width(),
                    "height":$(document).height()
                });
            $('.bar').show();
            $('.boe').show();
        },1000);
        
        // $('').eq(1).click(function(){
        //     $('boe').hide();
        //     $('.bar').hide();
        // })
        $("button").eq(0).click(function(){
                $(".bar").fadeOut();
                $(".boe").fadeOut();
            })
         $(".bool3 input").eq(1).click(function(){
                $(".bar").fadeOut();
                $(".boe").fadeOut();
            })
        // 拖拽 按下 移动 抬起
            $(".boe").mousedown(function(e){
                // 鼠标指针
                $(this).css("cursor","move")
                // 获取当前show的偏移值
                var offset=$(this).offset();
                var x=e.pageX-offset.left;
                var y=e.pageY-offset.top;
                // console.log(x,y)
                // x  y 鼠标在show中按下的位置

                $(document).mousemove(function(e){
                    // 移动的距离=当前的坐标-xy
                    var ll=e.pageX-x;
                    var tt=e.pageY-y;
                    console.log(ll,tt);

                    //判断边界
                    if(ll<=0){
                        ll=0
                    }else if(ll>=$(document).width()-$(".boe").width()){
                        ll=$(document).width()-$(".boe").width()
                    }

                    if (tt<=0) {
                        tt=0
                    }else if(tt>=$(document).height()-$(".boe").height()){
                        tt=$(document).height()-$(".boe").height()
                    }

                    // 赋值
                    $(".boe").css({left:ll+'px',top:tt+'px'});
                })

            })

            // 鼠标抬起
            $(document).mouseup(function(){
                $(this).off("mousemove");
                $("#show").css("cursor","")

            })
}
$(function () {
    // 用户名
    $("#yz").click(function(){
      var str = $("#username").val();
      var ret = /^[a-zA-Z][a-zA-Z0-9_]{5,20}$/;
      if(ret.test(str)){
        alert('该用户名可用');
      }else{
        alert('用户名不合法或你输入的是手机号');
      }  
    });
    // 邮件
    // 手机
    $("#yz").click(function(){
      var str = $("#username").val();
      var ret = /^[\d]{5,20}$/;
      if(ret.test(str)){
        alert('手机号未被注册');
      }else{
        alert('手机号被注册或你输入的是用户名');
      }
    });
  });

