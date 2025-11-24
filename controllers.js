const produtoService = require('./services');

module.exports = {
    async criarProduto(req, res) {
        try {
            const { nome, quantidade, preco, categoria } = req.body;

            if (!nome || !quantidade || !preco || !categoria) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
            }

            const novoProduto = await produtoService.criandoProduto({ nome, quantidade, preco, categoria });
            return res.status(201).json(novoProduto);
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            return res.status(500).json({ error: 'Erro ao criar produto.' });
        }
    },
    async listarProdutos(req, res) {
        try {
            const produtos = await produtoService.listarTodosProdutos();
            return res.status(200).json(produtos);
        } catch (error) {
            console.error('Erro ao listar produtos:', error);
            return res.status(500).json({ error: 'Erro ao listar produtos.' });
        }
    },
    async obterProdutoEspecifico(req, res){
            try {
                const { id } = req.params;
                const produto = await produtoService.obterPorID(id);
                return res.json(produto);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
    },
    async atualizarEspecifico(req, res){
            try {
                const { id } = req.params;
                const { nome, quantidade, preco, categoria } = req.body;
                const produto = await produtoService.atualizandoPorID(id, { nome, quantidade, preco, categoria });
                return res.json(produto);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }   
     },
     async deletar(req, res){
        try {
             const { id } = req.params;
             await produtoService.deletarPorID(id);
             return res.status(204).send();
         } catch (error) {
             return res.status(500).json({ error: error.message });
         }
    },
}