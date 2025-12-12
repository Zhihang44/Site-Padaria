const Product = require ('../models/product');

const createProduct = async (productData) => {
    try {
        const newProduct = await Product.create(productData);
        return newProduct;
    } catch (error) {
        throw new Error('Erro ao criar produto: ' + error.message);
    }
};

module.exports = {
    createProduct
};
