import { useState } from 'react';

function State2() {
  const [name, setName] = useState('');
  // console.log('re-rendered');

  return (
    <div>
      <p>Your name is: {name}</p>
      <input
        type='text'
        placeholder='Type your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default State2;
