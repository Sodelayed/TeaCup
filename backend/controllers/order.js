const Basket = require("../models/Basket");
const User = require("../models/User");
const Order = require("../models/Order");

// Добавление в историю заказов
async function addOrder(userId, data) {
  const newOrder = await Order.create(data);
  const currentBasket = await Basket.find({ owner: userId });
  await User.findByIdAndUpdate(userId, {
    $push: { order: newOrder },
    $pull: { basket: currentBasket },
  });
  await Basket.deleteMany({ owner: userId });

  const allUsersOrders = await Order.find({ owner: userId }).populate("owner");

  return allUsersOrders;
}

//Изменение состояния заказа

async function changeOrdersState(orderId, newData) {
  await Order.findByIdAndUpdate(orderId, newData, {
    returnDocument: "after",
  });

  const allUsersOrders = await Order.find().populate("owner");
  return allUsersOrders;
}
async function getOrders() {
  const allOrders = await Order.find().populate("owner");

  return allOrders;
}
module.exports = {
  addOrder,
  changeOrdersState,
  getOrders,
};
