import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';
import { toast } from 'react-toastify';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsLoggedIn, checkUser } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8000/auth/login',
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        setIsLoggedIn(true);
        checkUser();
        // toast.info('Logged in');
        navigate('/');
      }
    } catch (error) {
      setError(error.response.data.error || 'Something went wrong');
    }
  };

  return (
    <div className='container mt-8 mx-auto max-w-md rounded-xl shadow-xl shadow-gray-500'>
      <div className='p-4'>
        <h2 className='text-2xl font-semibold mb-4'>Login</h2>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <form onSubmit={handleLogin}>
          <div className='mb-4'>
            <label className='block mb-2'>Email:</label>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='border rounded w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Password:</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='border rounded w-full p-2'
            />
          </div>
          <button type='submit' className='bg-blue-500 rounded text-white p-2'>
            Login
          </button>
        </form>
        <p className='mt-4'>
          Not registered yet?{' '}
          <Link to='/register' className='text-blue-500 underline'>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
