$(function(){
    $('button:eq(0)').click(function(){
        // 隐藏
        $('.event').fadeOut(500);
                
    })

// 轮播图  
    var y=0;
function time(){
    $('.main-image li').eq(y).show().siblings('li').hide();
    $('.num li').eq(y).addClass('show').siblings('li').removeClass('show');

}
function piao(){
    s=setInterval(
        function(){
            y++;
            if(y>8){
                y=0;
            }
                time(y);
        },2000)
    }
piao();

$('.main-z').mouseover(function(){
        // 清除定时器
        clearInterval(s);
        // 显示箭头
    $('.left,.right').show();
        }).mouseout(
        function(){
        // 轮播隐藏箭头
        piao();
        $('.left,.right').hide();
    })

$('.num li').mouseover(function () {
        y=$(this).index();
        time(y);
})
    // 下一张
$('.right').click(function () {
        y++;
        if(y>4){
                y=0;
        }
    time(y);
})
    // 上一张
$('.left').click(function () {
        y--;
        if(y<0){
                y=4;
        }
    time(y);
})

$(document).ready(function(){
     
        $("#rzo").hover(function(){
            $("#rzt").show();
        },function(){
            $("#rzt").hide();
        });
         
    });
})
//选项卡
$().ready(function(){
    $(".tab-menu li").mouseover(function(){
    //从0开始赋值变量
        var index = $(this).index();
    //让内容框的第 _index个显示出来
        $(".tab-box>div").eq(index).show().siblings().hide();
   
    });
});

$('.main-xl').mouseover(function(){
    $('#tab1').fadeIn("slow",1,function(){
            $(this).css("display", "block")
        })

})
$(function (){
        //显示隐藏
    $(".main-xl1").mouseenter(function (){
            var flag = $("#tab1");
            if(flag){
                $(".main-r-c").animate({"opacity":"0"},1000);
                $("#tab1").fadeIn(1000).show();
            }
            // else{
            //     $("#tab1").hide();
            // }
    });
    $(".main-xl2").mouseenter(function (){
            var flag = $("#tab1");
            if(flag){
                $(".main-r-c").animate({"opacity":"0"},1000);
                $("#tab1").fadeIn(1000).show();
            }
    });
    $(".main-xl3").mouseenter(function (){
            var flag = $("#tab1");
            if(flag){
                $(".main-r-c").animate({"opacity":"0"},1000);
                $("#tab1").fadeIn(1000).show();
            }   
    });

    $(".main-xl4 a").mouseenter(function (){
            var flag = $("#tab1");
            if(flag){
                $(".main-r-c").animate({"opacity":"0"},2000);
                $("#tab1").fadeIn(2000).show();
            }
    })
});
    
function tab(a,b){  
    $(a).mouseenter(function(){  
        $(a).removeClass('active'); //先将所有同级去掉active    
        $(b).hide();
           //所有同级box隐藏   
        $(this).addClass('active');
           //当前li显示
        $(b).eq($(this).index()).show();
    });  
}
   
$(document).ready(function(){  
    //选项卡  
    tab("#tab11 li",'.main-xlo');  
    tab("#tab22 li",'.box2');  
    tab("#tab23 li",'.box3');
    tab("#tab24 li",'.box4'); 
    tab("#tab25 li",'.box5');
}); 

// 首页选项卡移入事件
$(function(){
    $('button:eq(1)').click(function(){
        // 隐藏
        $('#tab1').hide();
        // 还原透明度
        $(".main-r-c").animate({"opacity":"1"},1000);
                
    })
    $('button:eq(2)').click(function(){
        // 隐藏
        $('#tab1').hide();
        $(".main-r-c").animate({"opacity":"1"},1000);     
        })
    $('button:eq(3)').click(function(){
        // 隐藏
        $('#tab1').hide();
        $(".main-r-c").animate({"opacity":"1"},1000);     
        })
    $('button:eq(4)').click(function(){
        // 隐藏
        $('#tab1').hide();
        $(".main-r-c").animate({"opacity":"1"},1000);     
        })
})
//倒计时
var starttime = Date.parse(new Date('2018/10/01'))+12*60*60*1000; //10月1号12点
  setInterval(function () {
    var nowtime = Date.parse(new Date());
    var time = starttime - nowtime;
    var day = parseInt(time / 1000 / 60 / 60 / 24);
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    var minute = parseInt(time / 1000 / 60 % 60);
    var seconds = parseInt(time / 1000 % 60);

    $('.day').html(day)
    $('.hour').html(hour)
    $('.minute').html(minute)
    $('.seconds').html(seconds)


  }, 1000);
