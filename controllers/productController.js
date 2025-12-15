const productService = require('../services/productService');
const { handleResponse, handleError, ERROR_MESSAGES } = require('../utils/utils');

const createProduct = async (req, res) => {
    try {
        const { nome, quantidade, preco, categoria } = req.body;

        const newProduct = await productService.createProduct({ nome, quantidade, preco, categoria });

        handleResponse(res, 200, newProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        handleError(res, 500, error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
    }
};

module.exports = { createProduct };
