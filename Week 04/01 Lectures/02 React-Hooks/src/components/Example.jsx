import { useState, useEffect } from 'react';
import { SpinnerCircular } from 'spinners-react';

function Example() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <SpinnerCircular
        size={50}
        thickness={100}
        speed={100}
        color='#36ad47'
        secondaryColor='rgba(0, 0, 0, 0.44)'
      />
    );
  }

  return (
    <div>
      {data.map((data) => (
        <div key={data.id}>
          <h2>{data.title}</h2>
          <img src={data.image} alt={data.title} width='20%' />
          <p>{data.description}</p>
          <p>${data.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Example;
