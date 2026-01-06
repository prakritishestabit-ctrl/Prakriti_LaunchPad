exports.createProduct = async (req, res) => {
  res.status(201).json({
    message: "Product created",
    data: req.body
  });
};
