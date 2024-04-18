import FirstLevel from './components/FirstLevel';
import SecondLevel from './components/SecondLevel';
import Instructions from './instructions/Instructions';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <Instructions />
      {/* <FirstLevel /> */}
      <SecondLevel />
    </div>
  );
}
