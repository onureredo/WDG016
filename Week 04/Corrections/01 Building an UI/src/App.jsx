import WreckshipShelter from './components/WreckshipShelter';
import Instructions from './instructions/Instructions';
import './styles.css';

export default function App() {
  // The following three variables can be moved to different files
  // as you progress through the exercise.

  return (
    <>
      <Instructions />
      <WreckshipShelter />
    </>
  );
}
