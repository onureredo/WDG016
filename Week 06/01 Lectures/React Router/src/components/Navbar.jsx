import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    setTimeout(() => {
      navigate('welcome');
      setIsLoggedIn(true);
    }, 2000);
  };

  const handleLogout = () => {
    navigate('goodbye');
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='about'>ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to='profil'>PROFIL</NavLink>
        </li>
        <li>
          <NavLink to='profil/settings'>SETTINGS</NavLink>
        </li>
        <li>
          <NavLink to='store'>STORE</NavLink>
        </li>
        {!isLoggedIn ? (
          <button onClick={handleLogin}>LOGIN</button>
        ) : (
          <button onClick={handleLogout}>LOGOUT</button>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
