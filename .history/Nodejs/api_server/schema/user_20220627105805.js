// 导入 Joi 来定义验证规则
const Joi = require("joi");
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