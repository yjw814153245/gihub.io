$(function () {

            // small中移动事件
            $(".main-fd").mousemove(function(e){
                $(".main-gz").show();
                 $(".main-po").css({
                    'display':'block'
                });

                // 获取移动的值
                var x=e.pageX-$(this).offset().left-$(".main-gz").width()/2;
                var y=e.pageY-$(this).offset().top-$(".main-gz").height()/2;
                // 判断边距
                if(x<=0){
                    x=0
                }else if(x>=$(this).width()-$(".main-gz").width()){
                    x=$(this).width()-$(".main-gz").width()
                }

                if(y<=0){
                    y=0
                }else if(y>=$(this).height()-$(".main-gz").height()){
                    y=$(this).height()-$(".main-gz").height()
                }
                // 赋值
                $(".main-gz").css({left:x+'px',top:y+'px'});

                // big img 移动

                //大图与小图的比例
                var scale=$(".main-po>img").width()/$(".main-fd>img").width();
                // console.log(scale);

                //大图的运动距离=小图移动*scale
                // $(".main-s>img").css({left:-x*scale+'px',top:-y*scale+'px'}) 
                console.log(x,y,scale);

                // 大图的容器 元素的滚动
                $(".main-po").scrollTop(y*scale);
                $(".main-po").scrollLeft(x*scale);
            


            }).mouseout(function(){
                // move big隐藏
                $(".main-gz,.main-po").hide();
            })

            // 点击更换图片
            $('#dian li img').click(function(){
                // small big src=当前
                // console.log($(this).attr("src"));
                $('.main-fd>img,.main-s>img').attr("src",$(this).attr("src"));
            })
})