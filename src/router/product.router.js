const router = require("express").Router();
const { faker } = require("@faker-js/faker");

const Products = require("../model/product.model");

router.post("/products", async (req, res) => {
  const dataProducts = req.body;
  await Products.sync();
  const createProduct = await Products.create({
    product_name: dataProducts.product_name,
    price: dataProducts.price,
    is_stock: dataProducts.is_stock,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Product Created",
  });
  console.log("PRODUCTO NUEVO", createProduct);
});

router.get("/products", async (req, res) => {
  const products = await Products.findAll();
  res.status(200).json({
    ok: true,
    status: 200,
    body: products,
  });
});

router.get("/products/:products_id", async (req, res) => {
  const id = req.params.products_id;
  const product = await Products.findOne({
    where: { product_id: id },
  });
  if (!product) {
    return res.status(404).json({ error: "El producto no existe" });
  }
  res.status(200).json({
    ok: true,
    status: 200,
    body: product,
  });
});

router.put("/products/:product_id", async (req, res) => {
  const id = req.params.product_id;
  const dataProducts = req.body;
  const updateProduct = await Products.update(
    {
      product_name: dataProducts.product_name,
      price: dataProducts.price,
      is_stock: dataProducts.is_stock,
    },
    { where: { product_id: id } }
  );
  res.status(200).json({
    ok: true,
    status: 200,
    body: updateProduct,
  });
});

router.delete("/products/:product_id", async (req, res) => {
  const id = req.params.product_id;
  const deleteProduct = await Products.destroy({
    where: {
      product_id: id,
    },
  });
  res.status(204).json({
    ok: true,
    status: 204,
    body: deleteProduct,
  });
});

module.exports = router;
