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
        await product.destroy();
        return true;
    } catch (error) {
        throw new Error(`${ERROR_MESSAGES.ERROR_DELETING_PRODUCT} ${error.message}`);
    }
};

const getAllProducts = async () => {
    try {
        const products = await Product.findAll();
        return products;
    } catch (error) {
        throw new Error(`${ERROR_MESSAGES.ERROR_FETCHING_PRODUCTS} ${error.message}`);
    }
};

const getProductById = async (id) => {
    try {
        const product = await Product.findByPk(id);
        return product;
    } catch (error) {
        throw new Error(`${ERROR_MESSAGES.ERROR_FETCHING_PRODUCT} ${error.message}`);
    }
};

module.exports = {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductById
};
