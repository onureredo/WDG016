import express from 'express';
import pool from './db/server.js';
import booksRouter from './routes/booksRouter.js';
import { getOnlyMiddleware } from './middlewares/getOnlyMiddleware.js';
import { errorHandler } from './middlewares/errorHandler.js';
import cors from 'cors';

const app = express();
const PORT = 8000;

// 3-rd middlewares
app.use(express.static('public'));
app.use(express.json()); // body-parser for POST-REQUESTS w/ JSON-Payloads
app.use(cors()); // Cross Origin Ressource Sharing
// app.use(cors({ origin: 'https://irgendwas.netlify.app' }));

// mw's
// app.use(getOnlyMiddleware);

// ROUTES
app.use('/books', booksRouter);
app.post('/something', getOnlyMiddleware, (req, res) => res.send('Hello'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
