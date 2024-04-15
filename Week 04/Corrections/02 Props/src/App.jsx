import Instructions from './instructions/Instructions';
import Header from './components/Header';
import './styles.css';
import CoolComp from './components/CoolComp';
import SuperCoolComp from './components/SuperCoolComp';

export default function App() {
  const cakeFunction = () => console.log('piece ofcake!');

  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        <Header title='React is amazing!' />
        <CoolComp num1={5} num2={10} />
        <SuperCoolComp cakeFunction={cakeFunction} />
      </div>
    </div>
  );
}
