const express = require("express");

const {
  addProductToBasket,
  deleteProductFromBasket,
  changeCountOfProduct,
} = require("../controllers/basket.js");
const hasRole = require("../middlewares/hasRole.js");
const authentificated = require("../middlewares/authentificated.js");
const mapUser = require("../helpers/mapUser.js");
const mapBasket = require("../helpers/mapBasket.js");
const ROLES = require("../constants/role.js");

const router = express.Router({ mergeParams: true });

// Добавление в корзину
router.post(
  "/:userId",
  authentificated,
  hasRole([ROLES.BUYER]),
  async (req, res) => {
    const allUserBaskets = await addProductToBasket(req.params.userId, {
      product: req.body.product,
      owner: req.user.id,
      count: req.body.count,
      finalPrice: req.body.finalPrice,
    });

    res.send({ data: allUserBaskets.map((el) => mapBasket(el)) });
  }
);

// Изменение количества товара
router.patch(
  "/:userId/:basketId",
  authentificated,
  hasRole([ROLES.BUYER]),
  async (req, res) => {
    const allUserBaskets = await changeCountOfProduct(
      req.params.userId,
      req.params.basketId,
      {
        count: req.body.count,
        finalPrice: req.body.startingPrice * req.body.count,
      }
    );

    res.send({ data: allUserBaskets.map((el) => mapBasket(el)) });
  }
);
// Удаление из корзины
router.delete(
  "/:userId/:basketId",
  authentificated,
  hasRole([ROLES.BUYER]),
  async (req, res) => {
    const allUserBaskets = await deleteProductFromBasket(
      req.params.userId,
      req.params.basketId
    );
    res.send({ data: allUserBaskets.map((el) => mapBasket(el)) });
  }
);

module.exports = router;
