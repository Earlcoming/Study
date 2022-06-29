const Joi = require("joi");

const username = Joi.string().alphanum().min(2).max(16).required();

const password = Joi.string()
  .pattern(/^[\S]{5,12}$/)
  .required();

const id = Joi.number().integer().min(1).required();
const likename = Joi.string().required();
const email = Joi.string().email().required();
exports.reg_login_schema = {
  body: {
    username,
    password,
  },
};

exports.userInfo = {
  body: {
  id,}
};
