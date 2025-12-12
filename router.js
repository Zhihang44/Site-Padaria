const express = require('express');
const routes = express.Router();
const prefix = '/api/';

const productController = require('./controllers/productController');
const validateProduct = require('./middlewares/validateProduct');

routes.post(`${prefix}produtos`, productController.createProduct);
routes.delete(`${prefix}produtos/:id`, productController.deleteProduct);

module.exports = routes;
