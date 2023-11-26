import React, {useContext} from 'react'
import { PRODUCTS } from '../../assets/ProductPage/Products'
import { ProductContext } from "../../Context/Product-Context";
import { CartItem } from "./Cart-Item";
import { useNavigate } from 'react-router-dom';
import { TbMoodEmpty } from "react-icons/tb";
import Footer from '../../Components/Footer';



export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ProductContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className='cart'>   
      <div>
        <h1>Cart items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0 ){
            return <CartItem data={product} />;
          }
        })}
        {totalAmount > 0 ?
        <div className='checkout'>

          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/products")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
        :<h1 className=''>Your Cart is Empty{<TbMoodEmpty/>}</h1>}
      </div>
      <Footer/>
    </div>
  )
}
