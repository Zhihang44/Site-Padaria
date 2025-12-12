const express = require('express');
const routes = express.Router();
const prefix = '/api/';

const productController = require('./controllers/productController');

routes.post(`${prefix}produtos`, productController.createProduct);

module.exports = routes;
