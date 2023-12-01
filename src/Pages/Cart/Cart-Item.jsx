import React, {useContext} from 'react'
import { ProductContext } from "../../Context/Product-Context";
import './Cart.css'

export const CartItem = (props) => {
    const{id, name, price, image} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartAmount} = useContext(ProductContext)
  return ( 
    <div className='cart-item'>
      <div className='cart-item-image'>
        <img src={image} />
      </div>
      <div className='cart-item-name'>
        <p>{name}</p>
      </div>
      <div className='cart-item-price'>
        <p>${price}</p>
      </div>
        <div className='cart-item-quantity'>
            <button onClick={() => removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e) => updateCartAmount(Number(e.target.value), id) }/>
            <button onClick={() => addToCart(id)}> + </button>
        </div>
    </div>
  )
}
