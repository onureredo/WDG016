import { useState, useEffect } from 'react';
import axios from 'axios';

function Async() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemons(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error.response.data);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>ASYNC AWAIT</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ol>
          {pokemons.map((pokemon) => (
            <li key={pokemon.name}>
              <p>{pokemon.name}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default Async;
