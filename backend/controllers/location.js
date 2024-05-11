const Location = require("../models/Location");

function addLocation(location) {
  return Location.create(location);
}

function getLocations() {
  return Location.find();
}

module.exports = {
  addLocation,
  getLocations,
};
