const productService = require("../services/product.service");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await productService.getProducts(req.query);
    res.json({ success: true, data: products });
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    res.json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};
