import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <ShoppingCart />
        <div className='mb-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
