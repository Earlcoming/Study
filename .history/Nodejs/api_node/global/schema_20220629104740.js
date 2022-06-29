const Joi = require("joi");

const username = Joi.string().alphanum().min(2).max(16).required();

const password = Joi.string()
  .pattern(/^[\S]{5,12}$/)
  .required();

// integer 整数

const id = Joi.number().integer().min(1).required();
const likename = Joi.string().required();
const email = Joi.string().email().required();

// 登录用户名和密码验证
exports.reg_login_schema = {
  body: {
    username,
    password,
  },
};

// 更新用户，post请求参数验证规则
exports.userInfo_schema = {
  // body，只负责对req.body里面的数据进行验证
  body: {
    id,
    likename,
    email,
  },
};

// 密码验证规则
exports.update_password_schema = {
  body: {
    password,
  },
};