// 4图左右轮播图

$( function(){
     var index = 1,
         wid = $('#box li:first').outerWidth( true ),
         len = $('#box li').size(),
         timer,
         str = '',
         li = $('#box li');
     // 加载按钮
    for( var i = 1; i <= len; i++){
        if( i == 1){
            str += '<li class="current">' + i + '</li>';
        }else{
            str += '<li>' + i + '</li>';
        }
    }
    $('#count').append(str);
    
    //初始化
    li.first().clone().appendTo( $('#box'));
    li.last().clone().prependTo($('#box'));
    $('#box').css({ marginLeft:-wid});  
    //右按钮
    $('.rights').click( function(){
        play( index + 1);
    })
    //左按钮
    $('.lefts').click( function(){
        play( index - 1);
    })
    // 通过按钮选图
    $('#count li').click( function(){
        play( $(this).index() + 1);
    })
    
    // 动画函数
    function play( nums ){
      if( ! $('#box').is(':animated')){
           var  dir = nums > index ? -1 : 1,
                n = Math.abs( nums - index ); 
                // 得图片跨度
           $('#box').animate({ marginLeft: '+=' + wid * dir * n},500, function(){
                if( nums > len){
                    nums = 1;
                    $('#box').css({ marginLeft:-wid});
                }else if( nums <= 0){
                    nums = len;
                    $('#box').css({ marginLeft:-wid*len});
                }
                index = nums;
                $('#count li').eq( index - 1).addClass('current').siblings().removeClass('current');
           });
       }
    }
    // 自动播放 ，鼠标滑过停止，鼠标滑离继续播放
    // $('#scroll').hover(function(){
    //     clearInterval( timer );
    // },function(){
    //     timer = setInterval( function(){
    //         play( index + 1 );
    //     },2000);
    // }).mouseleave();
})
// 京东秒杀栏二图轮播
$(function () {
            var m=0;
            function sh(){
                $('.img12 li').eq(m).show().siblings('li').hide();
                $('.num1 li').eq(m).addClass('show').css("background","#E33333").siblings('li').removeClass('show').css("background","#fff");
            }
            function piao(){
                s=setInterval(function(){
                    m++;
                    if(m>2){
                        m=0;
                    }
                    sh(m);
                },2000)
            }
            piao();
            // $('.main-ms-r').mouseover(function(){
            //     // 清除定时器
            //     clearInterval(s);
            // }).mouseout(function () {
            //     // 继续轮播
            //     piao();
            // })
            // 鼠标移入 显示对应的图片
            $('.num1 li').mouseover(function () {
                m=$(this).index();
                sh(m);
                clearInterval(s);
            })
            // 鼠标移入li小点 显示对应的背景色红点
            // $('.num1 li:eq(0)').mouseover(function () {
            //     $('.num1 li').eq(0).css("background","#E33333");
            //     $('.num1 li').eq(1).css("background","#fff");
            // })
            // $('.num1 li:eq(1)').mouseover(function () {
            //     $('.num1 li').eq(0).css("background","#fff");
            //     $('.num1 li').eq(1).css("background","#E33333");
            // })

        })

// 排行榜选项卡
$().ready(function(){
    $(".tab-menu1 li").mouseover(function(){

        var index = $(this).index();
        $(".tab-box1>div").eq(index).show().siblings().hide();
   
    });
});


$(function () {
    var m=0;
    function sh(){
        $('.tab-img li').eq(m).show().siblings('li').hide();
        $('.num2 li').eq(m).addClass('show').siblings('li').removeClass('show');
    }

    // 鼠标移入 显示对应的图片
    $('.num2 li').mouseover(function () {
        m=$(this).index();
        sh(m);
    })
})
//排行榜轮播开始
$(function () {
    var m=0;
    function sh(){
        $('.tab-img2 li').eq(m).show().siblings('li').hide();
        $('.num3 li').eq(m).addClass('show').siblings('li').removeClass('show');
    }
    $('.num3 li').mouseover(function () {
        m=$(this).index();
        sh(m);
    })
})

