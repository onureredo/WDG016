import { useState, useEffect } from 'react';

function Fetch() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((parsedData) => {
        // console.log(parsedData);
        setData(parsedData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch</h1>
      <h3>{data.author}</h3>
      <p>{data.content}</p>
      <button onClick={fetchData}>FETCH</button>
    </div>
  );
}

export default Fetch;
