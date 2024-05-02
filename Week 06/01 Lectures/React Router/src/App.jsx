import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Profil from './components/NestedRoutes/Profil';
import Settings from './components/NestedRoutes/Settings';
import Welcome from './components/Welcome';
import Goodbye from './components/Goodbye';
import Productlist from './components/DynamicRoutes/Productlist';
import Products from './components/DynamicRoutes/Products';
import Notfound from './components/Notfound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='welcome' element={<Welcome />} />
        <Route path='goodbye' element={<Goodbye />} />

        {/* NESTED ROUTES */}
        <Route path='profil' element={<Profil />}>
          <Route path='settings' element={<Settings />} />
        </Route>

        {/* DYNAMIC ROUTES */}
        <Route path='store' element={<Productlist />} />
        <Route path='store/:productId' element={<Products />} />

        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
