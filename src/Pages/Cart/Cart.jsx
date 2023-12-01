import React, {useContext,useState} from 'react'
import { PRODUCTS } from '../../assets/ProductPage/Products'
import { ProductContext } from "../../Context/Product-Context";
import { CartItem } from "./Cart-Item";
import { Checkout } from './Checkout.jsx'
import Offcanvas from 'react-bootstrap/offcanvas';
import { useNavigate } from 'react-router-dom';
import { TbMoodEmpty } from "react-icons/tb";
import './Cart.css'
import './Checkout.css'
import cartHero from '../../assets/CartPage/Hero.jpg'
import Footer from '../../Components/Footer';



export const Cart = () => {
  const {cartItems, getTotalCartAmount, getTotalCheckoutPrice} = useContext(ProductContext)
  const totalAmount = getTotalCartAmount()
  const checkoutPrice = getTotalCheckoutPrice()
  const [show,setShow] = useState(false);
  const handleShow = () => {setShow(true);}
  const handleClose = () => {setShow(false);}
  return (
    <div className='cart-page'>   
      <div className='hero-container'>
        <img src={cartHero} alt="" />
        <h1>Cart</h1>
      </div>
      <div className='cart-item-container'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0 ){
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ?
        <div className='checkout'>

          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/products")}>Continue Shopping</button>
          <button className='checkoutButton' onClick={handleShow}>Checkout</button>
        </div>
        :<h1 className='empty-cart'>YOUR CART IS EMPTY!{<TbMoodEmpty/>}</h1>}
      <Footer/>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Title of our Application</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0 ){
            return <Checkout data={product} />;
          }
        })}
        </Offcanvas.Body>
    </Offcanvas>
    </div>
)
}
