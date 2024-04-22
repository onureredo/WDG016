import { useState, useEffect } from 'react';

const Level2 = () => {
  const [height, setHeight] = useState(80);

  // Nun, als faule gute Entwickler möchten wir diesen Prozess automatisieren, sodass wir nicht auf einen Button klicken müssen, damit die Kerze kleiner wird.

  // Also wir implementieren einen useEffect, zusammen mit setInterval, der alle 2 Sekunden die Höhe der Kerze um 1% verringert.

  useEffect(() => {
    setInterval(() => {
      setHeight((prev) => prev - 1);
    }, 2000);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => setHeight((prev) => prev - 1), 2000);

  //   return () => clearInterval(interval);

  // mit clearInterval
  // }, []);

  return (
    <div className='block'>
      <div>
        <button onClick={''}>Make candle smaller</button>
      </div>
      <div className='block candleContainer'>
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
export default Level2;
