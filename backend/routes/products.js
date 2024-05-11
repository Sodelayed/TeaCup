const express = require("express");

const {
  addProduct,
  editProduct,
  deleteProduct,
  getProducts,
  getProduct,
} = require("../controllers/product.js");
const hasRole = require("../middlewares/hasRole.js");
const authentificated = require("../middlewares/authentificated.js");
const mapProduct = require("../helpers/mapProduct.js");
const ROLES = require("../constants/role.js");

const router = express.Router({ mergeParams: true });

// Получить весь список продуктов
router.get("/", async (req, res) => {
  const { products, lastPage } = await getProducts(
    req.query.search,
    req.query.limit,
    req.query.page,
    req.query.category,
    req.query.method
  );

  res.send({ data: { products: products.map(mapProduct), lastPage } });
});
// Получить выбранный продукт
router.get("/:id", async (req, res) => {
  const product = await getProduct(req.params.id);
  res.send({ data: mapProduct(product) });
});
// Добавить новый продукт
router.post(
  "/",
  authentificated,
  hasRole([ROLES.ADMINISTRATOR]),
  async (req, res) => {
    await addProduct({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      img: req.body.img,
      description: req.body.description,
      compound: req.body.compound,
    });

    res.send({ error: null });
  }
);
// Изменить существующий продукт
router.patch(
  "/:id",
  authentificated,
  hasRole([ROLES.ADMINISTRATOR]),
  async (req, res) => {
    const newProduct = await editProduct(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      img: req.body.img,
      description: req.body.description,
      compound: req.body.compound,
    });

    res.send({ data: mapProduct(newProduct) });
  }
);
// Удалить продукт
router.delete(
  "/:id",
  authentificated,
  hasRole([ROLES.ADMINISTRATOR]),
  async (req, res) => {
    await deleteProduct(req.params.id);
    res.send({ err: null });
  }
);

module.exports = router;
