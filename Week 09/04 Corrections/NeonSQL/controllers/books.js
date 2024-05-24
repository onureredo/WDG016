import pool from '../db/server.js';

export const getAllBooks = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM books');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.stack });
  }
};

export const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.stack });
  }
};

export const addNewBook = async (req, res) => {
  const { name, author, image_url } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO books (name, author, image_url) VALUES ($1, $2, $3) RETURNING *',
      [name, author, image_url]
    );
    res.status(201).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.stack });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { name, author, image_url } = req.body;

  try {
    const result = await pool.query(
      'UPDATE books SET name = $1, author = $2, image_url = $3 WHERE id = $4 RETURNING *',
      [name, author, image_url, id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.stack });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM books WHERE ID = $1', [id]);
    res.status(200).json({ message: 'Book was deleted' });
  } catch (error) {
    res.status(500).json({ error: error.stack });
  }
};
