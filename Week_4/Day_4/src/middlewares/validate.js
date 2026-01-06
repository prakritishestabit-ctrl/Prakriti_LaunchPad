const Joi = require("joi");

const validate = (schema, property = "body") => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      return res.status(400).json({
        message: "Validation Error",
        errors: error.details.map(err => err.message)
      });
    }

    req[property] = value; // sanitized + validated data
    next();
  };
};

module.exports = validate;
