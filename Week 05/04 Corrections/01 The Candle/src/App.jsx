import Instructions from './instructions/Instructions';
import './styles.scss';
import Candle from './components/Candle';
import Level2 from './components/Level2';
import Level3 from './components/Level3';

const App = () => {
  return (
    <>
      <Instructions />
      {/* <Candle /> */}
      {/* <Level2 /> */}
      <Level3 />
    </>
  );
};

export default App;
