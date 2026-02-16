import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCartItems } from "../Redux/cartSlice";
import '../CSS/NavbarFooter.css'

function Header() {
  const cartItems = useSelector(getCartItems);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className='navbar'>
      <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'link active' : 'link'}>About</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'link active' : 'link'}>Contact us</NavLink>
      
      <NavLink to="/cart" className="nav-cart-link">
        <span className="cart-icon">🛒</span>
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </NavLink>
    </nav>
  );
}

export default Header;