const express = require('express');
const productController = require('../controllers/product')

const router = express.Router();

router.get('', productController.getAll)//get all products
router.post('/create', productController.checkPriceMiddleware, productController.create);//create a new product
router.get('/:id', productController.getProductById);//get a product by id
router.put('/:id', productController.updateProductById);//update
router.delete('/:id', productController.deleteProductById)//delete

module.exports = router;