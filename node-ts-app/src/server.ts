import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/greet', (req: Request, res: Response) => {
  const name = typeof req.query.name === 'string' ? req.query.name : 'World';
  res.json({ message: `Hello, ${name}!` });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
