import { useState } from 'react';

function SecondLevel() {
  const [isOn, setIsOn] = useState(false);
  const [limit, setLimit] = useState(0);

  //   const handleClick = () => {
  //     setIsOn(!isOn);
  //     if (!isOn) {
  //       setTimeout(() => {
  //         setIsOn(false);
  //       }, 5000);
  //     }
  //   };

  const handleClick = () => {
    if (limit >= 10) {
      alert(
        'Your daily electricity limit has been reached! Please light a candle instead'
      );
    }
    setIsOn(!isOn);
    if (!isOn) {
      setLimit(limit + 1);

      setTimeout(() => {
        setIsOn(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className={`block ${isOn ? 'night' : ''}`}>
        <button onClick={handleClick}>
          {isOn ? 'Turn me off!' : 'Turn me on!'}{' '}
        </button>
        <div className='container'>
          <div className='bulb-light'>
            <div id='light' />

            <div id='bulb'>
              <div className='bulb-top'>
                <div className='reflection' />
              </div>
              <div className='bulb-middle-1' />
              <div className='bulb-middle-2' />
              <div className='bulb-middle-3' />
              <div className='bulb-bottom' />
            </div>

            <div id='base'>
              <div className='screw-top' />
              <div className='screw-a' />
              <div className='screw-b' />
              <div className='screw-a' />
              <div className='screw-b' />
              <div className='screw-a' />
              <div className='screw-b' />
              <div className='screw-c' />
              <div className='screw-d' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondLevel;
