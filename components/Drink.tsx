const mongoose = require("mongoose");
const { Schema } = mongoose;

const drinkSchema = new Schema({
  drinkName: {
    type: String,
    required: true,
  },
  pumpe: Number,
});

module.exports = mongoose.models.Drink || mongoose.model("Drink", drinkSchema);
