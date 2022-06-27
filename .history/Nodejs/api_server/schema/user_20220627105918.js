/*
 $ @Author: 'Earl'
 $ @Date: 2022-06-27 10:58:02
 $ @LastEditors: 'Earl'
 $ @LastEditTime: 2022-06-27 10:59:18
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

const userSchema = {
  // 2.1 校验 req.body 中的数据
  body: {
    username: Joi.string().alphanum().min(3).max(12).required(),
    password: Joi.string()
      .pattern(/^[\S]{6,16}$/)
      .required(),
    repassword: Joi.ref("password"), //当前值必须和password值一致
  },
  // 2.2 校验 req.query 中的数据
  query: {
    name: Joi.string().alphanum().min(3).required(),
    age: Joi.number().integer().min(1).max(100).required(),
  },
  // 2.3 校验 req.params 中的数据
  params: {
    id: Joi.number().integer().min(0).required(),
  },
};
