const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PositonsSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const Position = mongoose.model("Position", PositonsSchema);
module.exports = Position;
// This code defines a Mongoose schema and model for managing stock positions in a trading application.
// The `PositionsSchema` includes fields for product type, stock name, quantity, average price
