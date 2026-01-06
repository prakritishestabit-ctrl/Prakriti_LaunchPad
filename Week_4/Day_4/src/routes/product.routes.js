const express = require("express");
const validate = require("../middlewares/validate");
const { createProductSchema } = require("../validators/product.schema");
const productController = require("../controllers/product.controller");

const router = express.Router();

router.post("/", validate(createProductSchema), productController.createProduct);

module.exports = router;
