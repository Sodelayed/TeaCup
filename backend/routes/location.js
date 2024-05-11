const express = require("express");
const mapLocation = require("../helpers/mapLocation");
const router = express.Router({ mergeParams: true });
const { addLocation, getLocations } = require("../controllers/location");
// Добавить локацию
router.post("/", async (req, res) => {
  const newLocation = await addLocation({
    category: req.body.category,
    title: req.body.title,
    adress: req.body.adress,
    coords: req.body.coords,
  });

  res.send({ data: newLocation });
});
// Получить все локации

router.get("/", async (req, res) => {
  const locations = await getLocations();

  res.send({ data: locations.map((el) => mapLocation(el)) });
});
module.exports = router;
