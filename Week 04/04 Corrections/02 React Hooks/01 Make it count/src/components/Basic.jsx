import { useState } from 'react';

function Basic() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <div>
      <p>Count: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <button onClick={() => setCount1(count1 - 1)}>-</button>

      <p>Count: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      <button onClick={() => setCount2(count2 - 1)}>-</button>

      <p>Count: {count3}</p>
      <button onClick={() => setCount3(count3 + 1)}>+</button>
      <button onClick={() => setCount3(count3 - 1)}>-</button>

      <div>
        <button
          onClick={() => {
            setCount1(count1 + 1);
            setCount2(count2 + 1);
            setCount3(count3 + 1);
          }}
        >
          Increase all
        </button>
        <button
          onClick={() => {
            setCount1(0);
            setCount2(0);
            setCount3(0);
          }}
        >
          Reset all
        </button>
        <button
          onClick={() => {
            setCount1(count1 - 1);
            setCount2(count2 - 1);
            setCount3(count3 - 1);
          }}
        >
          Decrease all
        </button>
      </div>
    </div>
  );
}

export default Basic;
