import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

function Navbar() {
  const { isLoggedIn, setIsLoggedIn, userData } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.post(
        'http://localhost:8000/auth/logout',
        {},
        { withCredentials: true }
      );
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
      // toast.error('Error logging out');
    }
  };

  return (
    <div className='flex justify-between bg-blue-500 p-6 text-white text-lg font-bold border-b-8 border-blue-200'>
      <Link to='/'>
        <h1>WDG16 BLOG APP</h1>
      </Link>
      <div className='flex items-center space-x-4'>
        {isLoggedIn ? (
          <div className='space-x-4'>
            <Link to='/post' className='cursor-pointer hover:opacity-80'>
              POST
            </Link>
            <button onClick={handleLogout}>LOGOUT</button>
            <p className='text-sm'>Welcome {userData.firstName}</p>
          </div>
        ) : (
          <Link to='/login' className='cursor-pointer hover:opacity-80'>
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
