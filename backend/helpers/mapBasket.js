module.exports = function (basket) {
  return {
    id: basket._id,
    product: {
      name: basket.product.name,
      img: basket.product.img,
      price: basket.product.price,
      volume: basket.product.volume,
      id: basket.product.id,
    },
    owner: basket.owner.login,
    count: basket.count,
    finalPrice: basket.finalPrice,
  };
};
