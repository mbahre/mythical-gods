function errorMsg(err, req, res, next) {
  if (err.message === "This page does not exist") {
    res.status(404).json({ status: "fail", message: err.message });
  }
}

module.exports = errorMsg;
