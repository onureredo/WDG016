import { useState, useEffect } from 'react';
import axios from 'axios';
import NewBookForm from './NewBookForm';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error by fetch', error);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/books/${id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      alert('Book was deleted');
    } catch (error) {
      console.error('Error deleting book', error);
    }
  };

  const handleBookAdded = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div>
      <NewBookForm onBookAdded={handleBookAdded} />
      {books.length === 0 ? (
        <p>No books available...</p>
      ) : (
        <ul className='book-list'>
          {books.map((book) => (
            <li key={book._id} className='book-item'>
              <h2>{book.name}</h2>
              <p>Author: {book.author}</p>
              {book.image_url && <img src={book.image_url} alt={book.name} />}
              <button onClick={() => handleDelete(book._id)}>DELETE</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Books;
