const Product = require("../models/Product");
const sortProduct = require("../helpers/sortProduct");
// add

function addProduct(product) {
  return Product.create(product);
}

// edit
async function editProduct(id, product) {
  const newProduct = await Product.findByIdAndUpdate(id, product, {
    returnDocument: "after",
  });

  return newProduct;
}
//delete
function deleteProduct(id) {
  return Product.deleteOne({ _id: id });
}
// get list with search and pagination
async function getProducts(
  search = "",
  limit = 8,
  page = 1,
  category = "",
  method = "popular"
) {
  const [products, count] = await Promise.all([
    Product.find({
      name: { $regex: search, $options: "i" },
      category: { $regex: category, $options: "i" },
    }),
    Product.countDocuments({
      name: { $regex: search, $options: "i" },
      category: { $regex: category, $options: "i" },
    }),
  ]);

  products.sort((a, b) => sortProduct(a, b, method));

  return {
    products: products.slice((page - 1) * limit, limit * page),
    lastPage: Math.ceil(count / limit),
  };
}
//get item

function getProduct(id) {
  return Product.findById(id);
}

module.exports = {
  addProduct,
  editProduct,
  deleteProduct,
  getProducts,
  getProduct,
};
