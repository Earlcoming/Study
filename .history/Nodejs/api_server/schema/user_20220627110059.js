/*
 $ @Author: 'Earl'
 $ @Date: 2022-06-27 10:58:02
 $ @LastEditors: 'Earl'
 $ @LastEditTime: 2022-06-27 11:00:19
 $ @FilePath: \daoqid:\Study\Nodejs\api_server\schema\user.js
 $ @Description: 
 */
// 导入 Joi 来定义验证规则
const Joi = require("joi");
/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 1. 导入 @escook/express-joi
const expressJoi = require("@escook/express-joi");

const username = Joi.string().alphanum().min(3).max(12).required();
const password = Joi.string()
  .pattern(/^[\S]{6,16}$/)
  .required();
const repassword = Joi.ref("password");

const userSchema = {
  // 校验 req.body 中的数据
  body: {
    username,
    password,
    repassword, //当前值必须和password值一致
  },
};
