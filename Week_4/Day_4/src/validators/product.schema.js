const Joi = require("joi");

exports.createProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().positive().required(),
  description: Joi.string().max(500),
  tags: Joi.array().items(Joi.string())
});
