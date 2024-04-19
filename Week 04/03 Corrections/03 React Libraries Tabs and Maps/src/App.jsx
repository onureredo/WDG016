import MyTabs from './components/MyTabs';
import Instructions from './instructions/Instructions';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        <MyTabs />
      </div>
    </div>
  );
}
