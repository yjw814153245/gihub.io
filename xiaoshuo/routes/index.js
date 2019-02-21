var express = require('express');
var router = express.Router();
// 引入前台控制器
var indexController = require('../controllers/indexController.js');
/* 首页 */
router.get('/', indexController.index);
//导航列表
router.get('/indexs/:_id', indexController.indexs);
//列表页
router.get('/cont/:_id', indexController.cont);
//内容页
router.get('/conts/:_id', indexController.conts);
//登录页面
router.get('/login',indexController.login);
//登录操作
router.post('/doLogin',indexController.doLogin);
//注册页面
router.get('/res',indexController.res);
//注册信息
router.post('/indexInsert',indexController.indexInsert);
//个人中心
router.get('/user',indexController.user);
module.exports = router;
