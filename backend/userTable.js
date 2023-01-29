const mongoose = require("mongoose");
const User = new mongoose.Schema({
  username: {},
  score: Number,
});

module.exports = mongoose.model.Username || mongoose.model("Username", User);
