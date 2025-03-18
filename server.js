import express from 'express';
import cors from 'cors';
import jsonServer from 'json-server';

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(middlewares);
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});