module.exports = function (product) {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    category: product.category,
    img: product.img,
    description: product.description,
    compound: product.compound,
  };
};
