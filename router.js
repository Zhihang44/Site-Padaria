const express = require('express');
const routes = express.Router();
const prefix = '/api/';

const productController = require('./controllers/productController');

routes.post(`${prefix}produtos`, productController.createProduct);
routes.delete(`${prefix}produtos/:id`, productController.deleteProduct);
routes.get(`${prefix}produtos`, productController.getAllProducts);

module.exports = routes;
