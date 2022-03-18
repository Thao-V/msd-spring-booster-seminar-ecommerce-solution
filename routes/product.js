const express = require('express');
const productController = require('../controllers/product');
const userController = require('../controllers/user')

const router = express.Router();

router.use(userController.authorize);

router.get('', productController.getAll)//get all products
router.post('/create', productController.checkPriceMiddleware, productController.create);//create a new product
router.get('/:id', productController.getProductById);//get a product by id
router.put('/:id', productController.updateProductById);//update
router.delete('/:id', productController.deleteProductById)//delete

module.exports = router;