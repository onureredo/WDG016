import { useState } from 'react';

function FirstLevel() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
    console.log(isOn);
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

export default FirstLevel;
