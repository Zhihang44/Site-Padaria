const { ERROR_MESSAGES } = require('../utils/utils');

const validateProduct = (req, res, next) => {
    const { name, quantity, price, category } = req.body;

    if (!name || !price || !quantity || !category) {
        return res.status(400).json({ message: ERROR_MESSAGES.ALL_FIELDS_REQUIRED });
    }
    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ message: ERROR_MESSAGES.INVALID_NAME });
    }
    if (typeof quantity !== 'number' || quantity < 0 || !Number.isInteger(quantity)) {
        return res.status(400).json({ message: ERROR_MESSAGES.INVALID_QUANTITY });
    }
    if (typeof price !== 'number' || price <= 0) {
        return res.status(400).json({ message: ERROR_MESSAGES.INVALID_PRICE });
    }
    if (typeof category !== 'string' || category.trim() === '') {
        return res.status(400).json({ message: ERROR_MESSAGES.INVALID_CATEGORY });
    }
    next();
};

module.exports = validateProduct;