const productService = require('../services/productService');

const createProduct = async (req, res) => {
    try {
        const { nome, quantidade, preco, categoria } = req.body;
        if (!nome || !preco || !quantidade || !categoria) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
        }
        const newProduct = await productService.createProduct({ nome, quantidade, preco, categoria });
        return res.status(201).json(newProduct);
    } catch (error) {
        return res.status(500).json({ message: error.message });
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
