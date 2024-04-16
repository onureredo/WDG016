import './styles.css';
import Instructions from './instructions/Instructions';
import SecretSantaChat from './components/SecretSantaChat';

function App() {
  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        <SecretSantaChat />
      </div>
    </div>
  );
}

export default App;
