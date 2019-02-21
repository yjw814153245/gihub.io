//作品数据模型
//引入配置模块
var mongoose=require('../configs/db_config.js')
//定义作品骨架
var worksSchema = new mongoose.Schema({
    name:String,
    ctime: {
        type:Date,
        default: new Date()
    },
    classify:String,
    synopsis:String,
    order:Number
});

//创建数据库模型
var worksModel = mongoose.model('works',worksSchema);

//暴露栏目数据模型
module.exports=worksModel;