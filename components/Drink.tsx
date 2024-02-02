const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema({
  drinkName: String,
  pumpe: Number,
});

module.exports = mongoose.model("Drink", drinkSchema);
