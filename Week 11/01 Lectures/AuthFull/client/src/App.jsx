import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import NotFound from './components/NotFound';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/post' element={<CreatePost />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
