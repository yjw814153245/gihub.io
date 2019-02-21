var input=document.getElementsByTagName('input')[0];
var span=document.getElementsByTagName('span')[0];
var btn=document.getElementsByTagName('button')[0];
        // 通过失去焦点事件 进行ajax请求
        btn.onclick=function(){
            // 获取input的value值
            var uname=this.value;
            // 将获取的值发送到服务器文件
            Ajax().post('login.php','value='+uname,function(msg){
                if (msg=='y') {
                    span.innerHTML='用户名错误!'
                }
                else{
                    span.innerHTML='登录成功！'
                }
            });

        }
