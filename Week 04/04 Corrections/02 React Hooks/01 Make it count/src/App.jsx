import Advanced from './components/Advanced';
import Basic from './components/Basic';
import Instructions from './instructions/Instructions';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        {/* <Basic /> */}
        <Advanced />
      </div>
    </div>
  );
}
