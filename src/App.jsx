import './App.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import {Products} from './Pages/Products/Products.jsx'
import {Cart} from './Pages/Cart/Cart.jsx'
import Index from './Pages/Hero/Index.jsx';
import { ProductContextProvider } from './Context/Product-Context.jsx'
import Nav from './Components/Nav.jsx';
import { Wishlist } from './Pages/Wishlist/Wishlist.jsx';
import AboutUs from './Pages/AboutUs/AboutUs.jsx'
import { Register } from './Pages/Login/Register.jsx';
import { Login } from './Pages/Login/Login.jsx';
import { SeeMore } from './Pages/SeeMore/SeeMore.jsx';


function App() {
  return (
      <div className='App'>
      <ProductContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/seemore" element={<SeeMore/>}/>
          </Routes>
        </Router>
        </ProductContextProvider>
      </div>
      );

    
  
}

export default App;
