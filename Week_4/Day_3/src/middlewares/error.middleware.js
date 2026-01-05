module.exports = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
    code: err.code || "SERVER_ERROR",
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
  });
};
