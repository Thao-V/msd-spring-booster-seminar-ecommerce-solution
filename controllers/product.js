const ProductCollection = require('../models/product')
exports.getAll = async (req, res) => {
    const products = await ProductCollection.getAll();
    res.send(products);
}

exports.create = async (req, res) => {
    const product = await ProductCollection.create(req.body);
    res.send(product)
}

exports.updateProductById = async (req, res) => {
    const product = await ProductCollection.update(req.params.id, req.body);
    res.send(product)
}

exports.deleteProductById = async (req, res) => {
    const product = await ProductCollection.delete(req.params.id);
    res.send(product)
}

exports.getProductById = async (req, res) => {
    const product = await ProductCollection.getById(req.params.id);
    res.send(product)
}

exports.checkPriceMiddleware = (req, res, next) => {
    if(req.body && req.body.price < 1000){
        next();
    }
    else{
        //res.send('You cannot add the product with the price >= 1000')
        throw new Error("You cannot add the product with the price >= 1000")
    }
}