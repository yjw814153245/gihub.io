//引入模板
var mongoose=require('mongoose');
//数据库地址
var DBURL='mongodb://localhost:27017/mysjk';
//链接数据库
mongoose.connect(DBURL,function(err){
    if(err){
        console.log('数据库连接失败');
    }else {
        console.log('数据库连接成功');
    }

});
//暴露数据库模型
module.exports=mongoose;