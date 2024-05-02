import Instructions from './Instructions';
import './styles.scss';

const App = () => {
  return (
    <div className='App'>
      <nav>
        <a className='link' href='#'>
          Students
        </a>
      </nav>
      <div className='Instructions'>
        <div className='block'>Render your components here</div>
        <Instructions />
      </div>
    </div>
  );
};

export default App;
