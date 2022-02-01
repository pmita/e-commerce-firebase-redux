import React from 'react'
//COMPONENTS
import Navbar from './components/Navbar';
//ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//PAGES
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Signin from './pages/Signin/Signin';
import Signout from './pages/Signout/Signout';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/about' element={<Cart />} />
          <Route path='/about' element={<Contact />} />
          <Route path='/about' exact element={<Product />} />
          <Route path='/about' element={<Products />} /> 
          <Route path='/about' element={<Signin />} /> 
          <Route path='/about' element={<Signout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
