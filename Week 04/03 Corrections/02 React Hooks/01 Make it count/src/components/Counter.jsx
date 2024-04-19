function Counter({ value, handleIncrease, handleDecrease, id }) {
  return (
    <div>
      <p>Count: {value}</p>
      <button onClick={() => handleIncrease(id)}>+</button>
      <button onClick={() => handleDecrease(id)}>-</button>
    </div>
  );
}

export default Counter;
