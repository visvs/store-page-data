const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const description = Joi.string().min(10);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();
const categoryID = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  categoryId: categoryID.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  categoryId: categoryID
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
