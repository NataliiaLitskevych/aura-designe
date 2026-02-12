import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartItems } from "./Redux/cartSlice";
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import './App.css'
import Cart from './Pages/Cart';

function App() {

  const cartItems = useSelector(getCartItems);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
   
    <Router>
      <nav className='navbar'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'link active' : 'link'}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'link active' : 'link'}>Contact us</NavLink>
        <NavLink to="/cart" className="nav-cart-link">
          <span className="cart-icon">🛒</span>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>

      <Footer />
    </Router>

  )
}

export default App
