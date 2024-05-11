const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    client: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    selectedTime: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    typeofPayment: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: false,
    },
    basketPrice: {
      type: Number,
      required: true,
    },
    basketCount: {
      type: Number,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
