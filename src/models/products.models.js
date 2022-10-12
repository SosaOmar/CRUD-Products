const { DataTypes, Model } = require("sequelize");

const db = require("../utils/database");

const Products = db.define("products", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  isAvailable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: "is_available",
    defaultValue: true,
  },
});

module.exports = Products;
