//引入数据库配置模块
var mongoose=require('../configs/db_config.js');
//定义章节骨架
var chapterSchema=new mongoose.Schema({
    itemId:{
        type:String,
        ref:'works'
    },
    //Id
    chapterId:{
        type:String,
        ref:'chapter'
    },
    //小说名
    title:String,
    //分类名
    subsection:String,
    //小说封面
    imgurl:String,
    //章节名
    keywords:String,
    //小说内容
    content:String,   
    //发布时间
    ctime: {
        type: Date, 
        default: new Date()
    },
    //描述
    description:String
});
//数据库模型 
var chapterModel=mongoose.model('chapter',chapterSchema);
// 暴露 栏目数据模型
module.exports=chapterModel;