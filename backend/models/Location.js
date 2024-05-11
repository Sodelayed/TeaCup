const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  coords: {
    type: Array,
    required: true,
  },
});

const Location = mongoose.model("Location", LocationSchema);

module.exports = Location;
