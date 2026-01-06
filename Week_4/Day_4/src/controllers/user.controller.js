exports.createUser = async (req, res) => {
  res.status(201).json({
    message: "User created",
    data: req.body
  });
};
