const { BOOLEAN } = require("sequelize");
const productController = require("./products.controllers");

const getProductsService = (req, res) => {
  productController
    .getAllProducts()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createNewProductService = (req, res) => {
  const newProductData = req.body;
  if ((newProductData.name && newProductData.category, newProductData.price)) {
    productController
      .createNewProduct(newProductData)
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Missing Data" });
  }
};

const getProductByIdService = (req, res) => {
  const id = req.params.id;

  productController
    .getProductById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Invalid id" });
      }
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const patchProductService = (req, res) => {
  const id = req.params.id;

  const { name, category, price, isAvailable } = req.body;
  productController
    .updateProduct(id, { name, category, price, isAvailable })
    .then((response) => {
      if (response[0]) {
        res
          .status(200)
          .json({ message: `Product id = ${id}, edited succesfully!  ` });
      } else {
        res.status(400).json({ message: "invalid id" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const destroyProductService = (req, res) => {
  const id = req.params.id;
  productController
    .destroyProduct(id)
    .then((response) => {
      if (response) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const putProduct = (req, res) => {
  const id = req.params.id;
  const { name, category, price, isAvailable } = req.body;

  if (name && category && price && (isAvailable !== undefined)) {
    productController
      .updateProduct(id, { name, category, price, isAvailable })
      .then((response) => {
        if (response[0]) {
          res.status(200).json({ message: `Product with id : ${id} was edited` });
        } else {
          res.status(404).json({ message: `Id:${id} is invalid` });
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "missing data",
      fields: {
        name: "string",
        category: "string",
        price: "float",
        isAvailable: "bool",
      },
    });
  }
};

module.exports = {
  getProductsService,
  createNewProductService,
  getProductByIdService,
  destroyProductService,
  patchProductService,
  putProduct
};
