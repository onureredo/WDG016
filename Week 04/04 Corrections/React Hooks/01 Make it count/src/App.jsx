import Counter from './components/Counter';
import Instructions from './instructions/Instructions';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        <Counter />
      </div>
    </div>
  );
}
