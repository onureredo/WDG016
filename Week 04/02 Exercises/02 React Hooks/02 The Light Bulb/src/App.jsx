import Instructions from './instructions/Instructions';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        <button> Turn me on! </button>
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
    </div>
  );
}
