const router = require("express").Router();
const productsServices = require("./products.services");

router.get("/", productsServices.getProductsService);
router.post("/", productsServices.createNewProductService);

router.get("/:id", productsServices.getProductByIdService);

router.delete("/:id", productsServices.destroyProductService);
router.patch("/:id", productsServices.patchProductService);
router.put("/:id", productsServices.putProduct);

module.exports = router;