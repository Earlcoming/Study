const Joi = require("joi");

// integer 整数
// alphanum 字母数字
const username = Joi.string().alphanum().min(2).max(16).required();

const password = Joi.string()
  .pattern(/^[\S]{5,12}$/)
  .required();

const id = Joi.number().integer().min(1).required();
const likename = Joi.string().required();
const email = Joi.string().email().required();
const avator = Joi.string().dataUri().required();

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
    oldPass: password,
    // 使用 joi.not(joi.ref('oldPwd')).concat(password) 规则，验证 req.body.newPwd 的值
    // 解读：
    // 1. joi.ref('oldPwd') 表示 newPwd 的值必须和 oldPwd 的值保持一致
    // 2. joi.not(joi.ref('oldPwd')) 表示 newPwd 的值不能等于 oldPwd 的值
    // 3. .concat() 用于合并 joi.not(joi.ref('oldPwd')) 和 password 这两条验证规则
    newPass: Joi.not(Joi.ref("oldPass")).concat(password),
  },
};

// 图片base64验证, 更新头像
exports.avator_schema = {
  body: {
    avator,
  },
};

// 新增文章分类
const alisa = Joi.string().alphanum().required();
const name = Joi.string().required();
exports.cates_schema = {
  body: {
    name,
    alisa,
  },
};

// 分类ID
exports.delete_cate_schema = {
  params: {
    id,
  },
};

// 更新文章分类
exports.updateCate_schema = {
  body: {
    id,
    name,
    alisa,
  },
};

const title = Joi.string().required();
const cate_id = Joi.number().integer().min(1).required();
const content = Joi.string().required().allow("");
const state = Joi.string().valid("已发布", "草稿").required();

// 新增文章验证规则
exports.addArticle_schema = {
  body: {
    title,
    cate_id,
    content,
    state,
  },
};
