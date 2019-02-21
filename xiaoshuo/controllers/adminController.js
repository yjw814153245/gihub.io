//后台控制器
var adminController={};
//引入作品数据模型
var worksModel=require('../models/worksModel.js');
//引入章节数据模型
var chapterModel=require('../models/chapterModel.js');
//引入友链数据模型
var friendModel=require('../models/friendModel.js');
// 引入账号数据模型
var adminModel = require('../models/adminModel.js');
//后台首页
adminController.index=function(req,res){
    //跳转页面
    res.render('admin/index');
}
//分类管理页面
adminController.worksAdd=function(req,res){
    // 跳转页面
    res.render('admin/worksAdd');    
}
//添加分类
adminController.worksInsert=function(req,res){
    worksModel.create(req.body,function(err){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'添加数据失败'});
        }else{
            res.redirect('/admin/worksList');
        }
    })    
}
//分类列表
adminController.worksList = function(req,res){
    worksModel.find({}).sort({order:1}).exec(function(err,data){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'查询数据失败'});
        }else{
            res.render('admin/worksList',{works:data});          
        }
    });
}
//删除分类数据
adminController.worksRemove = function(req,res){
    worksModel.remove({_id:req.params._id},function(err){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'数据删除失败'});
        }else{
            res.redirect('/admin/worksList');        
        }
    })
}
//重新编辑分类数据
adminController.worksEdit = function(req,res){
    worksModel.findOne({_id:req.params._id},function(err,data){
        if(err){
            // 响应错误信息
            res.render('admin/error',{synopsis:"ERROR",errText:'查询数据失败'});
        }else{
            // 响应模板
            res.render('admin/worksEdit',{data:data});       
        }
    })
}
//更新分类数据
adminController.worksUpdate = function(req,res){
    // 更新数据
    worksModel.update({_id:req.body._id},req.body,function(err){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'数据更改失败'});
        }else{
            res.redirect('/admin/worksList');        
        }       
    })
}
//小说章节页面
adminController.chapterAdd = function(req,res){
    worksModel.find({},function(err,data){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'查询数据失败'});
        }else{
            res.render('admin/chapterAdd',{works:data});            
        }
    })
}
// 插入小说数据
adminController.chapterInsert = function(req,res){
    //小说封面保存路径
    var imagePath = 'files';
    //接收文件类型
    var imageTypes = ['image/jpeg','image/png','image/gif'];
    //允许图片的大小单位：字节
    var fileSize = 1024*1024*5;
    // 引入接收图的配置模块
    var imagefile = require('../configs/fileImage_config.js');
    // 调用图片上传的函数
    var upload = imagefile(imagePath,imageTypes,fileSize).single('imgurl');
    upload(req,res,function(err){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'图片上传失败'});
        }else{
            //把图片名放到req.body里
            req.body.imgurl = req.file.filename;
            // 添加章节数据
            chapterModel.create(req.body,function(err){
                if(err){
                    res.render('admin/error',{synopsis:"ERROR",errText:'添加数据失败'});
                }else{
                    // res.render('admin/error',{synopsis:"信息",errText:'发布文章的成功'});
                    res.redirect('/admin/chapterAdd');   
                }       
            })
        }
    })
}

//小说目录
adminController.chapterList = function(req,res){
    // 每页显示数据
    var pageSize = 5;
    //默认查询第一页数据
    var page = req.query.page?req.query.page:1;
    chapterModel.find({}).count(function(err,total){
        if(err){
            // 响应错误信息
            res.render('admin/error',{info:"ERROR",errText:'查询数据失败'});      
        }else{
            // 总页数
            var maxPage = Math.ceil(total/pageSize);
            // 处理页码上下限
            if(page<1) page = 1;
            if(page>maxPage) page = maxPage;
            // 查询条件的便宜量
            var offsetPage = pageSize*(page-1);
            // 查询文件列表
            chapterModel.find({}).limit(pageSize).skip(offsetPage).populate('itemId',{name:1}).exec(function(err,data){
                if(err){
                    res.render('admin/error',{synopsis:"ERROR",errText:'查询数据失败'});
                }else{
                    res.render('admin/chapterList',{chapters:data,maxPage:maxPage,page:page});

                }
            });
        }
    })
}
//删除小说
adminController.chapterRemove = function(req,res){
    chapterModel.remove({_id:req.params._id},function(err){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'数据删除失败'});
        }else{
            res.redirect('/admin/chapterList');     
        }
    })
}
//编辑小说页面
adminController.chapterEdit = function(req,res){
    //查询编辑文章数据
    chapterModel.findOne({_id:req.params._id},function(err,data){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'查询数据失败'});
        }else{
            // 查询栏目数据
            worksModel.find({},function(err,worksdatas){
                if(err){
                    // 响应错误信息
                    res.render('admin/error',{synopsis:"ERROR",errText:'查询数据失败'});
                }else{
                    // 响应模板
                    res.render('admin/chapterEdit',{data:data,works:worksdatas});    
                }
            })
        }
    })
}

