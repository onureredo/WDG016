import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function App() {
  return (
    <div className='App'>
      <nav>
        <Link className='link' to='/students/2'>
          Students #2
        </Link>
        <Link className='link' to='/results/john'>
          Results John
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
              <b>Hello [id from the parameter]!</b> and add it to the {'<App>'}
              component. (Don't forget to import this new component in your
              App.jsx file)
            </li>
            <li>
              Create a second component named {'<Results>'} that will display
              <b>No results for [name from the parameter]!</b> and add it to the
              {'<App>'} component. (Don't forget to import this new component in
              your App.js file)
            </li>
            <li>
              The navigation is already created for you, take a moment and have
              a look on it.
            </li>
            <li>
              Now, create a {'<Routes>'} component with two routes in it. One
              for each component (Student & Results).
            </li>
          </ol>
          <a
            className='link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://reactrouter.com/en/main/hooks/use-params'
          >
            Help
          </a>
        </div>

        <p className='block'>Create your routing here! (Routes & Route)</p>
      </div>
    </div>
  );
}
