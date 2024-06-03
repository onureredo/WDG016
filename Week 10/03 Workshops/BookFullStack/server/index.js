import express from 'express';
import './db/server.js';
import booksRouter from './routes/booksRouter.js';
import { errorHandler } from './middlewares/ErrorHandler.js';
import cors from 'cors';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

// ROUTES
app.use('/books', booksRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
