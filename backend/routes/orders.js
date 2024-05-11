const express = require("express");
const {
  addOrder,
  getOrders,
  changeOrdersState,
} = require("../controllers/order");
const hasRole = require("../middlewares/hasRole.js");
const authentificated = require("../middlewares/authentificated.js");
const ROLES = require("../constants/role.js");
const mapOrder = require("../helpers/mapOrder.js");
const router = express.Router({ mergeParams: true });

// Добавление в историю заказов
router.post(
  "/:userId",
  authentificated,
  hasRole([ROLES.BUYER]),
  async (req, res) => {
    const allUsersOrders = await addOrder(req.params.userId, {
      client: req.body.client,
      owner: req.user.id,
      phonenumber: req.body.phonenumber,
      email: req.body.email,
      selectedTime: req.body.selectedTime,
      adress: req.body.adress,
      state: req.body.state,
      typeofPayment: req.body.typeofPayment,
      comment: req.body.comment,
      basketPrice: req.body.basketPrice,
      basketCount: req.body.basketCount,
      items: req.body.items,
    });

    res.send({ data: allUsersOrders.map((el) => mapOrder(el)) });
  }
);

// Получение всей истории заказов
router.get(
  "/",
  authentificated,
  hasRole([ROLES.ADMINISTRATOR, ROLES.MODERATOR]),
  async (req, res) => {
    const allOrders = await getOrders();

    res.send({ data: allOrders.map((el) => mapOrder(el)) });
  }
);

// Изменение состояния заказа
router.patch(
  "/:orderId",
  authentificated,
  hasRole([ROLES.ADMINISTRATOR, ROLES.MODERATOR]),
  async (req, res) => {
    const allOrders = await changeOrdersState(req.params.orderId, {
      state: req.body.state,
    });

    res.send({ data: allOrders.map((el) => mapOrder(el)) });
  }
);
module.exports = router;
