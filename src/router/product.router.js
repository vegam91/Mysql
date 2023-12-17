const router = require("express").Router();
const { faker } = require("@faker-js/faker");

const Products = require("../model/product.model");

router.get("/products", async (req, res) => {
 const products = await  Products.findAll()
 res.status(200).json({
  ok:true,
  status:200, 
  body: products
 })
});

router.get("/products", (req, res) => {
  res.send("I'm a router ");
});

router.post("/products", async (req, res) => {
  await Products.sync();
  const createProduct = await Products.create({
    product_name: faker.commerce.product(),
    price: faker.commerce.price(),
    is_stock: faker.datatype.boolean(),
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Product Created",
  }); console.log("PRODUCTO NUEVO", createProduct )
});

router.put("/products", (req, res) => {
  res.send("I'm a router ");
});

router.delete("/products", (req, res) => {
  res.send("I'm a router ");
});

module.exports = router;
