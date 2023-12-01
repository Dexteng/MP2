import React, {useContext} from 'react'
import { ProductContext } from "../../Context/Product-Context";
import './Checkout.css'

export const Checkout = (props) => {
    const{id, name, price, image} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartAmount} = useContext(ProductContext)
  return ( 
    <div className='checkout-item'>
            <div className='checkout-item-name'>
            <p>{name}</p>
            </div>
            <div className='checkout-item-price'>
            <p>${price}</p>
            </div>
            <div className='checkout-amount'>
                <span className='checkout-minus' onClick={() => removeFromCart(id)}> - </span>
                <p>{cartItems[id]}</p>
                <span className='checkout-plus' onClick={() => addToCart(id)}> + </span>
            </div>
    </div>
  )
}
