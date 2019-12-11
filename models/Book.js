const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: {
    type: "string",
    required: true
  },
  author: {
    type: "string",
    required: true
  },
  description: {
    type: "string",
    required: true
  }
});

module.exports = mongoose.model("Book", BookSchema);
