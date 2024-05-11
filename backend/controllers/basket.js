const Basket = require("../models/Basket");
const User = require("../models/User");

// add
async function addProductToBasket(userId, newProduct) {
  const searchBasket = await Basket.findOne({ product: newProduct.product });

  if (!!searchBasket) {
    if (searchBasket.count !== 5) {
      await Basket.findByIdAndUpdate(
        searchBasket._id,
        {
          count: searchBasket.count + 1,
          finalPrice:
            Number(searchBasket.product.price) * (searchBasket.count + 1),
        },
        {
          returnDocument: "after",
        }
      );
    }
  } else {
    const newBasket = await Basket.create(newProduct);
    await User.findByIdAndUpdate(userId, {
      $push: { basket: newBasket },
    });
  }

  const allUserBaskets = await Basket.find({ owner: userId }).populate("owner");

  return allUserBaskets;
}
// delete
async function deleteProductFromBasket(userId, basketId) {
  await Basket.deleteOne({ _id: basketId });
  await User.findByIdAndUpdate(userId, { $pull: { basket: basketId } });
  const allUserBaskets = await Basket.find({ owner: userId }).populate("owner");
  return allUserBaskets;
}
//edit

async function changeCountOfProduct(userId, basketId, newData) {
  await Basket.findByIdAndUpdate(basketId, newData, {
    returnDocument: "after",
  });

  const allUserBaskets = await Basket.find({ owner: userId }).populate("owner");
  return allUserBaskets;
}

module.exports = {
  addProductToBasket,
  deleteProductFromBasket,
  changeCountOfProduct,
};
