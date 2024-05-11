const mongoose = require("mongoose");

const BasketSchema = mongoose.Schema({
  product: {
    type: Object,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  count: {
    type: Number,
    required: true,
  },
  finalPrice: {
    type: Number,
    required: true,
  },
});

const Basket = mongoose.model("Basket", BasketSchema);

module.exports = Basket;
