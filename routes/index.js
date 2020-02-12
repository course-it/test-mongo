var express = require('express');
var router = express.Router();

const ProductController = require('../controllers/productController')
const ProductService = require('../Service/ProductService')
const ProductInstance = new ProductController(new ProductService())

router.get('/products', (req, res) => {
  console.log('Soy una ruta')
  ProductInstance.getProducts(req, res)
})

module.exports = router;
