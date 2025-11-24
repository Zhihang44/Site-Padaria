const express = require('express');
const routes = require('./routes');
const { sequelize } = require('./models'); 

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'API de Produtos ok!' });
});

const PORT = process.env.PORT || 3333;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao banco de dados!');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Erro ao conectar no banco:', err);
    process.exit(1);
  }
}

start();
