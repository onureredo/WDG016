import { useState } from 'react';

const Level1 = () => {
  // State mit einem Standardwert von 80, um die Höhe der Kerze zu steuern (aktuell durch die Klasse "candle" kontrolliert).

  const [height, setHeight] = useState(80);

  // Verwende Make candle Smaller um die Höhe der Kerze bei jedem Click um 1 zu verringern.

  const makeSmall = () => setHeight((prev) => prev - 1);

  return (
    <div className='block'>
      <div>
        <button onClick={makeSmall}>Make candle smaller</button>
      </div>
      <div className='block candleContainer'>
        {/* HEIGHT gerne mit px, em/rem ausprobieren. Wir brauchen genau % */}
        <div className='candle' style={{ height: `${height}%` }}>
          <div className='flame'>
            <div className='shadows' />
            <div className='top' />
            <div className='middle' />
            <div className='bottom' />
          </div>
          <div className='wick' />
          <div className='wax' />
        </div>
      </div>
    </div>
  );
};
export default Level1;
