//前台控制器
var indexController = {};
//引入作品数据模型
var worksModel=require('../models/worksModel.js');
//引入小说数据模型
var chapterModel=require('../models/chapterModel.js');
//引入友链数据模型
var friendModel=require('../models/friendModel.js');
// 引入账号数据模型
var adminModel = require('../models/adminModel.js');
// 前台首页
indexController.index = function(req,res){
    // 查询栏目数据
    worksModel.find({}).sort({order:1}).exec(function(err,data){
        if(err){
            // 响应错误信息
            res.render('admin/error',{info:"ERROR",errText:'查询数据失败'});
        }else{
            getItemArticles(0)
            // 查询指栏目下的文章
            function getItemArticles(i){
                // 查询数据
                
                chapterModel.find({itemId:data[i]._id}).limit(10).exec(function(err,chapters){
                    // 把查询到的数据 放到 data
                    data[i].chapterlist = chapters;
                    if(i<data.length-1){
                        // 查询下一个栏目对应的文章列表
                        getItemArticles(++i)
                    }else{
                        // 响应模板
                        if(err){
                            res.render('admin/error',{info:"ERROR",errText:'查询数据失败'});
                        }else{
                            adminModel.find({}).exec(function(err,admins){
                                if(err){
                                    res.render('admin/error',{info:"ERROR",errText:'查询数据失败'});
                                }else{
                                    friendModel.find({}).exec(function(err,friends){
                                        res.render('index',{works:data,friends:friends,admin:admins});   
                                    })
                                }
                            })
                        }
                        
                    }
                })
            }
        }
    })
}
//导航列表
indexController.indexs = function(req,res){
    var pageSize = 2;
    //默认查询第一页数据
    var page = req.query.page?req.query.page:1;
    worksModel.find({}).sort({order:1}).exec(function(err,data){
        if (err) {
            res.send('失败');
        }else{
            friendModel.find({}).exec(function(err,friends){
                if(err){
                    res.send('失败');
                }else{
                    worksModel.find({_id:req.params._id}).exec(function(err,data){
                        if(err){
                        res.send('失败');
                    }else{
                        var maxPage = Math.ceil(data/pageSize);
                        // 处理页码上下限
                        if(page<1) page = 1;
                        if(page>maxPage) page = maxPage;
                        // 查询条件的便宜量
                        var offsetPage = pageSize*(page-1);
                        chapterModel.find({itemId:req.params._id}).limit(pageSize).skip(offsetPage).populate('itemId',{name:1}).exec(function(err,datas){
                            if(err){
                            res.send('失败');
                            }else{
                                
                                res.render('index/indexh',{works:data,chapter:datas,friends:friends,maxPage:maxPage,page:page});
                            }
                        }) 
                    }
                         
                    })
                }
            })
        }
    })       
}
//列表页
indexController.cont = function(req,res){
    worksModel.find({}).sort({order:1}).exec(function(err,data){
        if (err) {
            res.send('失败');
        }else{
            friendModel.find({}).exec(function(err,friends){
                if(err){
                    res.send('失败');
                }else{
                    chapterModel.find({_id:req.params._id}).exec(function(err,datas){
                        res.render('index/cont',{works:data,chapter:datas,friends:friends});
                    })
                }
            })
        }
    })
}
//内容页
indexController.conts = function(req,res){
    worksModel.find({}).sort({order:1}).exec(function(err,data){
        if (err) {
            res.send('失败');
        }else{
            friendModel.find({}).exec(function(err,friends){
                if(err){
                    res.send('失败');
                }else{
                    chapterModel.find({_id:req.params._id}).exec(function(err,datas){
                        res.render('index/conts',{works:data,chapter:datas,friends:friends});
                    })
                }
            })
        }
    })
}
//登录页面
indexController.login = function(req,res){
    res.render('index/login');
}
//登录操作
indexController.doLogin = function(req,res){
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
                    res.redirect('/');
                }else{
                    console.log('密码不正确');
                    res.render('admin/login');
                }
            }           
        }
    })
}
//注册页面
indexController.res= function(req,res){
    res.render('index/res');
}
//注册账号信息
indexController.indexInsert = function(req,res){
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
            res.render('admin/error',{synopsis:"ERROR",errText:'添加失败'});
        }else{
            res.render('index/login');

        }       
    })
}
//个人中心
indexController.user = function(req,res){
    worksModel.find({}).sort({order:1}).exec(function(err,data){
        if (err) {
            res.send('失败');
        }else{
            friendModel.find({}).exec(function(err,friends){
                if(err){
                    res.send('失败');
                }else{
                    res.render('index/user',{works:data,friends:friends});
                }
            })
        }
    })   
}
// 暴露控制器
module.exports = indexController;