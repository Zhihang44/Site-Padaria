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

module.exports = {
    createProduct
};
