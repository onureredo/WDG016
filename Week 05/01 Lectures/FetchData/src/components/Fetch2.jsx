import { useState, useEffect } from 'react';

function Fetch2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((parsedData) => {
        // console.log(parsedData);
        setData(parsedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h3>{data.author}</h3>
          <p>{data.content}</p>
        </div>
      )}

      <button onClick={fetchData}>FETCH</button>
    </div>
  );
}

export default Fetch2;
