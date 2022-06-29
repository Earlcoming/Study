const Joi = require("joi");

const username = Joi.string().alphanum().min(2).max(16).