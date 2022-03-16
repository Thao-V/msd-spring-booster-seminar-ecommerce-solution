const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, default: 0 }
})
const ProductModel = mongoose.model('product', ProductSchema)
class ProductCollection {
    static async getAll() {
        const products = await ProductModel.find();
        return products;
    }
    static async create(obj) {
        const product = new ProductModel(obj);
        await product.save();
        return product;
    }
    static async getById(id){
        const product = await ProductModel.findOne({_id: id});
        return product;
    }
    static async update(id, obj){
        const product = await ProductModel.updateOne({_id: id}, obj);
        return product;
    }
    static async delete(id){
        const product = await ProductModel.deleteOne({_id: id});
        return product;
    }
}

module.exports = ProductCollection;