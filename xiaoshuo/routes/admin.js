var express = require('express');
var router = express.Router();

//引入后台控制器
var adminController=require('../controllers/adminController.js');
//首页
router.get('/',adminController.index);
//新建分类
router.get('/worksAdd',adminController.worksAdd);
//插入分类数据
router.post('/worksInsert',adminController.worksInsert);
//分类列表
router.get('/worksList',adminController.worksList);
// 删除分类
router.get('/worksRemove/:_id',adminController.worksRemove);
//编辑分类数据
router.get('/worksEdit/:_id',adminController.worksEdit);
//更新分类数据
router.post('/worksUpdate',adminController.worksUpdate);
//发布章节页面
router.get('/chapterAdd',adminController.chapterAdd);
//发出章节数据
router.post('/chapterInsert',adminController.chapterInsert);
//章节目录
router.get('/chapterList',adminController.chapterList);
//删除章节
router.get('/chapterRemove/:_id',adminController.chapterRemove);
//编辑章节内容
router.get('/chapterEdit/:_id',adminController.chapterEdit);
//修改小说封面
router.post('/chapterImgUrlUpdate',adminController.chapterImgUrlUpdate);
//修改章节内容
router.post('/chapterTextUpdate',adminController.chapterTextUpdate);
//添加友链
router.get('/friendAdd',adminController.friendAdd);
//插入友链信息 
router.post('/friendInsert',adminController.friendInsert);
//友链列表
router.get('/friendList',adminController.friendList);
//删除友链
router.get('/friendRemove/:_id',adminController.friendRemove);
//编辑友链内容
router.get('/friendEdit/:_id',adminController.friendEdit);
//更新友链数据
router.post('/friendUpdate',adminController.friendUpdate);
//添加账号
router.get('/adminAdd',adminController.adminAdd);
//添加账号信息 
router.post('/adminInsert',adminController.adminInsert);
//账号列表
router.get('/adminList',adminController.adminList);
//删除账号
router.get('/adminRemove/:_id',adminController.adminRemove);
//编辑账号
router.get('/adminEdit/:_id',adminController.adminEdit);
//更新账号数据
router.post('/adminUpdate',adminController.adminUpdate);
//登录页面
router.get('/login',adminController.login);
//登录操作
router.post('/doLogin',adminController.doLogin);
//退出登录
router.get('/logOut',adminController.logOut);
//注册页面
router.get('/register',adminController.login);
//验证码 
router.get('/code',adminController.code);
module.exports = router;
