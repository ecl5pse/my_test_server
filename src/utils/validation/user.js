const Joi = require('@hapi/joi');

const nameSchema = Joi.string().min(3).max(255);
const emailSchema = Joi.string().email();
const passwordSchema = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'));

module.exports = Joi.object({
                              firstName: nameSchema.label('First name ').required(),
                              lastName: nameSchema.label('Last Name').required(),
                              email: emailSchema.label('Email'),
                              password: passwordSchema.label('Password').required(),
                            }).min(1).max(4);