const Produto = require('./models/produtos');

const criandoProduto = async (dadosProduto) => {
    try {
        const novoProduto = await Produto.create(dadosProduto);
        return novoProduto;
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        throw error;
    }
};
const listarTodosProdutos = async () => {
    try {
        const produtos = await Produto.findAll();
        return produtos;
    } catch (error) {
        console.error('Erro ao listar produtos:', error);
        throw error;
    }
};
const obterPorID = async (id) => {
    try {
        const produto = await Produto.findOne({ where: { id } });
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado.' });
        }
        return produto;
    } catch (error) {
        throw new Error('Erro ao buscar produto: ' + error.message);
    }
};
const atualizandoPorID = async (id, dadosAtualizados) => {
    try {
        const novoProduto = await Produto.findOne({ where: { id } });
        if (!novoProduto) {
            throw new Error('Produto não encontrado');
        }
        await novoProduto.update(dadosAtualizados);
        return novoProduto;
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        throw error;
    };
};
const deletarPorID = async (id) => {
    try {
        const produto = await Produto.findOne({ where: { id } });
        if (!produto) {
            throw new Error('Produto não encontrado');
        }
        await produto.destroy();
    } catch (error) {
        throw new Error('Erro ao deletar produto: ' + error.message);
    }
};
module.exports = {
    criandoProduto,
    listarTodosProdutos,
    obterPorID,
    deletarPorID,
    atualizandoPorID
};
