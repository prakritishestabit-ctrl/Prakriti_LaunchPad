const Product = require("../models/product.model");

exports.find = (filter, options) => {
  return Product.find(filter)
    .sort(options.sort)
    .skip(options.skip)
    .limit(options.limit);
};

exports.findById = (id) => {
  return Product.findById(id);
};

exports.softDelete = (id) => {
  return Product.findByIdAndUpdate(
    id,
    { isDeleted: true, deletedAt: new Date() },
    { new: true }
  );
};

