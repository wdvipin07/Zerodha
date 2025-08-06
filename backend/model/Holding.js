const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const Holding = mongoose.model("Holding", HoldingsSchema);

module.exports = Holding;
// This code defines a Mongoose schema and model for managing stock holdings in a trading application.
// The `HoldingsSchema` includes fields for stock name, quantity, average price, current
