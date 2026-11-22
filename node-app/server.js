const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/greet', (req, res) => {
  const name = typeof req.query.name === 'string' ? req.query.name : 'World';
  res.json({ message: `Hello, ${name}!` });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
