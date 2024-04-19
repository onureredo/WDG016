import { useState } from 'react';
import ExampleOutcome from './ExampleOutcome';
import Level1 from './Level1';
import Level2 from './Level2';

const Instructions = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const componentMap = {
    1: <Level1 />,
    2: <Level2 />,
  };

  const handleNext = () => {
    setActiveComponent((prevComponent) =>
      prevComponent < Object.keys(componentMap).length
        ? prevComponent + 1
        : prevComponent
    );
  };

  const handleBack = () => {
    setActiveComponent((prevComponent) =>
      prevComponent > 1 ? prevComponent - 1 : prevComponent
    );
  };

  return (
    <div className='block'>
      <div className='goal'>
        <h1>React Libraries - Tabs and Maps</h1>
        <p>
          Using <b>third party libraries</b> is often done to bring additional
          functionality to your project without having to write all the
          underlying code yourself. Libraries for React are primarily available
          through the <b>npm registry</b>, and provide <b>documentation</b> to
          explain what functionality they offer, and how to use them.
        </p>
        <b>Your goal</b>: Install and implement third party libraries.
        <ExampleOutcome />
      </div>
      <h3>
        Level {activeComponent} / {Object.keys(componentMap).length}
      </h3>
      <div>
        <button onClick={handleBack} hidden={activeComponent === 1}>
          {`< Level ${activeComponent - 1}`}
        </button>
        <button onClick={handleNext} hidden={activeComponent === 2}>
          {`Level ${activeComponent + 1} >`}
        </button>
      </div>
      {componentMap[activeComponent]}
      <div className='linkWrapper'>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/reactjs/react-tabs#react-tabs--'
        >
          React-tabs documentation
        </a>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://react-leaflet.js.org/'
        >
          React Leaflet documentation
        </a>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://react-leaflet.js.org/docs/start-installation/#using-a-package-registry'
        >
          Installing React Leaflet
        </a>
      </div>
    </div>
  );
};

export default Instructions;
