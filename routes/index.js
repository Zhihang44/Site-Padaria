const { Router } = require('express');

const prefix = '/api/';
const productRoutes = require('./product/product.routes');
const routes = Router();

routes.use(`${prefix}produtos`, productRoutes);

module.exports = routes;
