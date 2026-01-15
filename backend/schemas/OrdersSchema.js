const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    user: String, // Add user field
});

module.exports = { OrdersSchema };