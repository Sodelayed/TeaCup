module.exports = function (location) {
  return {
    id: location.id,
    category: location.category,
    title: location.title,
    adress: location.adress,
    coords: location.coords,
  };
};
