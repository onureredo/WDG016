import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Instructions from './Instructions';
import Students from './components/Students';

import './styles.scss';
import StudentDetail from './components/StudentDetail';

const App = () => {
  return (
    <div className='App'>
      <nav>
        <NavLink className='link' to='/'>
          Home
        </NavLink>
        <NavLink className='link' activeClassName='active-link' to='/students'>
          Students
        </NavLink>
      </nav>
      <div className='Instructions'>
        <div className='block'>
          <Routes>
            <Route path='/' element={'HOME'} />
            <Route path='/students' element={<Students />} />
            <Route path='/students/:id' element={<StudentDetail />} />
          </Routes>
        </div>
        <Instructions />
      </div>
    </div>
  );
};

export default App;
