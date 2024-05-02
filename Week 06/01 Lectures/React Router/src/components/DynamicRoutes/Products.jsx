import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Products() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [productId]);

  if (!product) return <p>Loading....</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width='25%' />
      <p>{product.description}</p>
      <p>Price: {product.price} €</p>
      <button>BUY</button>
    </div>
  );
}

export default Products;
