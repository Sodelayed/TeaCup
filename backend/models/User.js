const mongoose = require("mongoose");
const roles = require("../constants/role");
const UserSchema = mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roleId: {
      type: Number,
      default: roles.BUYER,
    },
    name: {
      type: String,
      required: false,
    },
    surname: {
      type: String,
      required: false,
    },
    phonenumber: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    basket: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Basket",
      },
    ],
    order: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
