import { Router } from 'express';
import * as bookController from '../controllers/books.js';
import upload from '../services/Upload.js';

const booksRouter = Router();

booksRouter
  .route('/')
  .get(bookController.getAllBooks)
  .post(upload.single('image'), bookController.addNewBook);

booksRouter
  .route('/:id')
  .get(bookController.getBookById)
  .put(bookController.updateBook)
  .delete(bookController.deleteBook);

booksRouter.patch('/:id', bookController.addTagToBook);

export default booksRouter;
