//友链数据模型
//引入配置模块
var mongoose=require('../configs/db_config.js')
//定义作品骨架
var friendSchema = new mongoose.Schema({
    // 友链名称
    name:String,
    ctime: {
        type:Date,
        default: new Date()
    },
    //友链网址
    address:String,
    //友链简述
    sketch:String
});

//创建数据库模型
var friendModel = mongoose.model('friend',friendSchema);

//暴露栏目数据模型
module.exports=friendModel;