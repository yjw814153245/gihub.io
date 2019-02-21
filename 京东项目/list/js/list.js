$(function () {
            var m=0;
            function sh(){
                $('.img li').eq(m).show().siblings('li').hide();
                // 数字
                $('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
            }
            // 封装函数
            function piao(){
                // 自动轮播
                s=setInterval(function(){
                    // 下标自增
                    m++;
                    // 判断m的值
                    if(m>4){
                        m=0;
                    }
                    sh(m);
                },2200)
            }
            // 调用函数
            piao();
            // 鼠标移入数字 显示对应的图片
            $('.main-wrap').mouseover(function(){
                // 清除定时器
                clearInterval(s);
            }).mouseout(function () {
                // 继续轮播
                piao();
            })
            // 鼠标移入 显示对应的图片
            $('.num li').mouseover(function () {
                m=$(this).index();
                sh(m);
            })

            // 下一张
            $('.right').click(function () {
                // 下标自增
                m++;
                // 判断m的值
                if(m>4){
                    m=0;
                }
                sh(m);
            })

            // 上一张
            $('.left').click(function () {
                // 下标自增
                m--;
                // 判断m的值
                if(m<0){
                    m=4;
                }
                sh(m);
            })

        })
//二图轮播
$(function () {
            var m=0;
            function sh(){
                $('.img1 li').eq(m).show().siblings('li').hide();
                // 数字
                $('.num1 li').eq(m).addClass('show1').siblings('li').removeClass('show1');
            }
            // 封装函数
            function piao(){
                // 自动轮播
                s=setInterval(function(){
                    // 下标自增
                    m++;
                    // 判断m的值
                    if(m>4){
                        m=0;
                    }
                    sh(m);
                },1000)
            }
            // 调用函数
            piao();
            // 鼠标移入数字 显示对应的图片
            $('.main-lu-b').mouseover(function(){
                // 清除定时器
                clearInterval(s);
            }).mouseout(function () {
                // 继续轮播
                piao();
            })
            // 鼠标移入 显示对应的图片
            $('.num1 li').mouseover(function () {
                m=$(this).index();
                sh(m);
            })

        })
// 选项卡
$().ready(function(){
    $(".main-ro li").mouseover(function(){
    //从0开始赋值变量
        var index = $(this).index();
    //让内容框的第 _index个显示出来
        $(".main-tab>div").eq(index).show().siblings().hide();
   
    });
});


$(function () {
            var m=0;
            function sh(){
                $('.img2 li').eq(m).show().siblings('li').hide();
                // 数字
                $('.num2 li').eq(m).addClass('show2').siblings('li').removeClass('show2');
            }
            // 封装函数
            function piao(){
                // 自动轮播
                s=setInterval(function(){
                    // 下标自增
                    m++;
                    // 判断m的值
                    if(m>4){
                        m=0;
                    }
                    sh(m);
                },1000)
            }
            // 调用函数
            piao();
            // 鼠标移入数字 显示对应的图片
            $('.main-xbt-o').mouseover(function(){
                $('.left2,.right2').show();
                // 清除定时器
                clearInterval(s);
            }).mouseout(function () {
                // 继续轮播
                piao();
                $('.left2,.right2').hide();
            })
            // 鼠标移入 显示对应的图片
            $('.num2 li').mouseover(function () {
                m=$(this).index();
                sh(m);
            })

            // 下一张
            $('.right2').click(function () {
                m++;
                if(m>4){
                    m=0;
                }
                sh(m);
            })

            $('.left2').click(function () {
                m--;
                if(m<0){
                    m=4;
                }
                sh(m);
            })

        })


// 楼层
$(function (){
            // 点击楼层li 滚动到指定的位置
            $('ul li').click(function(){
                var index=$(this).index();
                var top=$('.floor').eq(index).offset().top;
                // $('html').scrollTop(top);
                // 加动画
                $('html').animate({scrollTop:top},500);
            })
            // 把所有楼层距离顶部的位置放入数组
            var heights=[];
            // 遍历添加数组 向数组
            $('.floor').each(function () {
                heights.push($(this).offset().top)
            })
            // 滚动监听事件
            $(window).scroll(function () {
                // 获取当前滚动的距离
                var top=$(window).scrollTop();
                // 遍历判断 在几楼
                for (var i = 0; i < heights.length; i++) {
                    // top>=100 <720 一层
                    if (top>=heights[i] && top<heights[i+1]) {
                        //找到对用的楼层 需要当前下标
                        var index=i;
                        // 赋值给1F 背景
                        $('.lc ul li').eq(index).css("background","#E2231A").siblings().css("background","#fff")
                    }
                }
            })
        })