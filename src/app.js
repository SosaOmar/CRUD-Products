const express = require("express");

const dbCrudProducts = require("./utils/database");

const initModels = require("./models/initModels");

// const config = require("./config");

const { port } = require("./config");

const productsRouter = require("./products/products.router")

dbCrudProducts
  .authenticate()
  .then(() => console.log("DB conection ok"))
  .catch((err) => console.log(err));

dbCrudProducts
  .sync()
  .then(() => console.log("DataBase sync"))
  .catch((err) => console.log(err));

initModels();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "OK!",
    users: `localhost:${port}/api/v1/products`,
  });
});

app.use("/products", productsRouter);


app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
