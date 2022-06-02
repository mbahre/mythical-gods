module.exports = function (err, req, res, next) {
  if (err.message === "This page does not exist") {
    res.status(404).json({ status: "fail", message: err.message });
  }
};
