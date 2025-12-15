const express = require('express');
const routes = express.Router();
const prefix = '/api/';

const productController = require('./controllers/productController');
const validateProduct = require('./middlewares/validateProduct');

routes.delete(`${prefix}produtos/:id`, productController.deleteProduct);
routes.get(`${prefix}produtos`, productController.getAllProducts);
routes.get(`${prefix}produtos/:id`, productController.getProductById);
routes.post(`${prefix}produtos`, validateProduct, productController.createProduct);

module.exports = routes;
