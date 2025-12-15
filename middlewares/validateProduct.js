const { ERROR_MESSAGES } = require('../utils/utils');

const validateProduct = (req, res, next) => {
    const { nome, quantidade, preco, categoria } = req.body;

    if (!nome || !preco || !quantidade || !categoria) {
        return res.status(400).json({ message: ERROR_MESSAGES.ALL_FIELDS_REQUIRED });
    }
    if (typeof nome !== 'string' || nome.trim() === '') {
        return res.status(400).json({ message: ERROR_MESSAGES.INVALID_NAME });
    }
    if (typeof quantidade !== 'number' || quantidade < 0 || !Number.isInteger(quantidade)) {
        return res.status(400).json({ message: ERROR_MESSAGES.INVALID_QUANTITY });
    }
    if (typeof preco !== 'number' || preco <= 0) {
        return res.status(400).json({ message: ERROR_MESSAGES.INVALID_PRICE });
    }
    if (typeof categoria !== 'string' || categoria.trim() === '') {
        return res.status(400).json({ message: ERROR_MESSAGES.INVALID_CATEGORY });
    }
    next();
};

module.exports = validateProduct;