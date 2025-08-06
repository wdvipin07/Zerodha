const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define the schema for an order
const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String, // 'buy' or 'sell'
});

// Create the model from the schema
const Order = mongoose.model("Order", OrdersSchema);
module.exports = Order;
// This code defines a Mongoose schema and model for managing orders in a trading application.
