import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Footer from './Components/Footer';
import './App.css'



function App() {
  return (
    <Router>
      
      <Header />

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
