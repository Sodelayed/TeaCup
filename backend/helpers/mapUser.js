const mapBasket = require("./mapBasket");
const mongoose = require("mongoose");
const mapOrder = require("./mapOrder");
module.exports = function (user) {
  return {
    id: user.id,
    login: user.login,
    roleId: user.roleId,
    name: user.name,
    surname: user.surname,
    phonenumber: user.phonenumber,
    email: user.email,
    registeredAt: user.createdAt,
    basket: user.basket.map((basket) =>
      mongoose.isObjectIdOrHexString(basket) ? basket : mapBasket(basket)
    ),
    order: user.order.map((order) =>
      mongoose.isObjectIdOrHexString(order) ? order : mapOrder(order)
    ),
  };
};
