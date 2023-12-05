const express = require('express');
const app = express();
const port = 3000;

// Rota que aceita qualquer verbo HTTP
app.all('*', (req, res) => {
  res.status(200).send('Requisição recebida com sucesso!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
