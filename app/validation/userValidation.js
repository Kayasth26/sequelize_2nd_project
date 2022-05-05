const Joi = require("@hapi/joi");

module.exports = {
  register: Joi.object({
    name: Joi.string().min(3).max(30).empty().required().messages({
      "string.base": `Name should be a type of text`,
      "string.min": `Name should be a 3 Character '`,
      "string.max": `Name should be a 30 Character '`,
      "string.empty": "Name is not allowed to be empty",
      "any.required": `Name is Required`,
    }),
    email: Joi.string().email().empty().required().label("Email").messages({
      "string.base": `Email should be a type of text`,
      "string.email": `Email format not valid`,
      "string.empty": "Email is not allowed to be empty",
      "string.required": `Email is Required`,
    }),
    gender: Joi.string().empty().required().valid("male", "female").messages({
      "string.base": `Gender should be a type of text`,
      "string.empty": "Gender is not allowed to be empty",
      "string.required": `Gender is Required`,
    }),
    password: Joi.string().empty().required().messages({
      "string.base": `Password should be a type of text`,
      "any.empty": "Password is not allowed to be empty",
      "string.required": `Password is Required`,
      "string.password": `Password format not valid`,
    }),
    confirmpassword: Joi.string()
      .empty()
      .required()
      .valid(Joi.ref("password"))
      .messages({
        "string.base": `Confirm Password should be a type of text`,
        "string.empty": "Confirm Password is not allowed to be empty",
        "string.required": `Confirm Password is Required`,
        "any.only": "Confirm Password doesn't match password",
      }),
  }),
  login: Joi.object({
    email: Joi.string().email().empty().required().label("Email").messages({
      "string.base": `Email should be a type of text`,
      "string.email": `Email format not valid`,
      "string.empty": "Email is not allowed to be empty",
      "string.required": `Email is Required`,
    }),
    password: Joi.string().empty().required().messages({
      "string.base": `Password should be a type of text`,
      "any.empty": "Password is not allowed to be empty",
      "string.required": `Password is Required`,
      "string.password": `Password format not valid`,
    }),
  }),
} 