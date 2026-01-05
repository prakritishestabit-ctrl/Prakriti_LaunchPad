const productRepo = require("../repositories/product.repository");
const { buildProductQuery } = require("../repositories/product.query");
const { NotFoundError } = require("../utils/NotFoundError");

exports.getProducts = async (query) => {
  const { filter, options } = buildProductQuery(query);
  return productRepo.find(filter, options);
};

exports.deleteProduct = async (id) => {
  const product = await productRepo.findById(id);
  if (!product) {
    throw new NotFoundError("Product not found");
  }
  return productRepo.softDelete(id);
};
