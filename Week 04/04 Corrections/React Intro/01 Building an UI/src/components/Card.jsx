function Card({ src, name, age }) {
  return (
    <div className='card'>
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <p>
        {name} is a loving companion who is {age} years old. Take it home!
      </p>
    </div>
  );
}

export default Card;
