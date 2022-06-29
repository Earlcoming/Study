const Joi = require("joi");

const username = Joi.string().alphanum().min(2).max(16).required();

const password = Joi.string()
  .pattern(/^[\s]{5,16}$/)
  .required();

exports.reg_login_schema = {
  body: {
    username,
    password,
  },
};
