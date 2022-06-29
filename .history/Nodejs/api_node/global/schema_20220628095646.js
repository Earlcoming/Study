const Joi = require("joi");

const username = Joi.string().alphanum().min(2).max(16).require()

const password = Joi.string().pattern(/^[\s]{6,16}&/).require()