// 修改小说封面
adminController.chapterImgUrlUpdate = function(req,res){
    //保存路径
    var imagePath = 'files';
    //接收文件类型
    var imageTypes = ['image/jpeg','image/png','image/gif'];
    //图片的大小单位：字节
    var fileSize = 1024*1024*5;
    //引入接收图的配置模块
    var imageUpload = require('../configs/fileImage_config.js');  
    //调用图片上传的函数
    var upload = imageUpload(imagePath,imageTypes,fileSize).single('imgurl');
    upload(req,res,function(err){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'图片上传失败'});
        }else{
            chapterModel.update({_id:req.body._id},{$set:{imgurl:req.file.filename}},function(err){
                if(err){
                    res.render('admin/error',{synopsis:"ERROR",errText:'封面修改失败'});
                }else{
                    res.redirect('/admin/chapterList');     
                }
            });
        }       

    });
}

/*修改小说内容*/ 
adminController.chapterTextUpdate = function(req,res){

    chapterModel.update({_id:req.body._id},{$set:req.body},function(err){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'文章修改失败'});
        }else{
            res.redirect('/admin/chapterList');     
        }
    });
}

//友链添加页面
adminController.friendAdd=function(req,res){
    // 跳转页面
    res.render('admin/friendAdd');    
}
//添加友链
adminController.friendInsert=function(req,res){
    friendModel.create(req.body,function(err){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'添加数据失败'});
        }else{
            res.redirect('/admin/friendList');
            // res.send('添加成功');
        }
    })    
}
//友链列表
adminController.friendList = function(req,res){
    friendModel.find({},function(err,data){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'查询数据失败'});
        }else{
            res.render('admin/friendList',{friend:data});          
        }
    })
}
//删除友链
adminController.friendRemove = function(req,res){
    friendModel.remove({_id:req.params._id},function(err){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'数据删除失败'});
        }else{
            res.redirect('/admin/friendList');     
        }
    })
}
//编辑友链
adminController.friendEdit = function(req,res){
    friendModel.findOne({_id:req.params._id},function(err,data){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'查询数据失败'});
        }else{
            res.render('admin/friendEdit',{data:data});       
        }
    })
}
//更新友链数据
adminController.friendUpdate = function(req,res){
    // 更新数据
    friendModel.update({_id:req.body._id},req.body,function(err){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'数据更改失败'});
        }else{
            res.redirect('/admin/friendList');        
        }       
    })
}

//添加账号
adminController.adminAdd = function(req,res){
    res.render('admin/adminAdd');       
}
//添加账号信息
adminController.adminInsert = function(req,res){
    //判断验证码
    if(req.body.code != req.session.code){
        res.send('验证不正确');
        return;
    }
    //判断两次密码是否一致
    if(req.body.password != req.body.repassword){
        res.send('两次密码不一致');
        return;     
    }
    //引入md5模块
    var md5=require('md5');
    // 取消两端空白字符
    req.body.name=req.body.name.trim();
    req.body.password=md5(req.body.password.trim());
    // 把数据添加到数据库
    adminModel.create(req.body,function(err){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'添加管理失败'});
        }else{
            res.render('admin/adminAdd');

        }       
    })
}
//账号列表
adminController.adminList = function(req,res){
    adminModel.find({},function(err,data){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'查询数据失败'});
        }else{
            res.render('admin/adminList',{admin:data});          
        }
    })
}
//删除账号
adminController.adminRemove = function(req,res){
    adminModel.remove({_id:req.params._id},function(err){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'数据删除失败'});
        }else{
            res.redirect('/admin/adminList');     
        }
    })
}
//编辑账号
adminController.adminEdit = function(req,res){
    adminModel.findOne({_id:req.params._id},function(err,data){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'查询数据失败'});
        }else{
            res.render('admin/adminEdit',{data:data});       
        }
    })
}
//更新账号数据
adminController.adminUpdate = function(req,res){
    // 更新数据
    adminModel.update({_id:req.body._id},req.body,function(err){
        if(err){
            res.render('admin/error',{synopsis:"ERROR",errText:'数据更改失败'});
        }else{
            res.redirect('/admin/adminList');        
        }       
    })
}
// 登录页面
adminController.login = function(req,res){
    res.render('admin/login');
}
//登录操作
adminController.doLogin = function(req,res){
    //引入md5模块
    var md5 = require('md5');
    //判断 验证码
    if(req.body.code != req.session.code){
        res.send('验证码不正确');
        return;
    }
    //获取用户和密码并把字符串两端的空白字符取消掉
    var name = req.body.name.trim();
    var password = md5(req.body.password.trim());
    adminModel.findOne({name:name},function(err,data){
        if(data==null){
            console.log('用户名不存在');
            res.render('admin/login');
        }else{
            if(err){
                console.log('查询失败');
                res.render('admin/login');
            }else{
                // 判断密码
                if(password==data.password){
                    req.session.user = data;
                    res.redirect('/admin');
                }else{
                    console.log('密码不正确');
                    res.render('admin/login');
                }
            }           
        }
    })
}
// 退出管理员的登录
adminController.logOut = function(req,res){
    req.session.user = null;
    res.redirect('/admin/login');   
}
//注册页面
adminController.register = function(req,res){
    res.render('admin/register');
}
// 验证码
adminController.code = function(req,res){
    // 引入验证码模块
    var captchapng = require('captchapng');
    // 验证码的内容
    var code = parseInt(Math.random()*9000+1000);
    // 把code 存储到服务器
    req.session.code = code;
    // 生成验证码图片的宽度,高度,验证码内容
    var p = new captchapng(120,30,code); 
    p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)
    var img = p.getBase64();
    var imgbase64 = new Buffer(img,'base64');
    res.send(imgbase64);
}
// 暴露控制器
module.exports=adminController;