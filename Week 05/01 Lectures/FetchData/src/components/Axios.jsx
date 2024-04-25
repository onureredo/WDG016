import axios from 'axios';
import { useState, useEffect } from 'react';

function Axios() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        // console.log(response);
        // const newPokemon = response.data.results.map((pokemon, index) => ({
        //   ...pokemon,
        //   id: index,
        // }));

        setPokemons(response.data.results);
        setLoading(false);
        // setPokemons(newPokemon);
        // console.log(newPokemon);
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>AXIOS</h2>
      <ol>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Axios;
