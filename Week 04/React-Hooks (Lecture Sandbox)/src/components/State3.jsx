import { useState } from 'react';

function State3() {
  const [car, setCar] = useState({
    brand: 'BMW',
    model: 'm5',
    year: 2004,
    color: 'red',
  });

  const updateCar = () => {
    setCar((prev) => ({
      ...prev,
      year: 2022,
    }));
  };

  return (
    <div>
      <p>Updating an Object</p>
      <p>
        I have a {car.color} {car.brand} {car.model} from {car.year}
      </p>
      <button onClick={updateCar}>UpdateCar</button>
    </div>
  );
}

export default State3;
