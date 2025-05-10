const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const now = new Date();

  const dia = String(now.getDate()).padStart(2, '0');
  const mes = String(now.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
  const ano = now.getFullYear();

  const dataFormatada = `${dia}-${mes}-${ano}`;

  res.send(dataFormatada);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
