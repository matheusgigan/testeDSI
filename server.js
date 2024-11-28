const express = require('express');
const path = require('path');
const app = express();

// Configure a pasta pública para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'css',"img","js")));

// Rota principal (ou outras rotas)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicie o servidor
const PORT = 3000; // ou qualquer porta que desejar
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
