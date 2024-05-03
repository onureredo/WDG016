import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
        );
        // console.log(response);
        setQuote(response.data[0]);
      } catch (error) {
        console.error('Failed to fetch', error);
      }
    };

    getData();

    const interval = setInterval(() => {
      getData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App'>
      <h1>
        <a href='/instructions.html'> instructions </a>
      </h1>
      <img
        src='https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif'
        alt='ron'
      />
      {quote ? <p>{quote}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
