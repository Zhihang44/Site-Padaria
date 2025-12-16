const productService = require('../services/productService');
const { handleResponse, handleError, ERROR_MESSAGES } = require('../utils/utils');

const createProduct = async (req, res) => {
    try {
        const { name, quantity, price, category } = req.body;
        const newProduct = await productService.createProduct({ name, quantity, price, category });
        handleResponse(res, 200, newProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        handleError(res, 500, error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await productService.deleteProduct(id);
        if (deleted) {
            handleResponse(res, 200, deleted);
        } 
    } catch (error) {
        console.error('Error deleting product:', error);
        handleError(res, 500, error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        handleResponse(res, 200, products);
    } catch (error) {
        console.error('Error fetching products:', error);
        handleError(res, 500, error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productService.getProductById(id);
        handleResponse(res, 200, product);
    } catch (error) {
        console.error('Error fetching product:', error);
        handleError(res, 500, error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
    }
};

module.exports = {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductById
};
module.exports = { createProduct };
