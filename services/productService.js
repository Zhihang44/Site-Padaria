const Product = require ('../models/product');

const createProduct = async (productData) => {
    try {
        const newProduct = await Product.create(productData);
        return newProduct;
    } catch (error) {
        throw new Error('Erro ao criar produto: ' + error.message);
    }
};
const deleteProduct = async (id) => {
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            throw new Error('Produto não encontrado.');
        }
        await product.destroy();
        return true;
    } catch (error) {
        throw new Error('Erro ao deletar produto: ' + error.message);
    }
};
const getAllProducts = async () => {
    try {
        const products = await Product.findAll();
        return products;
    } catch (error) {
        throw new Error('Erro ao buscar produtos: ' + error.message);
    }
};

module.exports = {
    createProduct,
    deleteProduct,
    getAllProducts
};
