//引入数据库配置模块
var mongoose = require('../configs/db_config.js');
//定义管理员骨架
var adminSchema = new mongoose.Schema({
    ID:Number,
    name:String,        
    password:String,
    state:String,
    ctime: {
        type: Date, 
        default: new Date()
    },
});
//创建数据库模型
var adminModel = mongoose.model('admin', adminSchema);
    
// 暴露 栏目数据模型
module.exports = adminModel;