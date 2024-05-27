import { Router } from 'express';
import {
  addNewBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from '../controllers/books.js';
import { booksLogger } from '../middlewares/booksLogger.js';
import { timeLogger } from '../middlewares/timeLogger.js';

const booksRouter = Router();
// booksRouter.use(booksLogger);

booksRouter.route('/').get(timeLogger, booksLogger, getAllBooks);
booksRouter.route('/').post(addNewBook);
booksRouter.route('/:id').get(booksLogger, getBookById);
booksRouter.route('/:id').put(updateBook);
booksRouter.route('/:id').delete(deleteBook);

export default booksRouter;
