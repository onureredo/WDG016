import { Link } from 'react-router-dom';
import './styles.scss';

export default function App() {
  return (
    <div className='App'>
      <nav>
        <Link className='link' to='/component1'>
          Component 1
        </Link>
        <Link className='link' to='/component2'>
          component 2
        </Link>
      </nav>
      <div className='Instructions'>
        <p className='block'>
          For this exercise, you will have to change the style of the link when
          the URL match with the path. When a link is <b>active</b> it needs to
          be <b>bold</b> and <span style={{ color: 'red' }}>red</span>.
          <br />
          <br />
          <a
            className='link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://reactrouter.com/en/main/components/nav-link'
          >
            Help{' '}
          </a>
        </p>
      </div>
    </div>
  );
}
