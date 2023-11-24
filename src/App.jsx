import './App.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import {Products} from './Pages/Products/Products.jsx'
import {Cart} from './Pages/Cart/Cart.jsx'
import { ProductContextProvider } from './Context/Product-Context.jsx'
import Nav from './Components/Nav.jsx';
import { Wishlist } from './Pages/Wishlist/Wishlist.jsx';


function App() {
  return (
      <div className='App'>
      <ProductContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
          </Routes>
        </Router>
        </ProductContextProvider>
      </div>
      );

    
  
}

export default App;