$(function () {
    var m=0;
    function sh(){
        $('.tab-img3 li').eq(m).show().siblings('li').hide();
        $('.num4 li').eq(m).addClass('show').siblings('li').removeClass('show');
    }
    $('.num4 li').mouseover(function () {
        m=$(this).index();
        sh(m);
    })
})

$(function () {
    var m=0;
    function sh(){
        $('.tab-img4 li').eq(m).show().siblings('li').hide();
        $('.num5 li').eq(m).addClass('show').siblings('li').removeClass('show');
    }
    $('.num5 li').mouseover(function () {
        m=$(this).index();
        sh(m);
    })
})

$(function () {
    var m=0;
    function sh(){
        $('.tab-img5 li').eq(m).show().siblings('li').hide();
        $('.num6 li').eq(m).addClass('show').siblings('li').removeClass('show');
    }
    $('.num6 li').mouseover(function () {
        m=$(this).index();
        sh(m);
    })
})
//排行榜轮播结束
$( function(){
     var index = 1,
         wid = $('#box3 li:first').outerWidth( true ),
         len = $('#box3 li').size(),
         timer,
         str = '',
         li = $('#box3 li');
     // 加载按钮
    for( var i = 1; i <= len; i++){
        if( i == 1){
            str += '<li class="current1">' + i + '</li>';
        }else{
            str += '<li>' + i + '</li>';
        }
    }
    // $('#count').append( str );
    
    //初始化
    li.first().clone().appendTo( $('#box3'));
    li.last().clone().prependTo($('#box3'));
    $('#box3').css({ marginLeft:-wid});  
    
    // 点击右按钮 从右往左走 （负）
    $('.right2').click( function(){
        play( index + 1);
    })
    // 点击左按钮 从左往右走 （正）
    $('.left2').click( function(){
        play( index - 1);
    })
    // 通过按钮选图
    $('#count1 li').mouseover( function(){
        play( $(this).index() + 1);
    })
    
    // 动画函数
    function play( nums ){
      if( ! $('#box3').is(':animated')){
           var  dir = nums > index ? -1 : 1,
                n = Math.abs( nums - index ); // 得图片跨度
           $('#box3').animate({ marginLeft: '+=' + wid * dir * n},500, function(){
                if( nums > len){
                    nums = 1;
                    $('#box3').css({ marginLeft:-wid});
                }else if( nums <= 0){
                    nums = len;
                    $('#box3').css({ marginLeft:-wid*len});
                }
                index = nums;
                $('#count1 li').eq( index - 1);
           });
       }
    }
    // 自动播放 ，鼠标滑过停止，鼠标滑离继续播放
    $('.main-lia').hover(function(){
        clearInterval( timer );
    },function(){
        timer = setInterval( function(){
            play( index + 1 );
        },2000);
    }).mouseleave();
    // li标签小点鼠标事件
    $('#count1 li:nth-of-type(1)').mouseover(function(){
        $('#count1 li:nth-of-type(1)').css("background","#EB3436" );
    }).mouseout(function(){
        $('#count1 li:nth-of-type(1)').css("background","#fff" );
    }).css("background","#EB3436" );
    $('#count1 li:nth-of-type(2)').mouseover(function(){
        $('#count1 li:nth-of-type(2)').css("background","#EB3436" );
    }).mouseout(function(){
        $('#count1 li:nth-of-type(2)').css("background","#fff" );
    })
    $('#count1 li:nth-of-type(3)').mouseover(function(){
        $('#count1 li:nth-of-type(3)').css("background","#EB3436" );
    }).mouseout(function(){
        $('#count1 li:nth-of-type(3)').css("background","#fff" );
    })

})

