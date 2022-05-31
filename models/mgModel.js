const mongoose = require("mongoose");

const godsSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    unique: true,
  },
});

const Gods = new mongoose.model("Gods", godsSchema);

module.exports = Gods;
