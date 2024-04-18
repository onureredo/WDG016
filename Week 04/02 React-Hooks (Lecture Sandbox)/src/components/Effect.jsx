import { useEffect, useState } from 'react';

function Effect() {
  const [name, setname] = useState('');

  // every single useEffect always fires on first render
  // on first render
  useEffect(() => {
    // console.log('The component has been mounted');
  }, []);

  // depends on state
  useEffect(() => {
    // console.log('state changed');
  }, [name]);

  // on every render
  useEffect(() => {
    // console.log('re-rendered');
  });

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder='type something'
      />
    </div>
  );
}

export default Effect;
