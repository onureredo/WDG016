import { useState } from 'react';
import Counter from './Counter';

function Advanced() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]);

  const handleDecrease = (id) => {
    const newCounters = counters.map((counter) =>
      counter.id === id ? { ...counter, value: counter.value - 1 } : counter
    );
    setCounters(newCounters);
  };

  const handleIncrease = (id) => {
    const newCounters = counters.map((counter) =>
      counter.id === id ? { ...counter, value: counter.value + 1 } : counter
    );
    setCounters(newCounters);
  };
  // https://reactjs.org/docs/hooks-reference.html#functional-updates
  const decreaseAll = () => {
    setCounters((prev) =>
      prev.map((counter) => ({ ...counter, value: counter.value - 1 }))
    );
  };

  const increaseAll = () => {
    setCounters((prev) =>
      prev.map((counter) => ({ ...counter, value: counter.value + 1 }))
    );
  };

  const resetAll = () => {
    setCounters((prev) => prev.map((counter) => ({ ...counter, value: 0 })));
  };

  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          value={counter.value}
          id={counter.id}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
      ))}
      <button onClick={increaseAll}>Increase all</button>
      <button onClick={resetAll}>Reset all</button>
      <button onClick={decreaseAll}>Decrease all</button>
    </div>
  );
}

export default Advanced;
