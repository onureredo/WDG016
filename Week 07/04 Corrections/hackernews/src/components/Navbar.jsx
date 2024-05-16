const Navbar = ({ onSearch }) => {
  return (
    <div className='navbar'>
      <div className='logoContainer'>
        <img src='y18.svg' alt='Hacker News Logo' className='navbarLogo' />
        <a href='' className='navbarTitle'>
          HackerNews
        </a>
      </div>
      <div className='navLinks'>
        <a href='/' className='navbarItem'>
          new
        </a>
        <span> | </span>
        <a href='/' className='navbarItem'>
          past
        </a>
        <span> | </span>
        <a href='/' className='navbarItem'>
          comments
        </a>
        <span> | </span>
        <a href='/' className='navbarItem'>
          ask
        </a>
        <span> | </span>
        <a href='/' className='navbarItem'>
          show
        </a>
        <span> | </span>
        <a href='/' className='navbarItem'>
          jobs
        </a>
        <span> | </span>
        <a href='/' className='navbarItem'>
          submit
        </a>
        <input
          type='text'
          placeholder='Search'
          onChange={(e) => onSearch(e.target.value)}
          className='searchInput'
        />
        <a href='/login' className='navbarItem'>
          login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
