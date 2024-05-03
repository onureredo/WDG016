import { Link, Route, Routes } from 'react-router-dom';
import './styles.scss';
import Results from './components/Results';
import Student from './components/Student';

export default function App() {
  return (
    <div className='App'>
      <nav>
        <Link className='link' to='/students'>
          Students
        </Link>
        <Link className='link' to='/results'>
          Results
        </Link>
      </nav>
      <div className='Instructions'>
        <div className='block'>
          For this exercise, you will have to:
          <ol>
            <li>
              The BrowserRouter is already imported for you in <b>main.jsx</b>,
              take a moment and have a look on it.
            </li>
            <li>
              Create a component named {'<Student>'} that will display
              <b>Hello you!</b> and add it to the {'<App>'} component. (Don't
              forget to import this new component in your App.jsx file)
            </li>
            <li>
              Create a second component named {'<Results>'} that will display
              <b>No results for now!</b> and add it to the {'<App>'} component.
              (Don't forget to import this new component in your App.jsx file)
            </li>
            <li>
              The navigation is already created for you, take a moment and have
              a look on it.
            </li>
            <li>
              Now, define your routing. You should create two routes:
              <ul>
                <li>/students shows the Students component</li>
                <li>/results shows the results component</li>
              </ul>
            </li>
          </ol>
          <a
            className='link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://reactrouter.com/en/main/start/overview'
          >
            Help
          </a>
        </div>

        <div className='block'>
          {' '}
          <Routes>
            <Route path='/students' element={<Student />} />
            <Route path='/results' element={<Results />} />
            <Route path='*' element={'Page not found 404'} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
