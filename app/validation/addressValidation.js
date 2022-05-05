const Joi = require("@hapi/joi");

module.exports = {
  addressValid: Joi.object({
      title: Joi.string().empty().required().messages({
        "string.base": `Title should be a type of text`,
        "any.empty": "Title is not allowed to be empty",
        "string.required": `Title is Required`,
      }),
      address1: Joi.string().empty().required().messages({
        "string.base": `Address should be a type of text`,
        "any.empty": "Address is not allowed to be empty",
        "string.required": `Address is Required`,
        "string.password": `Address format not valid`,
      }),
      address2: Joi.string().empty().required().messages({
        "string.base": `Address should be a type of text`,
        "any.empty": "Address is not allowed to be empty",
        "string.required": `Address is Required`,
        "string.password": `Address format not valid`,
      }),
      country: Joi.string()
        .empty()
        .required()
        .messages({
          "string.base": `Country should be a type of text`,
          "string.empty": "Country is not allowed to be empty",
          "string.required": `Country is Required`,
        }),
      state: Joi.string()
        .empty()
        .required()
        .messages({
          "string.base": `State should be a type of text`,
          "string.empty": "State is not allowed to be empty",
          "string.required": `State is Required`,
        }),
      city: Joi.string()
        .empty()
        .required()
        .messages({
          "string.base": `City should be a type of text`,
          "string.empty": "City is not allowed to be empty",
          "string.required": `City is Required`,
        }),
      pincode: Joi.string()
        .pattern(/^[0-9]+$/)
        .length(6)
        .empty()
        .required()
        .label("Pincode")
        .messages({
          "string.base": `Pincode should be a type of text`,
          "string.pattern.base": `Enter only Numbers`,
          "string.max": `Pincode should be a 6 Character '`,
          "string.empty": "Pincode is not allowed to be empty",
          "string.required": `Pincode is Required`,
        }),
    }),

    addressUpdate: Joi.object({
        title: Joi.string().empty().required().messages({
          "string.base": `Title should be a type of text`,
          "any.empty": "Title is not allowed to be empty",
          "string.required": `Title is Required`,
        }),
        address1: Joi.string().empty().required().messages({
          "string.base": `Address should be a type of text`,
          "any.empty": "Address is not allowed to be empty",
          "string.required": `Address is Required`,
          "string.password": `Address format not valid`,
        }),
        address2: Joi.string().empty().required().messages({
          "string.base": `Address should be a type of text`,
          "any.empty": "Address is not allowed to be empty",
          "string.required": `Address is Required`,
          "string.password": `Address format not valid`,
        }),
        country: Joi.string()
          .empty()
          .required()
          .messages({
            "string.base": `Country should be a type of text`,
            "string.empty": "Country is not allowed to be empty",
            "string.required": `Country is Required`,
          }),
        state: Joi.string()
          .empty()
          .required()
          .messages({
            "string.base": `State should be a type of text`,
            "string.empty": "State is not allowed to be empty",
            "string.required": `State is Required`,
          }),
        city: Joi.string()
          .empty()
          .required()
          .messages({
            "string.base": `City should be a type of text`,
            "string.empty": "City is not allowed to be empty",
            "string.required": `City is Required`,
          }),
        pincode: Joi.string()
          .pattern(/^[0-9]+$/)
          .length(6)
          .empty()
          .required()
          .label("Pincode")
          .messages({
            "string.base": `Pincode should be a type of text`,
            "string.pattern.base": `Enter only Numbers`,
            "string.max": `Pincode should be a 6 Character '`,
            "string.empty": "Pincode is not allowed to be empty",
            "string.required": `Pincode is Required`,
          }),
      }),
    };