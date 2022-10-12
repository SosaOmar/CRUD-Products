const uuid = require("uuid");
const Products = require("../models/products.models");

const getAllProducts = async () => {
  const productsData = await Products.findAll();
  return productsData;
};

const createNewProduct = async (data) => {
  const newProduct = await Products.create({
    id: uuid.v4(),
    name: data.name,
    category: data.category,
    price: data.price,
    isAvailable: data.isAvailable,
  });

  return newProduct;
};

const getProductById = async (id) => {
  const productData = await Products.findOne({
    where: {
      id: id,
    },
  });

  return productData;
};

const updateProduct = async (id, dataToUpdate) => {
  const response = await Products.update(dataToUpdate, {
    where: {
      id: id,
    },
  });

  return response;
};

const destroyProduct = async (id) => {
  const data = await Products.destroy({
    where: {
      id: id,
    },
  });

  return data;
};

module.exports = {
  getAllProducts,
  createNewProduct,
  getProductById,
  updateProduct,
  destroyProduct,
};