// 领劵中心选项卡
$(function () {
    var m=0;
    function sh(){
        $('.tab-img6 li').eq(m).show().siblings('li').hide();
        $('.num7 li').eq(m).addClass('show').siblings('li').removeClass('show');
    }

    // 鼠标移入 显示对应的图片
    $('.num7 li').mouseover(function () {
        m=$(this).index();
        sh(m);
    })
})

$(function () {
    var m=0;
    function sh(){
        $('.tab-img7 li').eq(m).show().siblings('li').hide();
        $('.num8 li').eq(m).addClass('show').siblings('li').removeClass('show');
    }
    // 鼠标移入 显示对应的图片
    $('.num8 li').mouseover(function () {
        m=$(this).index();
        sh(m);
    })
    $('.right3').click( function(){
        
    })
    $('.left3').click( function(){
        
    })

})
window.onload=function(){
var navs = document.getElementById('navs'),
            ms = document.getElementById('ms');
        window.onscroll = function(){
            var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            // 将菜单挂起添加 .fixed样式
            if(scrolltop > 720){
                navs.className ='navs fixed';
                navs.style.display='block';
                ms.style.marginTop ='50px';

            }else{//不挂起菜单 去掉 .fixed 样式
                navs.className ='';
                ms.style.marginTop ='0';
            }
        }
}

$( function(){
     var index = 1,
         wid = $('#box1 li:first').outerWidth( true ),
         len = $('#box1 li').size(),
         timer,
         str = '',
         li = $('#box1 li');
     // 加载按钮
    for( var i = 1; i <= len; i++){
        if( i == 1){
            str += '<li class="current">' + i + '</li>';
        }else{
            str += '<li>' + i + '</li>';
        }
    }
    $('#count').append( str );
    
    //初始化
    li.first().clone().appendTo( $('#box1'));
    li.last().clone().prependTo($('#box1'));
    $('#box1').css({ marginLeft:-wid});  
    
    // 点击右按钮 从右往左走 （负）
    $('.right').click( function(){
        play( index + 1);
    })
    // 点击左按钮 从左往右走 （正）
    $('.left').click( function(){
        play( index - 1);
    })
    // 通过按钮选图
    $('#count li').click( function(){
        play( $(this).index() + 1);
    })
    
    // 动画函数
    function play( nums ){
      if( ! $('#box1').is(':animated')){
           var  dir = nums > index ? -1 : 1,
                n = Math.abs( nums - index ); // 得图片跨度
           $('#box1').animate({ marginLeft: '+=' + wid * dir * n},1500, function(){
                if( nums > len){
                    nums = 1;
                    $('#box1').css({ marginLeft:-wid});
                }else if( nums <= 0){
                    nums = len;
                    $('#box1').css({ marginLeft:-wid*len});
                }
                index = nums;
                $('#count li').eq( index - 1).addClass('current').siblings().removeClass('current');
           });
       }
    }
    // 自动播放 ，鼠标滑过停止，鼠标滑离继续播放
    $('#scroll').hover(function(){
        clearInterval( timer );
    },function(){
        timer = setInterval( function(){
            play( index + 1 );
        },2000);
    }).mouseleave();
})
//瀑布流
window.onload=function() {
    var cont=document.getElementById('cont');
        // 滚动事件
        window.onscroll=function(){
            // 文档总高度
            var aHeight=document.documentElement.offsetHeight;
            // console.log(aHeight);
            // 可视区域高度
            var cHeight=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
            // console.log(cHeight);
            // 滚动高度
            var sHeight=document.documentElement.scrollTop||document.body.scrollTop;
            // console.log(sHeight);

            // 每次滚到到底部=总高度-可视区域高度
            if(aHeight-cHeight<=sHeight){
                // 建立ajax请求数据
                Ajax('JSON').get('./php/index.php',function(msg){;
                    // 声明空格字符串
                    var str='';

                    //for in 遍历对象 遍历4次 
                    for(var i in msg){
                        // console.log(msg[i]["pic"]);
                        str+='<img src="'+msg[i]["pic"]+'">';
                    }
                    //输出
                    // console.log(str);

                    // 如果加载到高度为15000
                    if(aHeight>=15000){
                        window.onscroll=null;
                        return;

                    }else{
                        // 原有的图片加上请求的图片
                        cont.innerHTML+=str;
                    }
                    

                });

            }

        }
}