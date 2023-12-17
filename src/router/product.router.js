const router = require("express").Router();
const { faker } = require("@faker-js/faker");

const Products = require("../model/product.model");

router.post("/products", async (req, res) => {
  const dataProducts = req.body
  await Products.sync();
  const createProduct = await Products.create({
    product_name: dataProducts.product_name,
    price: dataProducts.price,
    is_stock:  dataProducts.is_stock,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Product Created",
  }); console.log("PRODUCTO NUEVO", createProduct )
});


router.get("/products", async (req, res) => {
 const products = await  Products.findAll()
 res.status(200).json({
  ok:true,
  status:200, 
  body: products
 })
});

router.get("/products/:products_id", async (req, res) => {
  const id = req.params.products_id
  const product = await  Products.findOne({
      where: {product_id :id}
  });

 res.status(200).json({
  ok:true,
  status:200,
  body: product,
 })
})



router.put("/products", async (req, res) =>  {
  const updateProduct = await Products.update()

});

router.delete("/products", (req, res) => {
  res.send("I'm a router ");
});

module.exports = router;
