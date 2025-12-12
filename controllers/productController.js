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
            return res.status(200).json({ message: 'Produto deletado com sucesso.' });
        } 
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createProduct,
    deleteProduct
};
