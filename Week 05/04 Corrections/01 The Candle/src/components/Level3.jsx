import { useState, useEffect } from 'react';

const Level3 = () => {
  const [height, setHeight] = useState(80);

  const makeSmall = () => setHeight((prev) => prev - 1);

  // LEVEL 4 replaceCandle => einfach setHeight zu 80
  const replaceCandle = () => setHeight(80);

  useEffect(() => {
    setInterval(() => {
      setHeight((prev) => prev - 1);
    }, 2000);
  }, []);

  return (
    <div className='block'>
      <div>
        <button onClick={makeSmall}>Make candle smaller</button>
        {height < 10 && <button onClick={replaceCandle}>Replace Candle</button>}
      </div>
      <div className='block candleContainer'>
        {/* LEVEL 3 Conditional 
        Wenn die Höhe der Kerze 10% erreicht, soll nicht angezeigt werden.*/}
        {height > 10 && (
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
        )}
      </div>
    </div>
  );
};
export default Level3;
