const express = require("express");

const router = express.Router({ mergeParams: true });

router.use("/", require("./auth"));
router.use("/products", require("./products"));
router.use("/orders", require("./orders"));
router.use("/baskets", require("./baskets"));
router.use("/users", require("./users"));
router.use("/locations", require("./location"));
module.exports = router;
