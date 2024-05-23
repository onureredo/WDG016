import { Router } from 'express';
import {
  addNewBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from '../controllers/books.js';

const booksRouter = Router();

booksRouter.route('/').get(getAllBooks).post(addNewBook);
booksRouter.route('/:id').get(getBookById).put(updateBook).delete(deleteBook);

export default booksRouter;
