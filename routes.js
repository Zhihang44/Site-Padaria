const express = require('express');
const controller = require('./controllers');

const routes = express.Router();
const prefix = '/api/';

routes.post(`${prefix}produtos`, controller.criarProduto);
routes.get(`${prefix}produtos`, controller.listarProdutos);
routes.get(`${prefix}produtos/:id`, controller.obterProdutoEspecifico);
routes.put(`${prefix}produtos/:id`, controller.atualizarEspecifico);
routes.delete(`${prefix}produtos/:id`, controller.deletar);

module.exports = routes;
