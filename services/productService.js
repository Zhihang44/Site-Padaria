const Product = require ('../models/product');
const { ERROR_MESSAGES } = require('../utils/utils');

const createProduct = async (productData) => {
    try {
        const newProduct = await Product.create(productData);
        return newProduct;
    } catch (error) {
        throw new Error(`${ERROR_MESSAGES.ERROR_CREATING_PRODUCT} ${error.message}`);
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

module.exports = {
    createProduct,
    deleteProduct   
};
