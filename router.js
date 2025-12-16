const express = require('express');
const routes = express.Router();
const prefix = '/api/';

const productController = require('./controllers/productController');
const validateProduct = require('./middlewares/validateProduct');

routes.delete(`${prefix}produtos/:id`,validateProduct, productController.deleteProduct);
routes.get(`${prefix}produtos`, validateProduct, productController.getAllProducts);
routes.get(`${prefix}produtos/:id`, validateProduct, productController.getProductById);
routes.post(`${prefix}produtos`, validateProduct, productController.createProduct);

module.exports = routes;
