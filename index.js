const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const [{ value: dia }, , { value: mes }, , { value: ano }] = formatter.formatToParts(now);
  const dataFormatada = `${dia}-${mes}-${ano}`;

  res.json({ data: dataFormatada });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
