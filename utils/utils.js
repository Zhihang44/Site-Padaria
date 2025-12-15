/**
 * Constantes de mensagens de erro padronizadas
 */
const ERROR_MESSAGES = {
    // Validação de campos
    ALL_FIELDS_REQUIRED: 'All fields are required.',
    INVALID_NAME: 'Name must be a valid text.',
    INVALID_QUANTITY: 'Quantity must be a positive integer.',
    INVALID_PRICE: 'Price must be a positive number.',
    INVALID_CATEGORY: 'Category must be a valid text.',

    ERROR_CREATING_PRODUCT: 'Error creating product.',
    INTERNAL_SERVER_ERROR: 'Internal server error.',

    SUCCESS_CREATING_PRODUCT: 'Product created successfully.',
};

/**
 * Função utilitária para padronizar respostas HTTP.
 * @param {Object} res - O objeto de resposta do Express.
 * @param {number} statusCode - O código de status HTTP.
 * @param {Object} data - Os dados a serem enviados como resposta.
 */
const handleResponse = (res, statusCode, data) => {
    return res.status(statusCode).json(data);
}

const handleError = (res, statusCode, message) => {
    return res.status(statusCode).json({ message });
};

module.exports = { handleResponse, handleError, ERROR_MESSAGES };
