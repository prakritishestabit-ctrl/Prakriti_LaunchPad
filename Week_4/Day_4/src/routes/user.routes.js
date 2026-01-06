const express = require("express");
const validate = require("../middlewares/validate");
const { createUserSchema } = require("../validators/user.schema");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.post("/", validate(createUserSchema), userController.createUser);

module.exports = router;
