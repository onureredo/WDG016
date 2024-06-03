import { useState } from 'react';
import axios from 'axios';

function NewBookForm({ onBookAdded }) {
  const [bookData, setBookData] = useState({
    name: '',
    author: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', bookData.name);
    formData.append('author', bookData.author);
    formData.append('image', bookData.image);

    try {
      const response = await axios.post(
        'http://localhost:8000/books',
        formData
      );
      console.log('New book added:', response.data);
      onBookAdded(response.data);
      alert('Book added');
      // reset form
      setBookData({
        name: '',
        author: '',
        image: null,
      });
    } catch (error) {
      console.error('Error adding book', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new Book</h1>
      <div>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          value={bookData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='author'>Author:</label>
        <input
          type='text'
          name='author'
          value={bookData.author}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='image'>Image:</label>
        <input type='file' name='image' onChange={handleChange} />
      </div>
      <button type='submit'>Add Book</button>
    </form>
  );
}

export default NewBookForm;
