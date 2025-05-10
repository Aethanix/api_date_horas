const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const now = new Date();
  res.json({
    data: now.toISOString().split('T')[0],
    hora: now.toTimeString().split(' ')[0],
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
